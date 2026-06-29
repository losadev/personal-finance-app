<?php

namespace App\Http\Controllers;

use App\Models\Balance;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class BalanceController extends Controller
{
    /**
     * Display the specified resource.
     */
   public function show(string $id)
    {
        try  {
            $balance = Balance::findOrFail($id);
        }catch(Exception $e) {
            return response()->json(["message" => $e->getMessage(), "success" => false], Response::HTTP_NOT_FOUND);
        }
        return response()->json($balance, Response::HTTP_OK);
    }

    public function update(Request $request, string $id) {
        $money = $request->money;

        try {
            $currentBalance = Balance::findOrFail($id);
        }catch (Exception $e) {
            return response()->json(["message" => $e->getMessage(), "success" => false], Response::HTTP_OK);
        }

        // devuelve el numero de rows afectadas
        $x = $currentBalance->update(['income' => $money]);

        return response()->json($x, Response::HTTP_NOT_FOUND);
    }
}