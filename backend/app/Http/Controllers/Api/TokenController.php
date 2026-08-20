<?php
// app/Http/Controllers/Api/TokenController.php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TokenController
{
    /**
     * Available token abilities for the application.
     * Define all possible abilities here for documentation.
     */
    public const ABILITIES = [
        'read' => 'Read access to resources',
        'write' => 'Create and update resources',
        'delete' => 'Delete resources',
        'admin' => 'Administrative actions',
        'transactions:read' => 'Read posts',
        'posts:write' => 'Create and update posts',
        'posts:delete' => 'Delete posts',
        'comments:read' => 'Read comments',
        'comments:write' => 'Create and update comments',
        'comments:delete' => 'Delete comments',
        'users:read' => 'View user profiles',
        'users:write' => 'Update user profiles',
    ];

    /**
     * Create a new token with specific abilities.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function createToken(Request $request): JsonResponse
    {
        // Validate token creation request
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'abilities' => ['required', 'array'],
            'abilities.*' => ['string', 'in:' . implode(',', array_keys(self::ABILITIES))],
        ]);

        // Create token with specified abilities
        $token = $request->user()->createToken(
            $validated['name'],
            $validated['abilities']
        );

        return response()->json([
            'message' => 'Token created successfully',
            'token' => $token->plainTextToken,
            'abilities' => $validated['abilities'],
        ], 201);
    }

    /**
     * List available abilities.
     *
     * @return JsonResponse
     */
    public function abilities(): JsonResponse
    {
        return response()->json([
            'abilities' => self::ABILITIES,
        ]);
    }
}