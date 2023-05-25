import React from 'react'
import Select from './Select';

export default function Table({ className, heading, params, color }) {
    return (
        <div className={`h-fit w-fit ${className}`}>
            <div className={`w-[25rem] border-2 border-black border-b-0 py-2 text-xl font-bold text-center ${color}`}>
                <h2 className="Raleway">{heading}</h2>
            </div>
            <table className={`Raleway w-[25rem] h-[15.3rem] border-2 border-black`}>
                <tbody>
                    <tr className='border-2 border-black'>
                        <td className='p-3'>{params[0]}</td>
                        <td className='border-2 border-black'>
                            <Select heading={heading} id={params[0].split(" - ")[0].replace(" ", "_")} />
                        </td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='p-3'>{params[1]}</td>
                        <td className='border-2 border-black'>
                            <Select heading={heading} id={params[1].split(" - ")[0].replace(" ", "_")} />
                        </td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='p-3'>{params[2]}</td>
                        <td className='border-2 border-black'>
                            <Select heading={heading} id={params[2].split(" - ")[0].replace(" ", "_")} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
