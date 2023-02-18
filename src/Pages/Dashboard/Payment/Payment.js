import { Elements } from '@stripe/react-stripe-js';
import { loadStripe  } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoaderTail from '../../../Components/LoaderTail/LoaderTail';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation()
  console.log(booking);
  const {treatment, price,appointmentDate,slot} = booking;

if(navigation.state === "loading"){
  return  'Loading ....'
}
 console.log(booking.treatment);
  return (
    <div className='mt-8'>
      <h3 className="text-4xl">Payment Info for <span className='text-primary  '>{treatment}</span></h3>
      <p className='text-2xl mt-4'> Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate
}</strong> at <strong>{slot}</strong></p>

<div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
    </div>
  );
};

export default Payment;