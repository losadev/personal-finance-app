<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMoneyToPotRequest;
use App\Http\Requests\StorePotRequest;
use App\Http\Requests\UpdatePotRequest;
use App\Http\Requests\WithdrawMoneyFromPotRequest;
use App\Models\Pot;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class PotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  Pot::all()->where('user_id', 1);
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
    } catch (\Throwable $th) {
        return response()->json(
            [
            'success' => false,
            'message' => 'Error creating Pot: ' . $th->getMessage(),
            ],
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    }

    public function addMoney(AddMoneyToPotRequest $request, Pot $pot) {

        $pot->total += $request->validated('money');

        $pot->save();

        return response()->json(
            [
                'success' => true,
                'data' => $pot
            ],
            Response::HTTP_OK);
    }

    public function withdrawMoney(WithdrawMoneyFromPotRequest $request , Pot $pot) {
        $pot->total -= $request->validated('money');

        $pot->save();

        return response()->json(
            [
                'success' => true,
                'data' => $pot
            ],
            Response::HTTP_OK
            );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePotRequest $request, Pot $pot)
    {
        try {
            $pot->update($request->validated());

            return response()->json(['success' => true, 'data' => $pot]);

        } catch (\Throwable $th) {
            return response()->json(['success' => true,'message' => $th->getMessage()],$th->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pot $pot)
    {
        $potToDelete = Pot::find($pot);

        if(!$potToDelete) {
            return response()->json([
            "message" => 'Pot not found',
            'success' => false
            ], Response::HTTP_NOT_FOUND);
        }

        try {
            $pot->delete();
            return response()->json([
                "message" => 'Pot deleted succesfully',
                'success' => true
            ], Response::HTTP_NO_CONTENT);

        }catch(\LogicException $le) {
            return response()->json([
                "message" => 'Error deleting pot: '. $le->getMessage(),
                'success' => false
            ], Response::HTTP_NO_CONTENT);
        }

    }
}
