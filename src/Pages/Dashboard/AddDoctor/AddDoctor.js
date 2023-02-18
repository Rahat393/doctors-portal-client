import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Home/Shared/Loading/Loading';

const AddDoctor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const imageHostKey = process.env.REACT_APP_image_key;
  console.log(imageHostKey);

  const handleAddDoctor = data => {
     const image = data.image[0];
     const formData = new FormData()
     formData.append('image', image)
    console.log(data);
  }

  const {data: specialties = [], isLoading} = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/appointmentspecialty')
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return  <Loading></Loading>
  }

  return (
    <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select
                        {...register('specialty')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
  );
};

export default AddDoctor;