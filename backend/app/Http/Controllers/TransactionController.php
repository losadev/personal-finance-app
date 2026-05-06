<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Transaction::all();

        if(!$transactions) {
            return response()->json('No transactions available', 404);
        }

        return response()->json($transactions, 200);
    }

}
