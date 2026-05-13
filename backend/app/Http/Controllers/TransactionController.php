<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

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

    public function getRecurringBills() {
        $recurrentTransactions = Transaction::where('recurring','=',true)->where('user_id', 83)->get();

        if(!$recurrentTransactions) {
            return response()->json([
                'message' => 'No recurrent transactions available',
                'success' => false
                ], 404);
        }

        return response()->json([
            'data' => $recurrentTransactions,
            'success' => true
        ], 200);
    }

}