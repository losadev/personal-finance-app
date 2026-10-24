<?php

namespace App\Console\Commands;

use App\Models\Transaction;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Signature('app:transactions {id}')]
#[Description('Command description')]
class Transactions extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');
        $transaction = Transaction::find($id);
        $this->info($transaction->name);
    }
}