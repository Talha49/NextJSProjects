import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
    return (
        <section className="bg-gray-100text-gray-800">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">What They Say About Us?</h2>
                        <p className="dark:text-gray-600">At GlitchyDevs, we're proud to offer a wide range of services to our clients. Here's what some of them have to say:</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-gray-800 text-yellow-50 hover:bg-gray-500">
                                    <p>Working with GlitchyDevs has been an absolute pleasure. Their expertise in Digital Marketing helped us increase our online visibility significantly. I highly recommend their services to anyone looking to boost their online presence.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="https://source.unsplash.com/50x50/?portrait?1" alt="" width={50} height={50} className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                    <p>I'm truly impressed by the Front-end development services provided by GlitchyDevs. They created a stunning and user-friendly interface for our website, which has greatly enhanced our user experience.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="https://source.unsplash.com/50x50/?portrait?2" alt="" width={50} height={50} className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                    <p>Thanks to the Back-end development expertise of GlitchyDevs, we now have a robust server-side application that powers our web and mobile apps seamlessly. Their professionalism and attention to detail are commendable.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="https://source.unsplash.com/50x50/?portrait?3" alt="" width={50} height={50} className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-gray-600 text-yellow-50 hover:bg-gray-800">
                                    <p>GlitchyDevs helped us implement the JamStack architecture for our website, resulting in a fast, secure, and scalable platform. Their expertise and dedication to delivering superior performance are truly commendable.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <Image src="https://source.unsplash.com/50x50/?portrait?4" alt="" width={50} height={50} className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;