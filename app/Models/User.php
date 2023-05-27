<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory,  HasApiTokens;

    protected $table = "users";

    protected $guarded = [];

    // protected $dates = ['deleted_at'];

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public function isUser()
    {
        return $this->hasOne(User::class)->exists();
    }

    public function isAdmin()
    {
        return $this->hasOne(Admin::class)->exists();
    }

    public function isTeacher()
    {
        return $this->hasOne(Teacher::class)->exists();
    }

    public function isRoleAdminOrTeacher()
    {
        return $this->isAdmin() || $this->isTeacher();
    }
}
