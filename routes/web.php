<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth:user,admin,teacher')->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::get('logout', [LoginController::class, 'destroy'])->name('logout');

    Route::apiResource('users', UserController::class);
    Route::prefix('admin')->name('admins.')->group(function () {
        Route::get('/', [AdminController::class, 'index'])->name('index');
        Route::post('update', [ScoreExtracurricularController::class, 'storeOrUpdate'])->name('storeOrUpdate');
    });

    Route::get('profile', ProfileController::class)->name('profile');
});

// Route::middleware('guest')->group(function () {
Route::get('login', [LoginController::class, 'create'])->name('login');
Route::post('login', [LoginController::class, 'store']);

Route::get('register', [RegisterController::class, 'create'])->name('register');
Route::post('register', [RegisterController::class, 'store']);

Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
// });
