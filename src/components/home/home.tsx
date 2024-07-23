"use client"
import React, { useEffect, useState } from 'react'
import {BiSolidQuoteRight} from 'react-icons/bi'
import Plate from '@/assets/plate.png'
import Java from "@/assets/java.png";
import JavaScript from "@/assets/js.png";
import Python from "@/assets/python.png";
import Me from "@/assets/me1.jpg";
import Image from 'next/image'
import { useRouter } from "next/navigation";

const home = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [senctenceCharParser1, setsenctenceCharParser1] = useState<string[]>([]);
    const [senctenceCharParser2, setsenctenceCharParser2] = useState<string[]>([]);
    const [parserIndex1, setparserIndex1] = useState(0);
    const [parserIndex2, setparserIndex2] = useState(0);

    const sentences = ["coderspace is the platform where you can learn and enhance your coding skill to next level",
         "Coderspace is well organised platform which stores user performance and provide valuable feedback"]

    useEffect(() => {


        
        const sentenceOneArray = sentences[0].split('');
        setsenctenceCharParser1(sentenceOneArray);

       
        const sentenceTwoArray = sentences[1].split('');
        setsenctenceCharParser2(sentenceTwoArray);

        
        const firstSentenceInterval = setInterval(() => {
            setparserIndex1(prevIndex => prevIndex + 1);
        }, 50);

        const secondSentenceInterval = setInterval(() => {
            setparserIndex2(prevIndex => prevIndex + 1);
        }, 50);

        
        if (parserIndex1 === sentenceOneArray.length) {
            clearInterval(firstSentenceInterval);
        }
        if (parserIndex2 === sentenceTwoArray.length) {
            clearInterval(secondSentenceInterval);
        }

        
        return () => {
            clearInterval(firstSentenceInterval);
            clearInterval(secondSentenceInterval);
        };

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const appearPosition = 400;
            const scrollY = window.scrollY;

            if (scrollY >= appearPosition) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

    }, []);
    return (
        <div className='bg-gradient-to-r from-zinc-800 to-slate-800 px-28'>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out lg:w-72 md:w-2/4 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded-[30px] origin-bottom -rotate-12 lg:ml-24" alt="ICOn" src={Plate} />
                    </div>
                    <div className="lg:flex-grow lg:w-2/4 md:w-1/2 lg:pl-80 md:pl-16 flex flex-col md:items-start md:text-left justify-center items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">A New Way to Learn
                        </h1>
                        <p className="mb-8 text-gray-400 leading-relaxed">{senctenceCharParser1.slice(0, parserIndex1 + 1).join('')}</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-base rounded-[20px] text-white bg-lime-400 border-0 py-2 px-4 focus:outline-none hover:bg-lime-600 transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
                            onClick={()=>{
                                router.push('/accounts/signUp');
                            }}>
                                Create Account
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            <section className={`text-gray-600 body-font`}>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow lg:items-end md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-lime-300">Start Exploring
                        </h1>
                        <p className="text-right opacity-50 mb-8 leading-relaxed">{senctenceCharParser2.slice(0, parserIndex2 + 1).join('')}</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-indigo-200 border-0 py-2 px-6 focus:outline-none hover:text-indigo-600 rounded text-base">Get Started {`>`}</button>
                        </div>
                    </div>
                    <div className="flex flex-nowrap lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <div className='animate-[sizeIncrease_8s_infinite] relative w-28 h-28 m-1'>
                            <Image src={Java} alt={''} />
                        </div>
                        <div className='animate-[sizeIncrease_9s_infinite] relative w-28 h-28 m-1'>
                            <Image src={JavaScript} alt={''} />
                        </div>
                        <div className='animate-[sizeIncrease_10s_infinite] relative w-28 h-28 m-1'>
                            <Image src={Python} alt={''} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`text-gray-600 body-font`}>
                <div className="container px-5 py-24 mx-auto">
                    <div className={`flex flex-wrap w-full mb-20 ${isVisible ? "opacity-100 transition-opacity duration-2000" : "opacity-0 transition-opacity duration-500"}`}>
                        <div className=" lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="flex justify-end mt-10 sm:text-3xl text-2xl text-right font-medium title-font mb-2 text-indigo-300"> "Code, test, and repeat. That's the way of the programmer."</h1>

                        </div>
                        <div className='w-1 h-36 m-5 bg-lime-300'></div>
                        <p className="lg:w-2/5 p-4 w-full leading-relaxed text-gray-500">
                            Our platform support various programming language with online compiler.
                        </p>
                    </div>
                    {/* cards */}
                    <div className={`flex flex-wrap -m-4 transform transition-transform ${isVisible ? 'translate-x-0 duration-2000' : '-translate-x-full duration-2000'}`}>
                        <div className="xl:w-1/4 md:w-1/2 p-4  transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Me} alt="content" />
                                <h2 className="tracking-widest text-indigo-500 text-lg font-medium title-font">PYTHON</h2>
                                <h3 className="text-xs text-gray-900 font-medium title-font mb-4">TOP SCORER</h3>
                                <p className="leading-relaxed text-base">Programming is the closest thing we have to a superpower.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4  transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Me} alt="content" />
                                <h2 className="tracking-widest text-indigo-500 text-lg font-medium title-font">JAVA</h2>
                                <h3 className="text-xs text-gray-900 font-medium title-font mb-4">TOP SCORER</h3>
                                <p className="leading-relaxed text-base">Programming is the closest thing we have to a superpower.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4  transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Me} alt="content" />
                                <h2 className="tracking-widest text-indigo-500 text-lg font-medium title-font">JAVASCRIPT</h2>
                                <h3 className="text-xs text-gray-900 font-medium title-font mb-4">TOP SCORER</h3>
                                <p className="leading-relaxed text-base">Programming is the closest thing we have to a superpower.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4  transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Me} alt="content" />
                                <h2 className="tracking-widest text-indigo-500 text-lg font-medium title-font">C</h2>
                                <h3 className="text-xs text-gray-900 font-medium title-font mb-4">TOP SCORER</h3>
                                <p className="leading-relaxed text-base">Programming is the closest thing we have to a superpower.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* terminal */}
            <section className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <BiSolidQuoteRight className="inline-block w-8 h-8 text-gray-400 mb-8" />
                        <p className="leading-relaxed text-base">
                        Code with passion, build with purpose
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-base">ANiket Yadav</h2>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default home
