import React from 'react';
import img from '../../../assets/images/appointment.png'
import BtnPrimary from '../../../Components/BtnPrimary';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='text-center my-14 py-8 rounded-lg' style={{ backgroundImage: `url(${img})` }}>
            <h4 className='text-secondary text-2xl font-bold'>Contact Us</h4>
            <h2 className='text-4xl text-white'>Stay Connected With Us</h2>

            <form className='mt-10 mb-5'>

                <input className=' ' type="email" placeholder='Email Address' />
                <input className=' ' type="text" placeholder='Subject' />
                <textarea name="" id="" rows="5" placeholder='Your Message'></textarea>
            </form>
            <button className='btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white py-5 px-10'>Submit</button>
        </div>
    );
};

export default ContactForm;