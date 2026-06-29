<?php

namespace App\Http\Controllers;

use App\Contracts\BudgetInterface;
use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Models\Budget;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;

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
        $budgets = Budget::all();

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
            $validated = $request->validated();
            $budget = $this->budget->store($validated);

            return response()->json([
                'success' => true,
                'message' => 'Budget created successfully',
                'data'    => $budget,
            ], Response::HTTP_CREATED);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBudgetRequest $request, Budget $budget)
    {

        try {

            $validated = $request->validated();
            $budget = Budget::find($budget->id);

            if (!$budget) {
                return response()->json([
                    'success' => false,
                    'message' => 'Budget not found',
                ], Response::HTTP_NOT_FOUND);
            }

            $updated = $budget->update($validated);

            if(!$updated) {
                return response()->json([
                    'success' => false,
                    'message' => 'Internal server error',
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return response()->json([
                    'success' => true,
                    'message' => 'Budget updated successfully',
                    'data' => $updated
                ], Response::HTTP_OK);

        } catch (Exception $e) {
            return response()->json([
                    'success' => false,
                    'error' => $e,
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Budget $budget)
    {
        try {
            $budget->delete();
            return response()->json(['success' => true, 'message' => 'Budget deleted successfully'], Response::HTTP_NO_CONTENT);

        } catch (\LogicException $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], Response::HTTP_NO_CONTENT);

        }catch(Exception $e) {
            return response()->json(["success" => false, "mesaage" => $e]);
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