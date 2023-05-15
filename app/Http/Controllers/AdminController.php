<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $searchQuery = $request->query('search');

        $admins = Admin::query()
            ->when($searchQuery, function ($query) use ($searchQuery) {
                $query->where('name', 'like', "%{$searchQuery}%")
                    ->orWhere('username', 'like', "%{$searchQuery}%")
                    ->orWhere('email', 'like', "%{$searchQuery}%")
                    ->orWhere('address', 'like', "%{$searchQuery}%");
            })
            ->latest()
            ->paginate(10);

        return Inertia::render('Admins/Index', [
            'admins' => AdminResource::collection($admins),
            'searchQuery' => $searchQuery,
        ]);
    }
}
