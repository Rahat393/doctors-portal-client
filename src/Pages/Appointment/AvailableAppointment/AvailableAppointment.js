import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../Home/Shared/Loading/Loading";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOption, setAppointmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOption = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentopptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentopptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentopptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOption(data));
  // }, []);

  return (
    <section>
      <p className="text-primary mt-5  font-bold text-center">
        Available Appointment on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {appointmentOption.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
