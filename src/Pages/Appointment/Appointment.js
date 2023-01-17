import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            />
            <AvailableAppointment
             selectedDate={selectedDate}
             setSelectedDate={setSelectedDate}
            />
        </div>
    );
};

export default Appointment;