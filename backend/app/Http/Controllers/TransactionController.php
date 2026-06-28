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
        $query = Transaction::where(function($query) use($request) {
            if($request->input('name')) {
                $query->where('name','like','%'.$request->input('name').'%');
            }
        })->where(function($query) use($request) {
            if($request->input('category')) {
                $query->where('category',$request->input('category'));
            }
        })->where(function($query) use($request) {
            if($request->input('sort')) {
                $sortParams = explode(',', $request->input('sort'));
                $query->orderBy($sortParams[0], $sortParams[1]);
            }
        });

        $transactions = $query->paginate(10);

        if(!$transactions) {
            return response()->json(
                [
                'message' => 'No transactions available',
                'success' => false
                ],
                Response::HTTP_NOT_FOUND);
        }

        return response()->json($transactions, Response::HTTP_OK);
    }

    public function getRecurringBills() {
        $recurrentTransactions = Transaction::where('recurring','=',true)->where('user_id', 1)->get();

        if(!$recurrentTransactions) {
            return response()->json(
                [
                'message' => 'No recurrent transactions available',
                'success' => false
                ],
                Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $recurrentTransactions,
            'success' => true
        ], Response::HTTP_OK);
    }

}