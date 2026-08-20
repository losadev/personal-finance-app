<?php

namespace App\Http\Controllers;

use App\Bussiness\Services\ProductService;
use App\Bussiness\Interfaces\MessageInterface;
use App\Bussiness\Services\EncryptService;
use App\Bussiness\Services\UserService;

class InfoController
{

    public function __construct(protected ProductService $productService, protected EncryptService $encryptService, protected   UserService $userService, protected MessageInterface $hiService)
    {
    }

    public function saludar() {
        return response()->json($this->hiService->hi());
    }

    public function iva() {
        $price = 100;

        $privaWithIva = $this->productService->calcIva($price);

        return response()->json($privaWithIva);
    }

    public function encryptEmail(int $id) {
        $emialEncrypted = $this->userService->encryptEmail($id);

        return response()->json($emialEncrypted);
    }
}