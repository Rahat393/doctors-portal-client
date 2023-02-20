import {   useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Home/Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Home/Shared/Loading/Loading';
import './ManageDoctor.css'

const ManageDoctor = () => {

  const [deletingDoctor, setDeletingDoctor] = useState(null)

  const {data: doctors, isLoading, refetch} = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try{
        const res = await fetch('http://localhost:5000/doctors',{
          headers: {
            authorization : `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch{

      }
    }
  });

  const handleDeleteDoctor = doctor => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data =>{
             if(data.deletedCount > 0){
              refetch();
              toast.success( `Doctor ${doctor.name} deleted successfully !`)
      }
    })
   }

  const closeModal = () => {
    setDeletingDoctor(null)
  }

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h2 className='text-3xl mb-5  '>  Doctors Information   </h2>
      <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.length > 0 &&
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)}  htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
             
            {
              deletingDoctor && <ConfirmationModal 
              title={'Are you sure you want to delete?'}
               message={`If you delete doctor {${deletingDoctor.name} ? <span style={{ color: 'red' }}>{eachCustomer.email}</span> : null}. You can't be undone !!`}
              
              successAtion={handleDeleteDoctor}
              modalData={deletingDoctor}
              closeModal={closeModal}
              >
                
           </ConfirmationModal>
            }
    </div>
  );
};

export default ManageDoctor;