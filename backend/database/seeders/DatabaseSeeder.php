<?php

namespace Database\Seeders;

use App\Models\Budget;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)
        ->create()
        ->each(function ($user) {
            Budget::factory(3)
                ->create(['user_id' => $user->id])
                ->each(function ($budget) use ($user) {
                    Transaction::factory(5)->create([
                        'budget_id' => $budget->id,
                        'user_id'   => $user->id,
                    ]);
                });
        });
    }
}
