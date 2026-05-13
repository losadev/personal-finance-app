<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Models\Budget;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $budgets = Budget::where('user_id', 53)->get();

        if($budgets->isEmpty()) {
            return response()->json(['success' => false, 'message' => 'Budgets not found'], 404);
        }

        return response()->json(['success' => true, 'data' => $budgets], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBudgetRequest $request)
    {

        try {
            // Create devuelve el modelo, no false/true
            // save() si devuelve true/false
            $budget = Budget::create($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Budget created successfully',
                'data'    => $budget,
            ], 201);

        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBudgetRequest $request, Budget $budget)
    {
        $updated = $budget->update($request->validated());

        if(!$updated) {
            return response()->json([
                'success' => false,
                'message' => 'Error updating budget',
            ], 500);
        }

        return response()->json([
                'success' => true,
                'message' => 'Budget updated successfully',
                'data' => $budget
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Budget $budget)
    {
        $budget->delete();
        return response()->json(['success' => true, 'message' => 'Budget deleted successfully'], 204);
    }

    public function getTransactionsByCategory() {

        $budgets = Budget::select('id', 'category')
    ->with('transactions')
    ->get()
    ->map(function ($budget) {
        $budget->transactions = $budget->transactions->take(3);
        unset($budget->transactions);

        return $budget;
    });

        return $budgets;
    }
}
