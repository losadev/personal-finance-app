<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\PotController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\BudgetController;

Route::controller(TransactionController::class)->group(function() {
    Route::get('/transactions/{page?}/{name?}/{sort?}/{category?}','index')->name('transactions.index');
    Route::get('/transactions', 'getRecurringBills')->name('transactions.getRecurringBills');
});

Route::controller(BudgetController::class)->group(function() {
    Route::get('/budgets/transactions', 'getTransactionsByCategory')->name('budgets.getTransactionsByCategory');
});

Route::controller(PotController::class)->name('pots.')->group(function() {
    Route::patch('/pots/{pot}/money', 'addMoney')->name('addMoney');
    Route::patch('/pots/{pot}/withdraw','withdrawMoney')->name('withdrawMoney');
});

Route::apiResource("budgets", BudgetController::class);
Route::apiResource('pots', PotController::class);
Route::apiResource('balances', BalanceController::class);

Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class])->name("login");