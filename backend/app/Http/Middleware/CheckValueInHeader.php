<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckValueInHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, $pollo, $loco): Response
    {
        if($request->header("token") != '123456') {
            return response()->json(['message' => 'Access forbidden: '. $pollo . ' ' . $loco], Response::HTTP_FORBIDDEN);
        }

        return $next($request);
    }
}
