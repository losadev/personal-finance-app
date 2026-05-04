<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function() {
    return '<h1>Home</h1>';
});

Route::get('/transactions', function() {
    return 'Transactions';
});

Route::get('/budgets', function() {
    return '<h1>Budgets</h1>';
});

Route::get('/pots', function() {
    return '<h1>Pots</h1>';
});


Route::get('/recurring-bills', function() {
    return '<h1>Recurring bills</h1>';
});


Route::get('/sign-up', function() {
    return '<h1>Sign Up</h1>';
});



Route::get('/login', function() {
    return '<h1>Login</h1>';
});