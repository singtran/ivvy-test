<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::addGlobalScope('user_id', function (Builder $builder) {
            $builder->where('user_id', auth()->id());
        });
    }
}
