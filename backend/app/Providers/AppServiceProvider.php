<?php

namespace App\Providers;

use App\Bussiness\Interfaces\MessageInterface;
use App\Bussiness\Services\EncryptService;
use App\Bussiness\Services\HiService;
use App\Bussiness\Services\HiTwoService;
use App\Contracts\BudgetInterface;
use App\ExternalServices\ApiService;
use App\Http\Controllers\InfoController;
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
        $this->app->bind(MessageInterface::class, HiTwoService::class);
        $this->app->bind(EncryptService::class, function () {
            return new EncryptService(env('APP_KEY'));
        });
        $this->app->when(InfoController::class)
        ->needs(MessageInterface::class)
        ->give(HiTwoService::class);

        $this->app->singleton(ApiService::class, function () {
            $url = config('services.url.api');
            return new ApiService($url);
        });
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