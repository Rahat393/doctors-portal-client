import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import BtnPrimary from '../../../Components/BtnPrimary';

const MakeAppointment = () => {
    return (
        <section className='my-40 rounded'
            style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero   text-white ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 -mt-32 -mb-4 hidden md:block rounded-lg  " alt='' />
                    <div>
                        <p className='text-2xl text-primary'>Appointment</p>
                        <h1 className="text-4xl  ">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <BtnPrimary>Get Started</BtnPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;