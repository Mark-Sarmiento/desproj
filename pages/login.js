import React from "react";
import { withPublic } from "../src/hook/route";
import Image from "next/image"
import loginImg from "../src/assets/login.jpg";
import { GoogleButton } from 'react-google-button';

function login({ auth }) {
	const { user, loginWithGoogle, error } = auth;
	return (
		<div className="relative w-full h-screen bg-zinc-900/90">
            <Image className="absolute w-full h-full object-cover mix-blend-overlay" src={loginImg} alt="/"/>

            <div>
                <form className="max-w-[400px] w-full mx-auto bg-white p-8">
                    <h2 className="text-4xl font-bold text-center py-8">NutriCulture</h2>
                    <div className="flex items-center px-10 py-2 relative">
                        {error && <h1 className="text-red-500">{error}</h1>}
                        <GoogleButton className="mr-2" onClick={loginWithGoogle} />
                        <h1>{user?.uid}</h1>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-black">Username</label>
                        <input className="border relative bg-gray-100 py-2" type="text"/>
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-black">Password</label>
                        <input className="border relative bg-gray-100 py-2" type="password"/>
                    </div>
                    <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">Sign In</button>
                    <p className="flex items-center mt-2"><input className="mr-2" type="checkbox"/>Remember me </p>
                    <p className="text-cent mt-8">Create Account</p>

                </form>
            </div>
		</div>
	);
}

export default withPublic(login);