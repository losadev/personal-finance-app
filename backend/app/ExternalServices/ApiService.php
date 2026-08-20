<?php
namespace App\ExternalServices;

use Illuminate\Support\Facades\Http;

class ApiService {

    protected string $url;

    public function __construct($url) {
        $this->url = $url;
    }

    public function getData() {
        $response = Http::withoutVerifying()->get($this->url);
        if($response->successful()) {
            return response()->json();
        }

        return ['error' => 'Error al obtener la url'];
    }
}