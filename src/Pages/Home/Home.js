import React from 'react';
import Banner from './Banner/Banner';
import InfoCard from './InfoCard/InfoCard';
import InfoCards from './InfoCard/InfoCards';
import Services from './Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
        </div>
    );
};

export default Home;