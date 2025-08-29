import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 h-[10vh] sm:h-[5vh] '>
            <div className="flex flex-col sm:flex-row items-center justify-between w-[80vw] h-[100%] m-auto">
                <div className="font-bold text-slate-300">
                    To-Do Buddy
                </div>
                <ul className='text-white flex gap-25 h-[100%]'>
                    <li className='hover:bg-slate-700 h-[100%] flex items-center justify-center px-4 cursor-pointer'>
                        <span className=''>Home</span>
                    </li>
                    <li className='hover:bg-slate-700 h-[100%] flex items-center justify-center px-4 cursor-pointer'>
                        <span className=''>Tasks</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
