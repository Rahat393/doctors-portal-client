import React from 'react';
import img from '../../../assets/images/treatment.png'
import BtnPrimary from '../../../Components/BtnPrimary';

const DentalCare = () => {
    return (
        <div>
            <div className="mt-14 w-2/3  flex mx-auto card md:card-side bg-base-100   gap-10">
                <img className='w-72 rounded-md' src={img} alt="Movie" />
                <div className="card-body   ">
                    <h2 className="card-title text-4xl ">Exceptional Dental Care, on Your Terms</h2>
                    <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page Many desktop publishing packages and web pageMany desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <BtnPrimary>watch</BtnPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;