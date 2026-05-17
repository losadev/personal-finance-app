<?php

namespace App\Repositories\Eloquent;

use App\Contracts\BudgetInterface;
use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Models\Budget;

class EloquentBudgetRepository implements BudgetInterface {

    public function index()
    {
        // !ª CUIDADO CON UTILIZAR MUCHAS FACADES, SIN DARTES CUENTA METES MULTIPLES CLASES QUE SON COSTOSA, AL APLICAR Inyeccion de dependencias, VISUALMENTE ES MAS FACIL DEVER SI ESTAS CARGANDO UNA CLASE CON MUCHAS CLASES.
        return Budget::with('transactions')->where('user_id', 53)->get();
    }


    public function store(StoreBudgetRequest $request)
    {
        return Budget::create($request->validated());
    }

    public function update(UpdateBudgetRequest $request, Budget $budget)
    {
        return $budget->update($request->validated());
    }

    public function destroy(Budget $budget)
    {
        return $budget->delete();
    }

    public function getTransactionsByCategory() {

        return Budget::select('id', 'category')
    ->with('transactions')
    ->get()
    ->map(function ($budget) {
        $budget->transactions = $budget->transactions->take(3);
        unset($budget->transactions);

        return $budget;
    });

    }
}