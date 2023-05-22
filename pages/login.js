import React, { useEffect, useState, useContext } from 'react'
import passwordless from '../public/passwordless.jpg'
import mfa from '../public/mfa.jpg'
import recovery from '../public/recovery.jpg'
import logo from '../public/logo.png'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AlertContext } from '@/context/Context'
import { alertIcons } from '@/components/Alert'

export default function Login() {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: "",
        otp: ""
    });

    const { setAlert } = useContext(AlertContext);


    useEffect(() => {
        document.getElementsByClassName('control-dots')[0].classList.add('hidden');
        document.querySelectorAll('.control-arrow').forEach(element => {
            element.classList.add('hidden');
        })
    }, [])

    const sendOTP = async (e) => {
        e.preventDefault();

        /* e.currentTarget.classList.add('hidden');
        e.currentTarget.nextElementSibling.classList.remove('hidden');
        e.currentTarget.previousElementSibling.classList.remove('hidden');

        const body = {
            email: document.getElementById("loginEmail").value,
        };

        setAlert({
            animation: alertIcons.sendingMsg,
            translate: "translate-x-0",
            color: "bg-blue-500",
            message: "Sending Mail..."
        })
        
        try {
            const response = await fetch("http://localhost:8080/api/v1/customer/login", {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                method: "POST"
            });

            const data = await response.json();

            if (data.success) {
                setLoginData({
                    email: body.email,
                    otp: data.otp
                });

                setAlert({
                    animation: alertIcons.check,
                    translate: "translate-x-0",
                    color: "bg-green-500",
                    message: "Mail sent"
                })
            } else {
                setAlert({
                    animation: alertIcons.error,
                    translate: "translate-x-0",
                    color: "bg-red-500",
                    message: "Mail could not be sent. Please check the provided email address."
                })
            }

        } catch (error) {
            setAlert({
                animation: alertIcons.error,
                translate: "translate-x-0",
                color: "bg-red-500",
                message: "Mail could not be sent."
            })
            router.push('/signup');
        } */
    }

    const handleLogin = (e) => {
        e.preventDefault();

        /* if (document.getElementById('OTPpassword').value !== loginData.otp || document.getElementById('OTPpassword').value === null) {
            setAlert({
                animation: alertIcons.error,
                color: 'bg-red-500',
                translate: "translate-x-0",
                message: 'Incorrect OTP. Please try again.'
            });
            return;
        }

        if (loginData.otp && document.getElementById('OTPpassword').value === loginData.otp) {

            document.cookie = `email=${loginData.email}`;
            document.cookie = `otp=${loginData.otp}`

            router.push({
                pathname: '/estimator'
            });
        } */
    }

    

    return (
        <section className='flex flex-col items-start justify-center sm:justify-normal sm:grid lg:grid-rows-[1fr_6fr] lg:grid-cols-2 w-full rounded-md p-[30px] sm:p-16 h-[calc(100vh-2.5rem)]'>

            <Image src={logo.src} alt="" width={300} height={200} className='place-self-center sm:place-self-start row-[1_/_2] col-[1_/_2]' />

            <form className='flex flex-col gap-5 row-[2_/_3] w-full mt-20'>
                <h1 className='text-3xl font-semibold'>Sign in</h1>
                <div className='flex flex-col gap-1'>
                    <span>Email</span>
                    <input type="email" id='loginEmail' className='w-full h-[3rem] p-4 border-2 border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md outline-none' onChange={() => {
                        document.getElementById('sendOTPBtn').classList.remove('hidden');
                        document.getElementById('loginBtn').classList.add('hidden');
                    }} />
                </div>
                <div id='otp' className='hidden flex flex-col gap-1'>
                    <span>Enter OTP</span>
                    <input type="text" id='OTPpassword' className='w-full h-[3rem] p-4 border-2 border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md outline-none' placeholder='Enter 6 digit OTP send in your Email' />
                </div>
                <button type='button' id='sendOTPBtn' className='p-4 bg-blue-500 rounded-md' onClick={sendOTP} >Send OTP</button>
                <button type='submit' id='loginBtn' className='hidden p-4 bg-blue-500 rounded-md'
                    onClick={handleLogin} >Log in</button>
                <div className='flex flex-col items-center'>
                    Or
                    <Link href='/signup' className='underline text-blue-500'>Sign up</Link>
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
        </section >
    )
}