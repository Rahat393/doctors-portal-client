import React from 'react';

const Reviews = ({ review }) => {
    const { review: userReview, name, img, location } = review;
    return (
        <div>
            <div className="card   shadow-xl">
                <div className="card-body">

                    <p>{userReview}</p>
                    <div className=" flex items-center mt-6 ">
                        <div className="avatar">
                            <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className=''>
                            <h4 className="text-lg font-bold">{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;