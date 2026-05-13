<?php

namespace App\Contracts;

use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Models\Budget;

interface BudgetInterface {

    public function index();

    public function store(StoreBudgetRequest $request);

    public function update(UpdateBudgetRequest $request, Budget $budget);

    public function destroy(Budget $budget);

    public function getTransactionsByCategory();

}
