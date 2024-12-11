"use client";
import React, { useState } from 'react'
import HandsRound from "../../assets/hands-round.jpg"
import Image from 'next/image'

export default function Careers() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <div className='h-screen bg-[url(/assets/hero_career.jpg)] bg-no-repeat bg-cover flex justify-center items-center'>
                <div className='flex flex-col gap-10'>
                    <p className='text-white text-[4rem] font-semibold font-dm text-center'>Careers</p>
                    <p className='font-medium text-center text-[1.5rem] text-white font-[italic]'>Drive your growth. Fuel your success. Nifty team <br /> is a diverse network of consultants and <br /> professionals.</p>
                </div>
            </div>

            {/* do the card here */}


            <div className='w-[100%] flex justify-between'>
                <div className='w-[40%]'>
                    <Image src={HandsRound} alt='handsround' />
                </div>

                <div className='w-[60%] flex flex-col gap-16 justify-center items-center'>
                    <p className='text-[3rem] text-[#313c4c] text-left font-semibold font-dm'>Let&apos;s work together</p>

                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-normal text-[#313c4c]'>Upload Your CV (required)</p>
                            <div className='border p-4 pr-40 cursor-pointer'>
                                <input type="file" name="" id="" className='cursor-pointer' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-normal text-[#313c4c]'>Industries</p>
                            <div className='border p-4 w-[100%] cursor-pointer'>
                                <select name="" id="" className='w-[100%] cursor-pointer'>
                                    <option value="">Investment & Wealth Management</option>
                                    <option value="">Company Management</option>
                                    <option value="">Strategic Consulting</option>
                                    <option value="">Acquisitions Consulting</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-normal text-[#313c4c]'>Location</p>
                            <div className='border p-4 w-[100%] cursor-pointer'>
                                <select name="" id="" className='w-[100%] cursor-pointer'>
                                    <option value="">All Locations</option>
                                    <option value="">New York</option>
                                    <option value="">China</option>
                                    <option value="">India</option>
                                    <option value="">London</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button className='uppercase bg-[#9e9f7f] text-sm text-white font-nuno font-bold py-4 px-8 hover:-translate-y-[3px] ease-in-out transition-transform duration-300'>Apply For Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
