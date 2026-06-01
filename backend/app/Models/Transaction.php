<?php

namespace App\Models;

use App\Models\Scopes\TransactionScope;
use Illuminate\Database\Eloquent\Builder;
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

    public function scopeCategory(Builder $builder, ?string $category) {
        return $builder->when($category, fn ($builder) => $builder->where('category', 'like', "%$category%"));
    }

    public function  scopeSortByDate(Builder $builder, ?string $sort): Builder {
        return match ($sort) {
            'latest' => $builder->latest('created_at'),
            'oldest' => $builder->oldest('created_at'),
            default => $builder,
        };
    }

    public function  scopeSortByName(Builder $builder, ?bool $) {
        return $builder->when($oldest, fn ($builder) => $builder->oldest('created_at'));
    }

    // TODO: faltan amount (highest and lowest) y name (A-Z , Z-A)
}
