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

Route::get('/transactions', [TransactionController::class, 'index']);

Route::get('/transactions', [TransactionController::class, 'getRecurringBills']);

// Budgets APIs

Route::controller(BudgetController::class)->group(function() {

    Route::delete('/budgets/{budget}','destroy');

    Route::get('/budgets', 'index');

    Route::get('/budgets/transactions', 'getTransactionsByCategory');

    Route::patch('/budgets/{budget}', 'update');

    Route::post('/budgets','store');
});


// Pots APIs
Route::controller(PotController::class)->group(function() {

    Route::delete('/pots/{pot}', 'destroy');

    Route::get('/pots', 'index');

    Route::patch('/pots/{pot}','update');

    Route::post('/pots', 'store');

    Route::patch('/pots/{pot}/money', 'addMoney');

    Route::patch('/pots/{pot}/withdraw','withdrawMoney');
});

// Balances APIs

Route::controller(BalanceController::class)->group(function() {
    Route::get('/balances/{id}','show');
    Route::patch('/balances/{id}', 'update');
});