<?php
namespace  App\Bussiness\Services;

use Illuminate\Support\Facades\Crypt;

class EncryptService {

    private string $key;

    public function __construct(string $key) {
        $this->key = $key;
    }

    public function encrypt(string $data): string {
        return base64_encode($this->key. ":" . Crypt::encrypt($data));
    }

}
