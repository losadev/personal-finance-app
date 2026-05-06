<?php

namespace App\Models;

use Illuminate\Contracts\Support\HasOnceHash;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Budget extends Model
{
    protected $fillable = [
        'user_id',
        'category',
        'maximum',
        'theme'
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}