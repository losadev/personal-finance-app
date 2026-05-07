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

// Budgets APIs

Route::controller(BudgetController::class)->group(function() {

    Route::delete('/budgets/{budget}','destroy');

    Route::get('/budgets/{budget}', 'show');

    Route::get('/budgets', 'index');

    Route::get('/budgets/{id}/transactions', 'getLastThreeByCategory');

    Route::patch('/budgets/{id}', 'edit');

    Route::post('/budgets','store');
});


// Pots APIs
Route::controller(PotController::class)->group(function() {

    Route::delete('/pots/{id}', 'destroy');

    Route::get('/pots', 'index');

    Route::patch('/pots/{id}','edit');

    Route::post('/pots', 'store');

    Route::post('/pots/{id}/money', 'addMoney');

    Route::post('/pots/{id}/withdraw','withdrawMoney');
});

// Balances APIs

Route::controller(BalanceController::class)->group(function() {
    Route::get('/balances/{id}','show');
    Route::patch('/balances/{id}', 'update');
});
