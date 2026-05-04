<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// TRANSACTIONS APIs

Route::get('/transactions', function(Request $request) {
    return 'hola';
});

// Budgets APIs

Route::delete('/budgets/{id}', function(string $id) {
    return 'Budget  deleted: ' .  $id;
});


Route::get('/budgets', function(Request $request) {
    return 'Budgets';
});


Route::get('/budgets/{id}/transactions', function(Request $request, string $id) {
    return 'Last 3 transactions: '. $id;
});

Route::patch('/budgets/{id}', function(Request $request, string $id) {
    return 'Budget modificado: '. $id;
});

Route::post('/budgets', function(Request $request) {
    return 'Budget creado';
});


// Pots APIs

Route::delete('/pots/{id}', function(string $id) {
    return 'Pots  deleted: ' .  $id;
});


Route::get('/pots', function(Request $request) {
    return 'Pots';
});

Route::patch('/pots/{id}', function(Request $request, string $id) {
    return 'Pot modificado: '. $request->id;
});

Route::post('/pots', function(Request $request) {
    return 'Pot creado';
});

Route::post('/pots/{id}/money', function(Request $request, string $id) {
    return 'Dinero añadido';
});

Route::post('/pots/{id}/withdraw', function(Request $request) {
    return 'Dinero acado';
});

// Balances APIs

Route::get('/balances/{id}', function(string $id) {
    return 'Balance obtenido' . $id;
});

Route::get('/balances/{id}', function(Request $request) {
    return 'Balance modificado: ' . $request->id;
});
