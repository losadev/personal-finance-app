<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('app:hi {name : Nombre de la persona} {--lastName= : Apellido de la persona} {--uppercase : Indica si quiere el mensaje en mayusculas}')]
#[Description('Command description')]
class Hi extends Command
{

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');
        $lName = $this->option('lastName');
        $message = "Hello {$name} {$lName}";
        $uppercase = $this->option('uppercase');

        if($uppercase) {
            $message = strtoupper($message);
        }
        $this->info($message);

    }
}
