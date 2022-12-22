import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import route from 'ziggy-js';

export default function Create({auth} : {auth: any}) { // TODO - type auth
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        'line1': '',
        'line2': '',
        'line3': '',
        'line4': '',
        'city': '',
        'state': '',
        'postcode': '',
        'state_code': '',
        'state_name': '',
        'country_code': '',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('address.store'));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Address</h2>}
        >
            <Head title="Address" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section className="max-w-xl">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Create New Address Information</h2>
                            </header>

                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel for="line1" value="Address Line 1" />

                                    <TextInput
                                        id="line1"
                                        className="mt-1 block w-full"
                                        value={data.line1}
                                        handleChange={(e) => setData('line1', e.target.value)}

                                        autofocus
                                        autoComplete="Address Line 1"
                                    />
                                    <InputError className="mt-2" message={errors.line1} />
                                </div>
                                <div>
                                    <InputLabel for="line2" value="Address Line 2" />

                                    <TextInput
                                        id="line2"
                                        className="mt-1 block w-full"
                                        value={data.line2}
                                        handleChange={(e) => setData('line2', e.target.value)}
                                        autofocus
                                        autoComplete="Address Line 2"
                                    />
                                    <InputError className="mt-2" message={errors.line2} />
                                </div>
                                <div>
                                    <InputLabel for="line3" value="Address Line 3" />

                                    <TextInput
                                        id="line3"
                                        className="mt-1 block w-full"
                                        value={data.line3}
                                        handleChange={(e) => setData('line3', e.target.value)}
                                        autofocus
                                        autoComplete="Address Line 3"
                                    />
                                    <InputError className="mt-2" message={errors.line3} />
                                </div>
                                <div>
                                    <InputLabel for="line4" value="Address Line 4" />

                                    <TextInput
                                        id="line4"
                                        className="mt-1 block w-full"
                                        value={data.line4}
                                        handleChange={(e) => setData('line4', e.target.value)}
                                        autofocus
                                        autoComplete="Address Line 4"
                                    />
                                    <InputError className="mt-2" message={errors.line4} />
                                </div>
                                <div>
                                    <InputLabel for="city" value="City" />

                                    <TextInput
                                        id="city"
                                        className="mt-1 block w-full"
                                        value={data.city}
                                        handleChange={(e) => setData('city', e.target.value)}
                                        autofocus
                                        autoComplete="city"
                                    />
                                    <InputError className="mt-2" message={errors.city} />
                                </div>
                                <div>
                                    <InputLabel for="postcode" value="Postcode" />

                                    <TextInput
                                        id="postcode"
                                        className="mt-1 block w-full"
                                        value={data.postcode}
                                        handleChange={(e) => setData('postcode', e.target.value)}
                                        autofocus
                                        autoComplete="Postcode"
                                    />
                                    <InputError className="mt-2" message={errors.postcode} />
                                </div>

                                <div>
                                    <InputLabel for="country_code" value="Country Code" />

                                    <TextInput
                                        id="country_code"
                                        className="mt-1 block w-full"
                                        value={data.country_code}
                                        handleChange={(e) => setData('country_code', e.target.value)}
                                        autofocus
                                        autoComplete="Country Code"
                                    />
                                    <InputError className="mt-2" message={errors.country_code} />
                                </div>

                                <div>
                                    <InputLabel for="state_code" value="State Code" />

                                    <TextInput
                                        id="state_code"
                                        className="mt-1 block w-full"
                                        value={data.state_code}
                                        handleChange={(e) => setData('state_code', e.target.value)}
                                        autofocus
                                        autoComplete="State Code"
                                    />
                                    <InputError className="mt-2" message={errors.state_code} />
                                </div>

                                <div>
                                    <InputLabel for="state_name" value="State Name" />

                                    <TextInput
                                        id="state_name"
                                        className="mt-1 block w-full"
                                        value={data.state_name}
                                        handleChange={(e) => setData('state_name', e.target.value)}
                                        autofocus
                                        autoComplete="State Name"
                                    />
                                    <InputError className="mt-2" message={errors.state_name} />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enterFrom="opacity-0"
                                        leaveTo="opacity-0"
                                        className="transition ease-in-out"
                                    >
                                        <p className="text-sm text-gray-600">Saved.</p>
                                    </Transition>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
