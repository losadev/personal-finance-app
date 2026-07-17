<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\PotController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\BudgetController;
use App\Http\Middleware\CheckValueInHeader;
use App\Http\Middleware\DataToUppercase;
use App\Http\Middleware\LogRequest;

Route::controller(TransactionController::class)->group(function() {
    Route::get('/transactions/{page?}/{name?}/{sort?}/{category?}','index')->name('transactions.index')->middleware([DataToUppercase::class, "checkvalue:pollo,loco",LogRequest::class]); #  middleware local, solo para esta ruta
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

Route::apiResource('pots', PotController::class)->middleware(LogRequest::class);
Route::apiResource('balances', BalanceController::class);
