<?php

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class TransactionsFilter {
    public function __construct(protected Request $request) {}

    public function apply(Builder $query) {
        return $query->when($this->request->filled('category'), function (Builder $q) {
            $q->where('category', 'like' , '%' . $this->request->category  . '%');
        });
    }
}
