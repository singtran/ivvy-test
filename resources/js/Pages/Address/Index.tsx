import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

interface AddressProps {
    id: number;
    line1: string;
    city: string;
    state_name: string;
    postcode: string;
    country_code: string;
}

interface AddressPageProps {
    addresses: AddressProps[];
    auth: any;
    errors: any;
}

export default function AddressPage({addresses, auth, errors} : AddressPageProps) {
    const addressList = addresses.map((address) => ( // TODO: refactor and put this in its own component
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" role="row" key={address.id}>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { address.line1 }
            </th>
            <td className="py-4 px-6">
                { address.city }
            </td>
            <td className="py-4 px-6">
                { address.state_name }
            </td>
            <td className="py-4 px-6">
                { address.postcode }
            </td>
            <td className="py-4 px-6">
                { address.country_code }
            </td>
            <td className="py-4 px-6">
                <Link href={route('address.edit', address.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link> | <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
        </tr>
    ));

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Address</h2>}
        >
            <Head title="Address" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 py-12">
                <Link href={route('address.create')} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Create New Address
                </Link>
                {addressList && addressList.length > 0 && (
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                City
                            </th>
                            <th scope="col" className="py-3 px-6">
                                State
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Postcode
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Country Code
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { addressList }
                    </tbody>
                </table>
                )}
            </div>


        </AuthenticatedLayout>
    );
}
