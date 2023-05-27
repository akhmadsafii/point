<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        $credentials = $request->only('username', 'password');
        $credentials['status'] = 1;

        if (filter_var($credentials['username'], FILTER_VALIDATE_EMAIL)) {
            $usernameField = 'email';
        } else {
            $usernameField = 'phone';
        }

        if (Auth::guard('admin')->attempt([$usernameField => $credentials['username'], 'password' => $credentials['password'], 'status' => $credentials['status']], $request->remember)) {
            session()->put('role', 'admin');
            // dd("ini admin");
        } elseif (Auth::guard('teacher')->attempt([$usernameField => $credentials['username'], 'password' => $credentials['password'], 'status' => $credentials['status']], $request->remember)) {
            session()->put('role', 'teacher');
            // dd('teacher');
        } elseif (Auth::attempt([$usernameField => $credentials['username'], 'password' => $credentials['password'], 'status' => $credentials['status']], $request->remember)) {
            session()->put('role', 'user');
            // dd('user');
        } else {
            throw ValidationException::withMessages([
                'username' => 'The provided credentials do not match our records.',
            ]);
        }

        session()->regenerate();
        return redirect('/dashboard')->with([
            'type' => 'success',
            'message' => 'You are logged in.'
        ]);
    }

    protected function check_credentials(Request $request)
    {
        // dd($request);
        if (filter_var($request->get('username'), FILTER_VALIDATE_EMAIL)) {
            return ['email' => $request->get('username'), 'password' => $request->get('password'), 'status' => 1];
        }
        return ['phone' => $request->get('username'), 'password' => $request->get('password'), 'status' => 1];
    }

    public function destroy()
    {
        Auth::logout();

        return redirect('/login')->with([
            'type' => 'success', 'message' => 'You are now logout.',
        ]);
    }
}
