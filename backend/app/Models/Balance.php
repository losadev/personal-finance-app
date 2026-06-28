<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Balance extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'current',
        'income',
        'expenses'
    ];

    public function getById(string $id) {

        $balance = Balance::findOrFail($id);

        if(!$balance) {
            return response()->json('error', 404);
        }

        return $balance;
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
