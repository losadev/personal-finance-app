<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
// !Deferr ->  utilizarlo cuando son costosos de instancia y rara vez se usan.
class BudgetServiceProvider extends ServiceProvider
{
    /**
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    // public $bindings = [
    //     ServerProvider::class => DigitalOceanServerProvider::class,
    // ];
    /**
     * Register services.
     */
    public function register(): void
    {
        // Aqui solo se puede definir la implementacion para bindear al service container, nada mas
        //$this->app->singleton(Connection::class, function (Application $app) {
        //     return new Connection(config('riak'));
        // });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
