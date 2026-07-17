<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Routing\Controller;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(UserRequest $request) {
        $validatedData = $request->validated();

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password'])
        ]);

        return response()->json([
            'message' => 'Registrado con éxito',
            'data' => $user
        ], Response::HTTP_CREATED);
    }
}