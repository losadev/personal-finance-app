<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pot extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'target',
        'total',
        'theme',
    ];

    # esto oculta esos campos que envias en el json
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}