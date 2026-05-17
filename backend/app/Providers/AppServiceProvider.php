<?php

namespace App\Providers;

use App\Contracts\BudgetInterface;
use App\Models\Budget;
use App\Models\User;
use App\Repositories\Eloquent\EloquentBudgetRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Route;
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
        Model::shouldBeStrict(true);//  lanza excepcion si hauqe N +1 queries.
        Route::pattern('id', '[0-9]+'); // esto aplica a todas las rutas con un id por parametro
        Route::model('user',User::class);
        // Route::bind('user', function (string $value) {
        //     return User::where('name', $value)->firstOrFail();
        // });
    }
}