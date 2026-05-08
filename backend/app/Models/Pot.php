<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pot extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'target',
        'total',
        'theme',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
