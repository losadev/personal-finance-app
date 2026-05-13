<?php

namespace App\Providers;

use App\Contracts\BudgetInterface;
use App\Http\Controllers\BudgetController;
use App\Models\Budget;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(BudgetInterface::class, BudgetController::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Budget::shouldBeStrict(!app()->isProduction());
    }
}