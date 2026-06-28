<?php

namespace App\Http\Controllers;

use App\Models\Balance;
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
}