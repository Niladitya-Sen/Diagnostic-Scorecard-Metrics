import React, { useContext, useEffect, useState } from 'react'
import passwordless from '../public/passwordless.jpg'
import mfa from '../public/mfa.jpg'
import recovery from '../public/recovery.jpg'
import logo from '../public/logo.png'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AlertContext } from '@/context/Context'
import { alertIcons } from '@/components/Alert'

export default function Signup() {
    const router = useRouter();
    const [otp, setOTP] = useState("");

    const { alert, setAlert } = useContext(AlertContext);

    useEffect(() => {
        document.getElementsByClassName('control-dots')[0].classList.add('hidden');
        document.querySelectorAll('.control-arrow').forEach(element => {
            element.classList.add('hidden');
        })
    }, [])

    const sendSignupOTP = async (e) => {
        e.preventDefault();

        /* setAlert({
            animation: alertIcons.sendingMsg,
            color: 'bg-blue-500',
            translate: "translate-x-0",
            message: 'Sending Mail...'
        })

        const body = {
            email: document.getElementById('email').value
        };

        try {
            const response = await fetch("http://localhost:8080/api/v1/customer/signupOTP", {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                method: "POST"
            });

            const data = await response.json();

            if (data.success) {
                setOTP(data.otp);

                setAlert({
                    animation: alertIcons.check,
                    color: 'bg-green-500',
                    translate: "translate-x-0",
                    message: 'Mail sent.'
                })

                console.log(e.currentTarget);

                document.getElementById('signupOTPContainer').classList.remove('hidden');
                document.getElementById('sendOTPSignupBtn').classList.add('hidden');
                document.getElementById('signupBtn').classList.remove('hidden');

            } else if (!data.error) {
                setAlert({
                    animation: alertIcons.error,
                    color: 'bg-red-500',
                    translate: "translate-x-0",
                    message: 'Mail could not be send.'
                })
            } else {
                setAlert({
                    animation: alertIcons.error,
                    color: 'bg-red-500',
                    translate: "translate-x-0",
                    message: data.error
                });
            }

        } catch (error) {
            console.log(error)
        } */
    }

    const handleSignup = async (e) => {
        e.preventDefault();

        /* if (alert.message === "This email is already in use.") {
            console.log(alert);
            setAlert({
                ...alert,
                translate: "translate-x-0"
            });
            return;
        }

        if (!document.getElementById('signupOTP').value) {
            setAlert({
                animation: alertIcons.error,
                color: 'bg-red-500',
                translate: "translate-x-0",
                message: 'Please enter the OTP.'
            });

            return;
        }

        if (document.getElementById('signupOTP').value !== otp) {
            setAlert({
                animation: alertIcons.error,
                color: 'bg-red-500',
                translate: "translate-x-0",
                message: 'Incorrect OTP. Please try again.'
            });

            return;
        }

        const body = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            otp: document.getElementById('signupOTP').value
        };

        try {
            await fetch("http://localhost:8080/api/v1/customer/signup", {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                method: "POST"
            });

            router.push({
                pathname: '/login'
            });

            setAlert({
                animation: alertIcons.check,
                translate: "translate-x-0",
                color: 'bg-green-500',
                message: 'Account created successfully. Please login to your account.'
            });

        } catch (error) {
            window.location.reload
        } */
    }

    return (
        <section className='flex flex-col items-start justify-center sm:justify-normal sm:grid lg:grid-rows-[1fr_6fr] lg:grid-cols-2 w-full p-[30px] sm:p-16 h-[calc(100vh-2.5rem)]'>

            <Image src={logo.src} alt="" width={300} height={200} className='place-self-center sm:place-self-start row-[1_/_2] col-[1_/_2] mb-16' />

            <form className='flex flex-col gap-5 row-[2_/_3] w-full' onSubmit={handleSignup}>
                <h1 className='text-3xl font-semibold'>Sign up</h1>
                <div className='flex flex-col gap-1'>
                    <span>Name</span>
                    <input type="text" id='name' className='w-full h-[3rem] p-4 border-2 border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md outline-none' required />
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Email</span>
                    <input type="email" id='email' className='w-full h-[3rem] p-4 border-2 border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md outline-none' required onChange={(e) => {
                        console.log(e.currentTarget)
                        document.getElementById('sendOTPSignupBtn').classList.remove('hidden');
                        document.getElementById('signupBtn').classList.add('hidden');
                    }} />
                </div>
                <div id='signupOTPContainer' className='hidden flex flex-col gap-1'>
                    <span>OTP</span>
                    <input type="text" id='signupOTP' className='w-full h-[3rem] p-4 border-2 border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md outline-none' required />
                </div>
                <button type='button' id='sendOTPSignupBtn' className='p-4 bg-blue-500 rounded-md' onClick={sendSignupOTP} >Send OTP</button>
                <button type='submit' id='signupBtn' className='hidden p-4 bg-blue-500 rounded-md' >Sign Up</button>
                <div className='flex flex-col items-center'>
                    Or
                    <Link href='/login' className='underline text-blue-500'>Log in</Link>
                </div>
            </form>

            <div className='hidden lg:inline row-[1_/_3] col-[2_/_3] justify-self-center w-[75%]'>
                <Carousel
                    infiniteLoop={true}
                    autoPlay={true}
                    showThumbs={false}
                >
                    <div>
                        <img src={passwordless.src} alt="" style={{ width: "30rem" }} />
                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Passwordless sign-in</p>
                            Move away from risky passwords and
                            experience one-tap access to Idea2MVP. Download
                            and install OneAuth.
                        </div>
                    </div>
                    <div>
                        <img src={mfa.src} alt="" style={{ width: "35rem" }} />
                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>MFA for all accounts</p>
                            Secure online accounts with OneAuth 2FA.
                            Back up OTP secrets and never lose access to
                            your accounts.
                        </div>
                    </div>
                    <div>
                        <img src={recovery.src} alt="" />
                        <div className='flex flex-col items-center'>
                            <p className='font-semibold mt-[9rem]'>Easy recovery modes</p>
                            Lost access to OneAuth? Worry not. Set up
                            passphrase and backup number to recover
                            OneAuth easily.
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
