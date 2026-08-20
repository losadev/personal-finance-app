<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use Exception;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class LogUserRegistered implements ShouldQueue
{
    use InteractsWithQueue;

    # numero de reintentos que tiene de reintentos
    public $tries = 3;
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     * Nos parametros poñenese os eventos que se van a escoitar.
     */
    public function handle(UserRegistered $event): void
    {
        # tiempo de demora entre cada reintento
        $this->release(5);
        throw new \Exception('Error en el log al registrar un usuario');
        //Log::info('User has been registered', ['id' => $event->user->id]);
    }

    public function failed(Exception $exception) {
        Log::critical("Error al registrar el usuario : {$this->attempts()}");
    }
}