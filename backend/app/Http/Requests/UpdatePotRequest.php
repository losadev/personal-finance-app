<?php

namespace App\Http\Requests;

use ApiFormRequest;

class UpdatePotRequest extends ApiFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|numeric',
            'name' => 'sometimes',
            'target' => 'sometimes|numeric',
            'theme' => 'sometimes'
        ];
    }
}