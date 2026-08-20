<?php

namespace Backend\App\Bussiness\Services;

use App\Bussiness\Interfaces\MessageInterface;

class ByService implements MessageInterface{
    public function HI() {
        return "Bye World!";
    }
}