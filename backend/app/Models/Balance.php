<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Balance extends Model
{
    protected $fillable = [
        'income'
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
