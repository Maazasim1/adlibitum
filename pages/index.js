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
        <Navbar />
      <div>

        <div id="home" className='bg-black sm:h-[400px] text-white w-full h-[750px] flex justify-evenly pb-10'>
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
              <a className='no-underline px-4 py-2 font-semibold text-sm bg-slate-700 text-white rounded-full shadow-sm'>
                Read More
              </a>
            </Link>
          </article>
          <div className='overflow-hidden w-[400px] h-[400px] rounded-full hidden sm:block relative top-10' >
            <Image
              src='/images/sky.webp'
             layout='fill'
             objectFit='cover'
            />
          </div>

        </div>

      </div>
      <div id="business" className='flex justify-center p-10 pt-[20rem] text-white'>
        <article className='prose prose-invert'>
          <h1>OUR VISION</h1>
          <p>is to be the top marketing and distribution company to create a better everyday
            life for many people by providing the highest level of service, the broadest selection of
            products and the most competitive prices.
          </p>
        </article>

      </div>
      <div className="sm:p-20 flex sm:flex-row justify-center flex-col">
        <Card src='images/delivery.svg' text='We provide door to door deliveries to the destinations assigned by our corporate and domestic customers.' title='Door To Door Deliveries' />
        <Card src='images/partner.svg' text='We have hundreds of prominent affiliate partners in all major cities of Pakistan.' title='Affiliate Partners' />
        <Card src='images/reliable.svg' text=' Pakistan is a reliable and dependable source of supplier for all electronics appliances under one roof.' title='Reliable & Dependable' />
      </div>
      <div className='flex flex-col sm:flex-row justify-center bg-black p-20'>
        <article className='prose prose-invert text-left'>
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
          <article className='prose prose-invert text-center'>
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
