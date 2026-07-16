<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DataToUppercase
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        # MODIFICA LOS DATOS ANTES DE GUARDARLOS EN LA BASE DE DATOS
        if ($request->has('name')) {
            $request->merge(['name' => strtoupper($request->input('name'))]);
        }

        return $next($request);
    }
}