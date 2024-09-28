import React from 'react'

const Tech = () => {
    return (
        <div className='bg-[#13243c] items-center flex flex-col justify-center h-screen mt-20 md:mt-0'>
            <div>
                <p className='font-mono tracking-tight text-6xl sm:text-2xl text-white text-center lg:text-start font-extrabold'><span className='text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0d9cf6] to-[#00c7bd]'>My Skills</span><br className='md:hidden' /></p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-2 md:mt-10'>
                <div className='bg-[#18354d80] m-7 md:m-5 rounded-md border border-[#324050] p-5 w-[26rem] text-white font-mono hover:scale-105 transition-all'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='mb-2'>Frontend Development</h1>
                    </div>
                    <div>
                        90%
                    </div>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-5/6"></div>
                    </div>
                </div>
                <div className='bg-[#18354d80] m-7 md:m-5 rounded-md border border-[#324050] p-5 w-[26rem] text-white font-mono hover:scale-105 transition-all'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='mb-2'>iOS App Development</h1>
                    </div>
                    <div>
                        55%
                    </div>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-2/4"></div>
                    </div>
                </div>
                <div className='bg-[#18354d80] m-7 md:m-5 rounded-md border border-[#324050] p-5 w-[26rem] text-white font-mono hover:scale-105 transition-all'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='mb-2'>React Development</h1>
                    </div>
                    <div>
                        85%
                    </div>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                    </div>

                </div>
                <div className='bg-[#18354d80] m-7 md:m-5 rounded-md border border-[#324050] p-5 w-[26rem] text-white font-mono hover:scale-105 transition-all'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='mb-2'>Android App Development</h1>
                    </div>
                    <div>
                        60%
                    </div>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-4/6"></div>
                    </div>
                </div>
                <div className='bg-[#18354d80] m-7 md:m-5 rounded-md border border-[#324050] p-5 w-[26rem] text-white font-mono hover:scale-105 transition-all'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='mb-2'>Leadership Skills</h1>
                    </div>
                    <div>
                        35%
                    </div>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-2/5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech