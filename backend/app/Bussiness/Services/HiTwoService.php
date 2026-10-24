<?php

namespace App\Bussiness\Services;

use App\Bussiness\Interfaces\MessageInterface;

class HiTwoService implements MessageInterface{
    public function hi() {
        return "Hello World!";
    }
}