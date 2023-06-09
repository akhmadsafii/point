<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
            'address' => $this->address,
            'file' => $this->file ? asset($this->file) : asset('img/user.png'),
            'joined' => $this->created_at->diffForHumans(),
        ];
    }
}
