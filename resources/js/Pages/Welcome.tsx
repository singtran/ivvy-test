import { Link, Head } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('address.index')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Address Management
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0 text-2xl font-semibold">
                        Address Management
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-1">
                            <div className="p-6">
                                <div className="ml-12">
                                    <div className="underline text-gray-900 dark:text-white">
                                        Address Management System
                                     </div>
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas, accusantium facere voluptatibus amet vitae quam? Voluptate nisi aspernatur recusandae rem nesciunt quos architecto animi sit nulla. Accusamus maiores ipsam quia, eveniet qui eos esse aut ducimus libero amet pariatur, officiis, maxime tenetur sapiente magnam deleniti? Inventore dicta vero maxime.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
