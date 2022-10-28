import React from 'react'

export default function WideCard() {
    return (
        <div className='flex flex-col sm:flex-row justify-center w-[85vw] sm:w-[70vw] rounded-lg bg-black border border-[#d4a537] shadow-lg drop-shadow-xl'>
            <div className='flex flex-col'>

                <div className='pt-10 sm:pl-10'>
                    <article className='prose prose-invert text-center sm:text-start'>
                        <h2>
                            LOCATION
                        </h2>
                        <div className='flex flex-col sm:flex-row'>
                            <img className='object-fit h-20 pb-4' src="images/location.svg" />
                            <p className='pl-5 pr-5 break-words'>
                                Shop 7, liberty view, block 14, gulistan e Johar, karachi
                            </p>
                        </div>
                    </article>
                </div>
                <div className='sm:pl-10'>
                    <article className='prose prose-invert text-center sm:text-start'>
                        <h2>
                            EMAIL
                        </h2>
                        <div className='flex flex-col sm:flex-row'>
                            <img className='object-fit h-20' src="images/email.svg" />
                            <p className='pl-5 pr-5 break-words'>
                                Syedowaissalman@adlibitumsolutions.com
                            </p>
                        </div>
                    </article>
                </div>
                <div className='sm:pl-10 pb-10'>
                    <article className='prose prose-invert text-center sm:text-start'>
                        <h2>
                            PHONE
                        </h2>
                        <div className='flex flex-col sm:flex-row'>
                            <img className='object-fit h-20' src="images/phone.svg" />
                            <p className='pl-5 pr-5 break-words'>
                                03111234488
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            <div className='right-0 pt-10 rounded-lg w-full sm:h-full h-[60vw] sm:w-[70%] sm:block hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.451447556073!2d67.13142356529444!3d24.91668624913756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338fb184ab3b7%3A0x28030e745594cf8c!2sLiberty%20View%20Apartments!5e0!3m2!1sen!2s!4v1666979344513!5m2!1sen!2s"
                    width="800"
                    height="600"
                    style={{border:0}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </div>
    )
}
