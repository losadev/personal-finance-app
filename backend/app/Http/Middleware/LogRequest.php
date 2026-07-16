<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $data = [
            'url' => $request->url(),
            'ip' => $request->ip(),
            'client' => $request->getClientIp(),
            'method' => $request->method(),
            'headers' => $request->header(),
            'body' => $request->getContent(),
        ];

        Log::debug('Solicitud recibida' ,$data);
        return $next($request);
    }

    /**
     * Se ejecuta despues de enviar la response
     */
    public function terminate(Request $request, Response $response) {
        Log::info('Respuesta enviada', [
            'status' => $response->getStatusCode(),
            'content' => $request->getContent()
        ]);
    }
}