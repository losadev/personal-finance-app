<?php

namespace App\Http\Controllers;

use App\Contracts\BudgetInterface;
use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Models\Budget;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class BudgetController extends Controller
{


    public function __construct(protected BudgetInterface $budget) {
        $this->budget = $budget;
    }
   /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$budgets = $this->budget->index();

        $budgets = Budget::with('transactions')->get();

        if($budgets->isEmpty()) {
            return response()->json(['success' => false, 'message' => 'Budgets not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json(['success' => true, 'data' => $budgets], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBudgetRequest $request)
    {

        try {
            // Create devuelve el modelo, no false/true
            // save() si devuelve true/false
            $budget = $this->budget->store($request);

            return response()->json([
                'success' => true,
                'message' => 'Budget created successfully',
                'data'    => $budget,
            ], Response::HTTP_CREATED);

        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
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
                'message' => 'Budget not found',
            ], );
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
        try {
            $budgetToDelete = Budget::findOrFail($budget);
        }catch(Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], );
        }

        if(isset($budgetToDelete)) {
            $budget->delete();
            return response()->json(['success' => true, 'message' => 'Budget deleted successfully'], Response::HTTP_NO_CONTENT);
        }
    }

    public function getTransactionsByCategory() {

        $budgets = Budget::select('id', 'category')->with('transactions')->get()->map(function ($budget) {
        $budget->transactions = $budget->transactions->take(3);
        unset($budget->transactions);

        return $budget;
    });

        return $budgets;
    }
}