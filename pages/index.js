import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Card from '../components/card'
import WideCard from '../components/wideCard'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Adlibitum
        </title>
      </Head>
      <div>

        <Navbar />
        <div id="home" className='bg-[#000b76] sm:h-[600px] w-full h-[750px]'>
          <article className='prose prose-invert p-10 pt-20'>
            <h1>
              WHAT ARE WE?
            </h1>
            <p>
              Adlibitum is basically a trading company, operating in corporate sector supplying consumer
              Electronics, mobile communications, home and kitchen appliances, office equipment, LED
              lights, and power supply products.
              We offer extended warranties and special offers that are provided by our suppliers and
              product manufacturer. We also offer delivery services all over Pakistan for our corporate
              customers.
              Adlibitum provides extensive sales distribution and marketing services for electronic products
              across the country. We exceed our customer expectation in quality, delivery and cost through
              continuous improvement and customer interaction.
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
      <div id="business" className='flex justify-center p-10'>
        <article className='prose text-center'>
          <h1>OUR VISION</h1>
          <p>is to be the top marketing and distribution company to create a better everyday
            life for many people by providing the highest level of service, the broadest selection of
            products and the most competitive prices.
          </p>
        </article>

      </div>
      <div className="sm:p-20 flex sm:flex-row justify-center flex-col">
        <Card src='images/delivery.svg' text='Door to Door deliveries are made for bank credit card holders and corporate customers.' title='Door To Door Deliveries' />
        <Card src='images/partner.svg' text='We have hundreds of prominent affiliate partners in all major cities of Pakistan.' title='Affiliate Partners' />
        <Card src='images/reliable.svg' text='TVONICS Pakistan is a reliable and dependable source of supplier for all electronics appliances under one roof.' title='Reliable & Dependable' />
      </div>
      <div className='flex flex-col sm:flex-row justify-center bg-sky-300 p-20'>
        <article className='prose text-left'>
          <h1>
            OUR MISSION
          </h1>
          <p>is to set new standards of excellence our mission is to build on our history of
            product excellence and technology innovation to highest quality and most reliable products
            and services to our nationwide customers.
          </p>
          <h1>
            OUR STRENGTH
          </h1>
          <p>
            has been the heartwarming testimonials of loyal customers that has taken us
            from strength to strength. Excellent customer contacts, broad range of electrical and
            electronic products, good pricing strategy and the team of experienced qualified and young
            competent members are our back bone.

          </p>
        </article>
        <img src='images/team.svg' className='h-21 w-21 pt-20 sm:pt-0' />

      </div>
      <div id="clients" className='sm:p-20'>
        <div className='sm:p-20 flex flex-col sm:flex-row justify-center'>
          <Card src="images/bank.svg" title="BANKS" text='SILK BANK
          HABIB BANK LIMITED' />
          <Card src="images/medicine.svg" title="COMPANIES" text='PHILIP ELECTRONICS
          SIGNIEY
          EURO BUILDERS
          KARACHI WATER & SEWERAGEE' />
          <Card src="images/pharma.svg" title="PHARMACEUTICALS" text='PHARM EVO
          BOSCH PAKISTAN' />
        </div>
      </div>
     
      <div id='contact'>
        <div className='flex flex-row justify-center '>
          <article className='prose text-center'>
            <h1>GET IN TOUCH</h1>
            <p>Contact us with your query and we will get back to you soon.</p>

          </article>
        </div>
        <div className='flex flex-row justify-center p-10'>
          <WideCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}
