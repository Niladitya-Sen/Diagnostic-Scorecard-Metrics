import { AlertContext } from '@/context/Context';
import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { IoPaperPlane } from 'react-icons/io5'
import { TbAlertTriangle } from 'react-icons/tb'
import { BsCheckLg } from 'react-icons/bs'

export const alertIcons = {
  error: <TbAlertTriangle className='text-xl' />,
  check: <BsCheckLg className='text-2xl' />,
  sendingMsg: <IoPaperPlane className='text-xl animate-[bounce_800ms_infinite]' />
}

export default function Alert() {
    const { alert, setAlert } = useContext(AlertContext);
    return (
        <div id='alert' className={`fixed p-5 z-[9999] text-white min-w-[20rem] h-[5rem] text-lg ${alert.color} rounded-md shadow-md flex items-center justify-between transition-transform ${alert.translate} ease-in duration-200`}>
            <div className='flex gap-4 items-center'>
                {alert.animation}
                <p>{alert.message}</p>
            </div>
            <div className='hover:bg-white rounded-full hover:bg-opacity-20 p-1' onClick={(e) => {
                setAlert({
                    ...alert,
                    translate: "-translate-x-[100rem]",
                })
            }}>
                <MdClose className='text-[1.65rem] pointer-events-none' />
            </div>
        </div >
    )
}
