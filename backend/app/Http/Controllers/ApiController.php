<?php

namespace App\Http\Controllers;

use App\ExternalServices\ApiService;
use Illuminate\Http\Request;

class ApiController
{
    public function __construct(protected ApiService $apiService) {}

    public function get() {
        $data = $this->apiService->getData();

        return response()->json($data);
    }
}