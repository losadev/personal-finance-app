<?php

namespace App\Http\Controllers;

use App\Events\UserRegistered;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController
{
    public function register(Request $request) {
        $user = User::where('email',$request->email)->first();
        if ($user) {
            return response()->json([
                "message" => "Ya existe un usuario con ese email",
                "success" => false,
                "data" => $user
            ], Response::HTTP_FOUND);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
        ]);

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
