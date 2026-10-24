<?php

<<<<<<< HEAD
use App\Http\Controllers\AuthController;
=======
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
>>>>>>> 3e21d9af89bdb35f957ce04f733369c9333ead2e
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\PotController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\BudgetController;
<<<<<<< HEAD
=======
use App\Http\Controllers\InfoController;
use App\Http\Middleware\CheckValueInHeader;
>>>>>>> 3e21d9af89bdb35f957ce04f733369c9333ead2e
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
<<<<<<< HEAD
Route::apiResource('pots', PotController::class);
Route::apiResource('balances', BalanceController::class);

Route::post("/register", [AuthController::class, 'register']);
#Route::post("/login", [AuthController::class, 'login']);

Route::apiResource('pots', PotController::class)->middleware(LogRequest::class);
=======
Route::apiResource('pots', PotController::class)->middleware(LogRequest::class);
Route::apiResource('balances', BalanceController::class);

Route::controller(AuthController::class)->group(function() {
    Route::post('/register','register');
    //Route::middleware('web')->post('/login','login');
});
Route::get('/saludar', [InfoController::class, 'saludar']);

Route::get('/iva', [InfoController::class, 'iva']);
Route::get('/encryptEmail/{id}', [InfoController::class, 'encryptEmail']);

/*
|--------------------------------------------------------------------------
| Protected Routes (authentication required)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {
    // Authentication routes
    Route::prefix('auth')->group(function () {
        // Get current user
        Route::get('/user', [AuthController::class, 'user'])
            ->name('api.auth.user');

        // Logout (revoke current token)
        //Route::post('/logout', [AuthController::class, 'logout'])
        //->name('api.auth.logout');

        // Logout all sessions
        // Route::post('/logout-all', [AuthController::class, 'logoutAll'])
        //     ->name('api.auth.logout-all');

        // List all tokens
        Route::get('/tokens', [AuthController::class, 'tokens'])
            ->name('api.auth.tokens');

        // Revoke specific token
        // Route::delete('/tokens/{tokenId}', [AuthController::class, 'revokeToken'])
        //     ->name('api.auth.revoke-token');
    });

    // Your protected API resources go here
    // Route::apiResource('posts', PostController::class);
    // Route::apiResource('comments', CommentController::class);
    });

Route::get('api',[ApiController::class, 'get']);
>>>>>>> 3e21d9af89bdb35f957ce04f733369c9333ead2e
