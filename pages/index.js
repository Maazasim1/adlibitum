import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Card from '../components/card'

export default function Home() {
  return (
    <div>
      <div>

      <Navbar />
      <div className='bg-[#000b76] h-96 w-full'>
        <article className='prose prose-invert p-10'>
          <h1>
            What are we?
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque et urna rutrum convallis at vel elit. Quisque quis tincidunt elit. Quisque imperdiet ligula tortor, sagittis maximus enim efficitur vitae. Vivamus dignissim nulla nec lectus tincidunt scelerisque. Sed auctor porttitor ligula nec egestas. Aenean eget volutpat diam, sit amet egestas tellus. Mauris laoreet mollis orci vitae vulputate. Ut maximus nulla sed commodo rhoncus. Aenean ac placerat magna.
          </p>
          <Link href='#'>
          <a className='no-underline px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'>
            Read More
          </a>
          </Link>
        </article>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,58.7C672,53,768,43,864,80C960,117,1056,203,1152,250.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        <path fill="#000b76" fillOpacity="1" d="M0,256L30,250.7C60,245,120,235,180,208C240,181,300,139,360,128C420,117,480,139,540,122.7C600,107,660,53,720,53.3C780,53,840,107,900,133.3C960,160,1020,160,1080,149.3C1140,139,1200,117,1260,90.7C1320,64,1380,32,1410,16L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

      </div>
      <div className='flex justify-center'>
        <article className='prose text-center'>
        <h1>Our Business</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque et urna rutrum convallis at vel elit. Quisque quis tincidunt elit. Quisque imperdiet ligula tortor, sagittis maximus enim efficitur vitae. Vivamus dignissim nulla nec lectus tincidunt scelerisque. Sed auctor porttitor ligula nec egestas. Aenean eget volutpat diam, sit amet egestas tellus. Mauris laoreet mollis orci vitae vulputate. Ut maximus nulla sed commodo rhoncus. Aenean ac placerat magna.
</p>
        </article>
        
      </div>
      <div className="p-20 flex flex-row justify-center">
        <Card src='images/delivery.svg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque et urna rutrum' title='Door To Door Deliveries'/>
        <Card src='images/partner.svg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque et urna rutrum' title='Affiliate Partners'/>
        <Card src='images/reliable.svg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque et urna rutrum' title='Reliable & Dependable'/>
      </div>
    </div>
  )
}
