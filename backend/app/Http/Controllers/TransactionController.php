<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Symfony\Component\HttpFoundation\Response;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Transaction::query();

        if($request->has('name')) {
            $query->where('name','like','%'.$request->input('name').'%');
        }

        if($request->has('category')) {
            $query->where('category',$request->input('category'));
        }

        if($request->has('sort')) {
            $query->orderBy('updated_at', $request->input('sort'));
        }

        $transactions = $query->paginate(10);

        if(!$transactions) {
            return response()->json('No transactions available', Response::HTTP_NOT_FOUND);
        }

        return response()->json($transactions, Response::HTTP_OK);
    }

    public function getRecurringBills() {
        $recurrentTransactions = Transaction::where('recurring','=',true)->where('user_id', 83)->get();

        if(!$recurrentTransactions) {
            return response()->json([
                'message' => 'No recurrent transactions available',
                'success' => false
                ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $recurrentTransactions,
            'success' => true
        ], Response::HTTP_OK);
    }

}
