<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMoneyToPotRequest;
use App\Http\Requests\StorePotRequest;
use App\Http\Requests\UpdatePotRequest;
use App\Http\Requests\WithdrawMoneyFromPotRequest;
use App\Http\Resources\PotCollection;
use App\Models\Pot;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class PotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pots = Pot::all()->where('user_id', 50);

        if ($pots->isEmpty()) {
            return response()->json([
                "success" => false,
                "message" => "Pots not found"
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
                "success" => true,
                "data" => $pots
            ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePotRequest $request)
    {

        $pot = Pot::create($request->validatet());

        return response()->json([
            'success' => true,
            'message' => 'Pot created successfully',
            'data'    => $pot,
        ], Response::HTTP_CREATED);
    }

    public function addMoney(AddMoneyToPotRequest $request, Pot $pot) {

        $pot->total += $request->validated('money');

        $pot->save();

        return response()->json(['success' => true, 'data' => $pot]);
    }

    public function withdrawMoney(WithdrawMoneyFromPotRequest $request , Pot $pot) {
        $pot->total -= $request->validated('money');

        $pot->save();

        return response()->json(['success' => true, 'data' => $pot]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePotRequest $request, Pot $pot)
    {
        $pot->update($request->validated());

        return response()->json(['success' => true, 'data' => $pot]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pot $pot)
    {
        $pot->delete();

        return response()->noContent();
    }
}