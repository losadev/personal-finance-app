<?php

namespace Database\Factories;

use App\Models\Pot;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Pot>
 */
class PotFactory extends Factory
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
            'name' => fake()->name(),
            'target' => fake()->numberBetween(1,1000000),
            'total' => fake()->numberBetween(1,1000000),
            'theme' => fake()->hexColor()
        ];
    }
}