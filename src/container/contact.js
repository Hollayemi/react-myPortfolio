import React from 'react'
import ContactForm from '../components/displayPage/Contact/contactForm'

const Contact = () => {
    return (
        <div className='contact flex justify-center flex-col mt-10' id='contact'>
            <div className='w-full'>
                <ContactForm />
            </div>
            <div className='h-8 w-full bg-teal-900 leading-8 text-center text-sm text-white'>
                <h3>Built with <i className='fa fa-heart'></i> by stephanyemmitty</h3>
            </div>
        </div>
    )
}

export default Contact
