<?php

namespace App\Bussiness\Services;

use App\Bussiness\Entities\Tax;

class ProductService {

    public function calcIva(float $price): float
    {
        return $price * (1 + Tax::IVA);
    }

}
