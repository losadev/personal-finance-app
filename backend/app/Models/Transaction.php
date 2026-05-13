<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'budget_id',
        'avatar',
        'name',
        'category',
        'date',
        'amount',
        'recurring'
    ];

    public function budget(): BelongsTo {
        return $this->belongsTo(Budget::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
