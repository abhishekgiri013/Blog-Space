"use client"
import React, { useState } from 'react'
import Input from './Input'
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const initialState = {
    name: "",
    email: "",
    password: ""
};

const SignupForm = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState("user exits");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = state;

        if (!name || !email || !password) {
            setError("All fields are required");
        }
        if (password.length < 6) {
            setError("Passwrod must be atleast 6 character long");
        }

        try {
            setIsLoading(true);
            const newUser = {
                name, email, password
            }
            const response = await fetch("api/signup", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(newUser)
            })
            if (response?.status === 201) {
                setSuccess("Registration Sucessful");
                setTimeout(() => {
                    router.push('/login', { scroll: false })
                }, 1000)
            }
            else {
                setError("Error occured while registration")
            }

        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }


    const handleChange = (event) => {
        setError("");
        setState({ ...state, [event.target.name]: event.target.value })
    }

    return (
        <section className='container'>
            <form onSubmit={handleSubmit} className='border-2 border-paragraphColor rounded-lg max-w-sm mx-auto px-8 py-6 space-y-5 '>
                <h2 className='text-center text-purple-400'>Sign up</h2>

                <Input label="Name" type="text" name="name" onChange={handleChange} value={state.name} />
                <Input label="Email" type="text" name="email" onChange={handleChange} value={state.email} />
                <Input label="Password" type="password" name="password" onChange={handleChange} value={state.password} />

                {
                    error && <div className='text-red-700'>{error}</div>
                }
                {
                    success && <div className='text-green-700'>{success}</div>
                }

                <button type='submit' className='btn w-full'>
                    {isLoading ? "Loading" : "Sign Up"}
                </button>

                <p className='text-center'>Already an user?{" "} <Link href="/login" className='text-red-600'>Login</Link></p>

            </form>
        </section>
    )
}

export default SignupForm
