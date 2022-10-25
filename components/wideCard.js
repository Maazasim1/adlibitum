import React from 'react'

export default function WideCard() {
    return (
        <div className='flex flex-col sm:flex-row justify-center w-[85vw] sm:w-[70vw] rounded-lg bg-gray-50 shadow-lg drop-shadow-xl'>
            <div className='flex flex-col'>

                <div className='pt-10 sm:pl-10'>
                    <article className='prose text-center sm:text-start'>
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
                    <article className='prose text-center sm:text-start'>
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
                    <article className='prose text-center sm:text-start'>
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
            <div className='right-0 rounded-lg w-full sm:h-full h-[60vw] sm:w-[70%]'>
                <iframe className='rounded-lg' width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=farhan%20classic+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
            </div>

        </div>
    )
}
