<?php

namespace Tests\Feature;

use App\Models\Address;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AddressTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_addresss_is_displayed()
    {
        $john = User::factory()->create();
        $john_address = Address::factory()->create(['user_id' => $john->id]);

        $bob = User::factory()->create();
        $bob_address = Address::factory()->create(['user_id' => $bob->id]);

        $response = $this
            ->actingAs($john)
            ->get('/address');

        $response->assertOk();
        $response->assertSee($john_address->line1);
        $response->assertSee($john_address->city);
        $response->assertSee($john_address->postcode);
        $response->assertSee($john_address->country_code);
        $response->assertSee($john_address->state_code);
        $response->assertSee($john_address->state_name);

        $response->assertDontSee($bob_address->line1);
    }

    public function test_address_can_be_updated()
    {
        $user = User::factory()->create();

        $address = Address::factory()->create([
            'user_id' => $user->id,
            'line1' => '123 Main St',
            'line2' => 'Apt 1',
            'line3' => 'Bldg 2',
            'line4' => 'Suite 3',
            'city' => 'New York',
            'postcode' => '10001',
            'country_code' => 'US',
            'state_code' => 'NY',
            'state_name' => 'New York',
        ]);

        $newAddress = [
            'line1' => '123 King St',
            'line2' => 'Apt 4',
            'line3' => 'Bldg 3',
            'line4' => 'Suite 2',
            'city' => 'Brisbane',
            'postcode' => '4001',
            'country_code' => 'AU',
            'state_code' => 'QLD',
            'state_name' => 'Queensland',
        ];

        $response = $this
            ->actingAs($user)
            ->patch("/address/{$address->id}", $newAddress);

        $response->assertOk();
        $response->assertSessionHasNoErrors();

        $address->refresh();

        $this->assertSame($newAddress['line1'], $address->line1);
        $this->assertSame($newAddress['line2'], $address->line2);
        $this->assertSame($newAddress['line3'], $address->line3);
        $this->assertSame($newAddress['line4'], $address->line4);
        $this->assertSame($newAddress['city'], $address->city);
        $this->assertSame($newAddress['postcode'], $address->postcode);
        $this->assertSame($newAddress['country_code'], $address->country_code);
        $this->assertSame($newAddress['state_code'], $address->state_code);
        $this->assertSame($newAddress['state_name'], $address->state_name);
    }

    public function test_address_validation()
    {
        $user = User::factory()->create();

        $address = Address::factory()->create([
            'user_id' => $user->id,
            'line1' => '123 Main St',
        ]);

        $newAddress = [
            'line1' => '',
        ];

        $response = $this
            ->actingAs($user)
            ->patch("/address/{$address->id}", $newAddress);

        $response->assertSessionHasErrors(['line1' => 'The line1 field is required.']);
        $address->refresh();
    }

    public function test_user_cannot_update_other_user_address()
    {
        $john = User::factory()->create();
        $bob = User::factory()->create();

        $bob_address = Address::factory()->create([
            'user_id' => $bob->id,
            'line1' => '123 King St',
            'line2' => 'Apt 4',
            'line3' => 'Bldg 3',
            'line4' => 'Suite 2',
            'city' => 'Brisbane',
            'postcode' => '4001',
            'country_code' => 'AU',
            'state_code' => 'QLD',
            'state_name' => 'Queensland',
        ]);

        $newAddress = [
            'line1' => '123 Queen St',
        ];

        $bob_address->refresh();
        $response = $this
            ->actingAs($john)
            ->patch("/address/{$bob_address->id}", $newAddress);

        $response->assertNotFound();
        $this->assertSame($bob_address['line1'], $bob_address->line1);
    }

    public function test_can_create_address_for_user()
    {
        $this->markTestIncomplete('This test has not been implemented yet.');
    }

    public function test_can_delete_address_for_user()
    {
        $this->markTestIncomplete('This test has not been implemented yet.');
    }
}
