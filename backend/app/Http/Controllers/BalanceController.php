<?php

namespace App\Http\Controllers;

use App\Models\Balance;
use Illuminate\Http\Request;

class BalanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
   public function show(string $id)
    {
        $balance = Balance::findOrFail($id);
        return response()->json($balance, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Balance $balance)
    {
        //
    }

    public function update(Request $request, string $id) {
        $money = $request->money;

        $currentBalance = Balance::findOrFail($id);

        $x = $currentBalance->update(['income' => $money]);

        return response()->json($x, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Balance $balance)
    {
        //
    }
}