import React from 'react';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import InfoCard from './InfoCard/InfoCard';
import InfoCards from './InfoCard/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Service/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials />
        </div>
    );
};

export default Home;