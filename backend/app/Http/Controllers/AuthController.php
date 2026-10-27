<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Events\UserRegistered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthController
{
    public function register(Request $request) {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $user = User::create($validated);

        event(new UserRegistered($user));

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully'
        ], Response::HTTP_CREATED);
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json([
                "message" => "Se ha loegueado exitosamente",
                "success" => true,
                "data" => $request->session()->getId()
            ]);
        }
    }

    public function createToken(Request $request) {
        $token = $request->user()->createToken($request->token_name);

        return ['token' => $token->plainTextToken];

    }
}
