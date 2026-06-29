<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMoneyToPotRequest;
use App\Http\Requests\StorePotRequest;
use App\Http\Requests\UpdatePotRequest;
use App\Http\Requests\WithdrawMoneyFromPotRequest;
use App\Models\Pot;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;

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

        try {
            $pot = Pot::create($request->validated());
            return response()->json(
                [
                'success' => true,
                'message' => 'Pot created successfully',
                'data'    => $pot,
                ],
                Response::HTTP_CREATED);

        } catch (Exception $e) {
            return response()->json(
                [
                'success' => false,
                'message' => $e->getMessage()
                ],
                Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function addMoney(AddMoneyToPotRequest $request, Pot $pot) {

        try {

            $pot->total += $request->validated('money');
            $pot->save();

            return response()->json(
                [
                    'success' => true,
                    'data' => $pot
                ],
                Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json(
            [
            'success' => false,
            'message' => $e
            ],
            Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function withdrawMoney(WithdrawMoneyFromPotRequest $request , Pot $pot) {

        try {
            $pot->total -= $request->validated('money');
            $pot->save();

            return response()->json(
                [
                    'success' => true,
                    'data' => $pot
                ],
                Response::HTTP_OK
                );
        } catch (Exception $e) {
            return response()->json(
            [
            'success' => false,
            'message' => $e
            ],
            Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePotRequest $request, Pot $pot)
    {
        try {
            $pot->update($request->validated());
            return response()->json(['success' => true, 'data' => $pot]);

        } catch (Exception $e) {
            return response()->json(['success' => false,'message' => $e],Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pot $pot)
    {

        try {
            $pot->delete();
            return response()->noContent();
        }catch(Exception $e) {
            return response()->json([
                'success' => false,
                "message" => $e,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
}