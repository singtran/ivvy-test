<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'line1' => $this->faker->streetAddress(),
            'line2' => $this->faker->streetAddress(),
            'line3' => $this->faker->streetAddress(),
            'line4' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'postcode' => $this->faker->postcode(),
            'country_code' => $this->faker->countryCode(),
            'state_code' => $this->faker->city(), // TODO: use a state code
            'state_name' => $this->faker->city(), // TODO: use a state name
        ];
    }
}
