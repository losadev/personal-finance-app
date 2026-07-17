<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestLogin;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
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

    public function login(RequestLogin $request) {

        $validatedData = $request->validated();

        if (Auth::attempt($validatedData)) {
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Usuario logueado con éxtio',
                'success' => true,
                'data' => $request->user()
            ]);
        }

         return response()->json([
                'message' => 'Ha ocurrido un error',
                'success' => false,
            ]);
    }
}
