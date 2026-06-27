<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\PotController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\BudgetController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// TRANSACTIONS APIs
Route::get('/transactions/{page?}/{name?}/{sort?}/{category?}', [TransactionController::class, 'index'])->name('transactions.index');

Route::get('/transactions', [TransactionController::class, 'getRecurringBills'])->name('transactions.getRecurringBills');

// Budgets APIs
Route::controller(BudgetController::class)->group(function() {

    Route::delete('/budgets/{budget}','destroy')->name('budgets.destroy');

    Route::get('/budgets', 'index')->name('budgets.index');

    Route::get('/budgets/transactions', 'getTransactionsByCategory')->name('budgets.getTransactionsByCategory');

    Route::patch('/budgets/{budget}', 'update')->name('budgets.update');

    Route::post('/budgets','store')->name('budgets.store');
});


// Pots APIs
Route::controller(PotController::class)->name('pots.')->group(function() {

    Route::delete('/pots/{pot}', 'destroy')->name('destroy');

    Route::get('/pots', 'index')->name('index');

    Route::patch('/pots/{pot}','update')->name('update');

    Route::post('/pots', 'store')->name('store');

    Route::patch('/pots/{pot}/money', 'addMoney')->name('addMoney');

    Route::patch('/pots/{pot}/withdraw','withdrawMoney')->name('withdrawMoney');
});

// Balances APIs

Route::controller(BalanceController::class)->group(function() {
    // Los names evitas utilizar por todo lados las url completas, por ejemplo en ls redirects.
    Route::get('/balances/{id}','show')->where('id', '[0-9]+')->name('balances.show');
    Route::patch('/balances/{id}', 'update')->whereNumber('id')->name('balances.update');
});
