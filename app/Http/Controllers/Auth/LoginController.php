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
        // dd($request);
        // dd(Auth::guards());
        $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::guard('admin')->attempt($this->check_credentials($request), $request->filled('remember'))) {
            session()->put('role', 'admin');
            return redirect('/dashboard')->with([
                'type' => 'success',
                'message' => 'You are logged in.'
            ]);
        }

        // else if (Auth::guard('teacher')->attempt($this->check_credentials($request), $request->filled('remember'))) {
        //     // dd(Auth::guard('teacher')->user()->type);
        //     Helper::alert('success', 'Selamat Datang !', 'Berhasil Login');
        //     session()->put('role', 'teacher');
        //     session()->put('type-teacher', Auth::guard('teacher')->user()->type);
        //     session()->put('layout', 'teacher');
        //     return redirect()->route('teacher.dashboard');
        // } else if (Auth::guard('user')->attempt($this->check_credentials($request), $request->filled('remember'))) {
        //     session()->put('role', 'student');
        //     session()->put('id_student', Auth::guard('user')->user()->id);
        //     Helper::alert('success', 'Selamat Datang ' . Auth::guard('user')->user()->name . '!', 'Berhasil Login');
        //     return redirect()->route('user.dashboard');
        // }

        // if (Auth::attempt($request->only('email', 'password'), $request->remember)) {
        //     session()->regenerate();
        //     return redirect('/dashboard')->with([
        //         'type' => 'success',
        //         'message' => 'You are logged in.'
        //     ]);
        // }

        throw ValidationException::withMessages([
            'username' => 'The provide credentials does not match our record.',
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
