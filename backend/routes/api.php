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
Route::controller(TransactionController::class)->group(function() {
    Route::get('/transactions/{page?}/{name?}/{sort?}/{category?}','index')->name('transactions.index');
    Route::get('/transactions', 'getRecurringBills')->name('transactions.getRecurringBills');
});

// Budgets APIs
Route::controller(BudgetController::class)->group(function() {
    Route::get('/budgets/transactions', 'getTransactionsByCategory')->name('budgets.getTransactionsByCategory');
});

// Pots APIs
Route::controller(PotController::class)->name('pots.')->group(function() {
    Route::patch('/pots/{pot}/money', 'addMoney')->name('addMoney');
    Route::patch('/pots/{pot}/withdraw','withdrawMoney')->name('withdrawMoney');
});

// Balances APIs

Route::controller(BalanceController::class)->group(function() {
    // Los names evitas utilizar por todo lados las url completas, por ejemplo en ls redirects.
    Route::get('/balances/{id}','show')->where('id', '[0-9]+')->name('balances.show');
    Route::patch('/balances/{id}', 'update')->whereNumber('id')->name('balances.update');
});

Route::apiResource("budgets", BudgetController::class);
Route::apiResource('pots', PotController::class);
