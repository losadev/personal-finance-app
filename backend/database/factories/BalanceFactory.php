<?php

namespace Database\Factories;

use App\Models\Balance;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Balance>
 */
class BalanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::class,
            'current' => fake()->numberBetween(0, 1000000),
            'income' => fake()->numberBetween(0, 1000000),
            'expenses' => fake()->numberBetween(0, 1000000),
        ];
    }
}
