import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Playwrite_ES_Guides } from 'next/font/google'
import HomeLogo from '@/components/HomeLogo';
import Navbar from '@/components/Navbar';
import SmoothHorizontalScroller from '@/components/SmoothHorizontalScroller';

const playwrite = Playwrite_ES_Guides({
    weight:['400'],
    subsets:['latin'],
    variable:"--font-Playwrite_ES_Guides",
});

const Page = () => {
    return (
        <>
        <Navbar />
        <HomeLogo />
        <SmoothHorizontalScroller
            className={`${playwrite.className} bg-white pr-[5vw]`}
            trackClassName="bg-white"
        >
            <section className='w-screen flex h-screen shrink-0'>
                <Image className='w-[1/2]  object-cover h-full' src={"/laptop.jpg"} alt='Laptop' height={500} width={500} />
                <div className='pt-[5%] '>
                    <p className='text-8xl w-[50vw] p-10'>A place where the ideas of websites becomes reality.</p>
                </div>
            </section>
            <section className='w-[50vw] flex shrink-0 flex-col h-screen bg-red-400'>
                <div className='text-sm w-2/3 p-10'>
                    <p className='text-2xl py-10'>About Us</p>
                    <p className='py-10'>Now if you are this far then I won&apos;t pretend. Here we can tell you what your company is doing and how you want to be percieved in the customers eyes. Why are you differentiated and how you are trying to make change in this world. And we are trying to do the same.</p>
                    <p>This is me and me only but if the requirement needs it I will work with my friends as well all this is not nice but it is required. I know it just sounds like gibberish but belive me you need some real website made not by AI but by real creative human beings. Everything has an up and down and you would want someone who understands you.</p>
                </div>
                <p className='text-5xl pt-[16%] text-center'>YOUR COUNTRY OF ORIGIN</p>
            </section>
            <section className='w-screen h-screen shrink-0'>
                <Image className='h-full w-full' src={'/11.jpg'} alt='Study Something' height={1000} width={3000} />
            </section>
            <section className='w-screen h-screen flex shrink-0'>
                <div className='w-1/2 bg-amber-600 h-screen'>
                    <p className='font-bold p-10'>Our Process</p>
                    <p className='text-2xl pt-[35%] px-16 pb-0 p-10'>Crafting for your Personal Needs</p>
                    <p className='p-5 px-16 text-sm'>Yes I agree that I will be a bit slow to deliver but will you rather get a finished experience rather than having an unfinished job which was just done for money. This is something that you would decide and I obviously wouldn&apos;t be able to do anything about it. So the choice is yours.</p>
                    <p className='p-5 px-16 text-sm'>We will give you a polish experience which you and your customers will be able to remember. Even if not all the users of the website are not converting to paying customers. If they feel that the website was polished then if they want to do something related to your job profile they will think of you. That is what a good and polished website does.</p>
                    <Link className='px-10' href={'/contact'}>Work with us</Link>
                </div>
                <div className='w-1/2'>
                    <Image src={'/12.jpg'} alt='Work Photo' height={1000} width={1000} />
                </div>
            </section>
            <section className='w-screen h-screen flex shrink-0'>
                <div className='w-1/2 h-screen flex items-center justify-around flex-col'>
                    <p className='font-bold'>The Only Person in the Team ME</p>
                    <p className='w-1/2'>This will be a place where you can talk about what your team is and consists of whom. This will help people to build on your brand and not suspect that this website is a scam.It is a place where you can build trust to others so post as natural pictures as you want. Currently that person is only me.</p>
                </div>
                <div className='w-1/2 bg-red-400 h-screen'>
                    <Image className='w-full h-[80%] object-contain p-10'  src={'/13.jpeg'} alt='Personal Photo' height={750} width={750}/>
                    <p className='text-center'>Purujeet Kumar</p>
                    <p className='text-center'>Owner,Web Developer,Thinker,Photographer,Product Manager</p>
                </div>

            </section>
            <section className='w-[50vw] flex shrink-0 flex-col items-center justify-center gap-20 bg-orange-500 '>
                <p className='font-bold text-center p-10'>Our Mission</p>
                <p className='text-center w-1/2'>We just think that everyone nowadays should have a presence online. It places you above the rest and helps you do all the work. It should not be dismissed by saying that we are a small company we donot need it. But that is exactly why you should have it. It will tell people how and what they are doing. It will give you transparency and accordingly give you more opportunities.</p>
                <Link className='px-10' href={'/contact'}>Work with us</Link>
            </section>
        </SmoothHorizontalScroller>
        </>
    )
}

export default Page
