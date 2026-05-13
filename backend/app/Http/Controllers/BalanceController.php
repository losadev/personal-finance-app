<?php

namespace App\Http\Controllers;

use App\Models\Balance;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class BalanceController extends Controller
{
    /**
     * Display the specified resource.
     */
   public function show(string $id)
    {
        $balance = Balance::findOrFail($id);
        return response()->json($balance, 200);
    }

    public function update(Request $request, string $id) {
        $money = $request->money;

        $currentBalance = Balance::findOrFail($id);

        // devuelve el numero de rows afectadas
        $x = $currentBalance->update(['income' => $money]);

        return response()->json($x, 200);
    }
}
