<?php

namespace App\Bussiness\Services;

use App\Bussiness\Interfaces\MessageInterface;

class HiService implements MessageInterface{
    public function hi() {
        return "Hello Pollo!";
    }
}
