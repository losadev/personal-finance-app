<?php

namespace App\Providers;

use App\Contracts\BudgetInterface;
use App\Models\Budget;
use App\Repositories\Eloquent\EloquentBudgetRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(BudgetInterface::class, EloquentBudgetRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Budget::shouldBeStrict(!app()->isProduction());
    }
}