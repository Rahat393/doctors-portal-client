import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
       
    }
    console.log(booking);
    setTreatment(null)
  }

  return (
    <>
      <input type="checkbox" id="booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid gap-5 grid-cols-1 mt-10">
            <input name="text" disabled value={date} className="input  " />
            <select name="slot" className="select select-bordered w-full  ">
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input name="name" type='text'     placeholder="Your name" className="input input-bordered " />
                        <input name="email" type='email'     placeholder="Email Address" className="input input-bordered " />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered "
            />

            <input className="btn btn-accent" type="submit" value="SUBMIT" />
            {/* <input className='btn btn-accent' type="submit">Submit</input> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
