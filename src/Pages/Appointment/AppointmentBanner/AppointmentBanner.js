import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import img from '../../../assets/images/chair.png'
import bgimg from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div  >
            <div className="hero bg-cover bg-center" style={{backgroundImage: `url(${bgimg})`}} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={img} className="max-w-sm  rounded-lg shadow-2xl" />
                    <div className='mr-28' >
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={ (data) => {
                                if(data) {
                                    setSelectedDate(data)
                                }
                            }}
                        ></DayPicker>
    
                    </div>
                </div>
                
            </div>
            {/* <p className='text-primary   font-bold text-center'>You  have selected date {format(selectedDate, 'PP')}</p> */}
        </div>
    );
};

export default AppointmentBanner;