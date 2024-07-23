import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo2.png'
import Link from 'next/link'



const acountNavbar = ({colour, hoverColour} : any) => {
    function handleProblemChange(arg0: boolean): void {
        
    }

    return (
        <div >
            <header className={`text-gray-600 body-font px-48 py-3 ${colour} `} >
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={Logo} alt={''} className='w-6 h-6' />
                    </div>
                    
                    
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
                        <Link className={`mr-5 text-gray-400 hover:cursor-pointer hover:text-${hoverColour}  transform ease-out duration-700`} href={''}>Explore</Link>
                        <Link className={`mr-5 text-gray-400 hover:cursor-pointer hover:text-${hoverColour} transform ease-out duration-700`} href={''}>Problems</Link>
                        <Link className={`mr-5 text-gray-400 hover:cursor-pointer hover:text-${hoverColour} transform ease-out duration-700`} href={''}>Discuss</Link>
                        <Link className={`mr-5 text-gray-400 hover:cursor-pointer hover:text-${hoverColour} transform ease-out duration-700`} href={''}>Contest</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default acountNavbar
