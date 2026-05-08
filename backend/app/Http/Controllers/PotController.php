<?php

namespace App\Http\Controllers;

use App\Models\Pot;
use Illuminate\Http\Request;

class PotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $validated = $request->validate([
            'user_id' => 'required',
            'name' => 'required',
            'target' => 'required',
            'total' => 'required',
            'theme' => 'required'
        ]);

        try {
            $pot = Pot::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Pot created successfully',
                'data'    => $pot,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error creating pot' . $e,
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Pot $pot)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pot $pot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pot $pot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pot $pot)
    {
        //
    }
}
