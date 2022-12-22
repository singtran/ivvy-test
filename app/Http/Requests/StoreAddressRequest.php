<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'line1' => 'required|string|max:255',
            'line2' => 'nullable|string|max:255',
            'line3' => 'nullable|string|max:255',
            'line4' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'postcode' => 'nullable|string|max:255',
            'country_code' => 'nullable|string|max:255',
            'state_code' => 'nullable|string|max:255',
            'state_name' => 'nullable|string|max:255',
        ];
    }
}
