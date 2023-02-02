import React from "react";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots, price } = appointmentOption;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center my-8">
      <div className="card-body ">
        <h2 className=" text-3xl text-secondary  ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 0 ? "spaces" : "space"} available
        </p>
        <p><small>Price : ${price}</small></p>

        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            // onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-Modal"
            onClick={() => setTreatment(appointmentOption)}
            className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
