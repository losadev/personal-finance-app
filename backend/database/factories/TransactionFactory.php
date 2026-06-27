<?php

namespace Database\Factories;

use App\Models\Budget;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Transaction>
 */
class TransactionFactory extends Factory
{

    protected $model = Transaction::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::class,
            'budget_id' => Budget::class,
            'avatar' => fake()->imageUrl(),
            'name' => fake()->name(),
            'category' => fake()->text(20),
            'date' => fake()->dateTimeThisYear(),
            'amount' => fake()->numberBetween(1, 100000),
            'recurring' => fake()->boolean()
        ];
    }
}
