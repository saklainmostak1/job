import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateUserRole = () => {

const {id} = useParams()
console.log(id)


const { data: userRoleUpdate = [], isLoading, refetch
} = useQuery({
    queryKey: ['userRoleUpdate'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5002/user-role/all-users-role/${id}`)
        const data = await res.json()
        return data
    }
})

    const [editProfile, setEditProfile] = useState(userRoleUpdate)
   
    const handleEditHome = event => {
        event.preventDefault()
        fetch(`http://localhost:5002/user-role/all-users-role/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editProfile)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
             
                toast.success('Successfully Update!');
                // if (data.modifiedCount > 0) {
                // }

            })
    }

    const handleChange = event => {
        const field = event.target.name
        const value = event.target.value
        const review = { ...editProfile }
        review[field] = value
        setEditProfile(review)
    }


    return (
        <div>
            <form action="" onSubmit={handleEditHome}>
                <div className="container mx-auto px-5 pt-10 pb-10 bg-[#ddddddac]">
                    <h1 className="font-bold text-2xl">Update product</h1>
                    <div className="lg:flex ">
                        <div className=" mt-8 lg:w-[65%] w-full lg:mr-5">
                            <div className=" bg-white p-5 rounded-md">
                                <h3 className="text-xl font-bold">Product Information</h3>
                                <div className="divider"></div>
                                <div className="mt-6 lg:flex md:flex items-center">
                                    <div className="w-60">
                                        <label htmlFor="">
                                             Name
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        defaultValue={editProfile[0]?.role_name}
                                        name='role_name'
                                        placeholder="Product Name"
                                        type="text"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                        required
                                    />
                                </div>
                                <div className="mt-6 lg:flex md:flex items-center">
                                    <div className="w-60">
                                        <label htmlFor="">
                                            Updated Date
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                       
                                        name='modified_date'
                                        placeholder="Product Name"
                                        type="date"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                        required
                                        
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <input

                                    className='btn mt-5 btn-outline btn-info mb-5' type="submit" value="Update Products" />

                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default UpdateUserRole;