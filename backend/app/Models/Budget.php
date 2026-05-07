<?php

namespace App\Models;

use Illuminate\Contracts\Support\HasOnceHash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Budget extends Model
{

    use HasFactory;

    protected $fillable = [
        'user_id',
        'category',
        'maximum',
        'theme'
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function transactions(): HasMany {
        return $this->hasMany(Transaction::class);
    }
}