import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
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
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid gap-5 grid-cols-1 mt-10">
            <input name="text" disabled value={date} className="input  " />
            <select name="slot" className="select select-bordered w-full  ">
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            {/* <input name="name" type='text' defaultValue={user?.displayName} readOnly placeholder="Your name" className="input input-bordered " />
                        <input name="email" type='email' defaultValue={user?.email} readOnly placeholder="Email Address" className="input input-bordered " /> */}
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
