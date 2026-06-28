<?php

namespace App\Http\Requests;

use ApiFormRequest;
use Override;

class StorePotRequest extends ApiFormRequest
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
     * @return array<string, array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required',
            'name' => 'required',
            'target' => 'required',
            'total' => 'required',
            'theme' => 'required'
        ];
    }

    #[Override]
    public function messages()
    {
        return [
            'user_id.required' => 'El usuario es obligatorio',
            'name.required' => 'El nombre es obligatorio',
            'target.required' => 'El objetivo es obligatorio',
            'total.required' => 'El total es obligatorio',
            'theme.required' => 'El tema es obligatorio',
        ];
    }

}