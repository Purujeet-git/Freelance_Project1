import Image from 'next/image'
import React from 'react'
import { Lobster_Two, Changa } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import HeroIntroText from '@/components/HeroIntroText';
import SmoothHorizontalScroller from '@/components/SmoothHorizontalScroller';

const lobstertwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ['400'],
})

const changa = Changa({
  weight: ['400'],
  variable: "--font-change",
  subsets: ['latin'],
})

const heroBody = 'If you are an architechtural firm looking for a professional website, I think you will like to work with us not because we are just another freelancer. We want to work new and upcoming startups who are looking to go global and on the internet. We will provide support like increasing the SEO so that your website comes on top along with your putting your real world project which would help customers to talk to you.'

const Page = () => {
  return (
    <>
      <Navbar />
      <SmoothHorizontalScroller
        className={`${lobstertwo.className} bg-black pr-[5vw]`}
        trackClassName="bg-white w-[500vw]"
      >
          
          <div className='h-screen w-[96vw] shrink-0 relative overflow-hidden'>
            <Image className='h-screen w-[96vw] object-cover' loading='eager' src={'/1.jpg'} alt='Poster Image' height={700} width={700}/>
            <Image className='absolute z-10 top-10 left-[45%]' src={'/logo1.png'} alt='Logo' height={100} width={100}/>
            <HeroIntroText
              title="Building Beyond"
              body={heroBody}
              titleClassName={`${lobstertwo.variable} absolute text-[22vh] z-10 text-white bottom-10 p-0 whitespace-nowrap leading-none`}
              bodyClassName={`${changa.className} absolute bottom-60 z-10 w-1/4 right-40 text-white`}
            />
          </div>
          
          <section className='text-black w-[150vw] shrink-0 bg-white'>
            <div className='flex'>
              <div className='w-1/4 flex flex-col border-r'>
                <div className='flex items-center justify-between p-10'>
                  <p>Introduction</p>
                  <Image src={'/2.jpg'} alt='Photo' width={200} height={200}/>
                </div>
                <div className='h-[45vh]'></div>
                <div className='px-15'>
                  <p className='text-4xl'>Established in 2026</p>
                  <p className='text-sm '>We make it possible for you to reach new customers and not just rely on word of mouth. You are able to show what you can actually do. You will be able to show off this type of websites on instagram. Instagram will allow you to show off various other projects as well.</p>
                </div>
                <Link className='p-10 pt-2 text-center' href={'/'}>Learn More about us</Link>
              </div>
              <div className='w-3/4  flex'>
                <div className=' w-1/3 h-screen p-10 px-5'>
                  <Image className='h-[90%] object-cover' src={'/7.jpg'} alt='ProjectPhoto' height={5000} loading='eager' width={5000}/>
                  <p>Example Resident</p>
                  <Link href={'/'}>View Project</Link>
                </div>
                <div className=' w-1/3 h-screen p-10 px-5'>
                  <Image className='h-[90%] object-cover' src={'/3.jpg'} alt='ProjectPhoto' height={5000} loading='eager' width={5000}/>
                  <p>Example Resident</p>
                  <Link href={'/'}>View Project</Link>
                </div>
                <div className=' w-1/3 h-screen p-10 px-5'>
                  <Image className='h-[90%] object-cover' src={'/4.jpg'} alt='ProjectPhoto' height={5000} loading='eager' width={5000}/>
                  <p>Example Resident</p>
                  <Link href={'/'}>View Project</Link>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-white w-[98vw] shrink-0'>
            <div className='flex w-full'>
              <div className='w-1/2  flex flex-col  h-screen'>
                <p className='text-center p-10  '>Where we Come Into Picture</p>
                <p className='text-center text-4xl pt-[20%] p-10'>We can help you design websites which will prove the customers of your work. It will be proff of your work and will help the customers if they are hiring you why this will be the greatest idea for them. We can make all of this possible.</p>
                <div className='flex gap-2 items-center justify-center pt-5'><p>Focussing on</p> <Link href={'/'}>Commercial</Link> <p>and</p><Link href={'/'}> Resort</Link><p> Projects</p></div>
                <p className='text-center pt-[18%]'>View All Projects</p>
              </div>
              <Image src={'/5.jpg'} alt='Resort Photo' height={1000} width={1000}/>
            </div>
          </section>

          <section className='flex bg-white shrink-0'>
            <div className='w-[55vw] h-screen '>
              <p className='text-2xl w-1/2 p-10'>You can be in tune of different functions and focus on different generation groups since you can target the older generation on facebook and the newer generations in instagram. Now it&apos;s your choice if you want to leave this huge market. You can be one of the first these ideas. We will also constantly focus on uploading different articles on your websites so that your websites can come out on top.</p>
              <p className='text-9xl text-center'>JOURNAL</p>
            </div>
            <div className='w-screen flex '>
              <div className='w-1/2 p-10 flex flex-col items-center h-screen justify-center'>
                  <Image className='h-[90%] w-[75%]' src={'/8.jpg'} height={1000} width={1000} alt='Journal Photo'/>
                  <p>There is a new hope for everyone....</p>
              </div>
              <div className=' gap-10 h-screen flex w-1/2 flex-col'>
              <div className='h-1/2 flex items-center gap-10 pb-0 pt-5 p-10'>
                <Image className='h-full w-fit' src={'/9.jpg'} height={1000} width={1000} alt='Journal Photo1'/>
                <p className='p-10'>These are the just example images which I can take for your properties such that they will be unique and not another AI generated Image.</p>
                </div>
                <div className='h-1/2 flex items-center pb-5 gap-10 pt-0 p-10'>
                <Image className='h-full w-fit' src={'/10.jpg'} height={1000} width={1000} alt='Journal Photo2'/>
                <p className='p-10'>These will make your SEO rankings shot up and also give your website unique so even if I have made these types of websites for someone else this will look unique since this website will showcase your project.</p>
                </div>  
              </div>
            </div>
          </section>

      </SmoothHorizontalScroller>
    </>
  )
}

export default Page;
