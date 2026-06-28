<?php

namespace App\Http\Controllers;

use App\Models\Balance;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class BalanceController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            return Balance::findOrFail($id);
        } catch (Exception $e) {
            return response()->json(['success' => false, 'message' => $e], Response::HTTP_NOT_FOUND);
        }
    }
}
