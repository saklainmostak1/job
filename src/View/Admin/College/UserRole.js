import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiTrash, HiEye, HiPencilAlt } from "react-icons/hi";
import { Link } from 'react-router-dom';

const UserRole = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    const { data: userRole = [], isLoading, refetch
    } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5002/user-role/all-users-role`)
            const data = await res.json()
            return data
        }
    })


    console.log(userRole)

    const lastPostIndex = currentPage * postsPerPage
    const firstPosIndex = lastPostIndex - postsPerPage
    const userRoles = userRole.slice(firstPosIndex, lastPostIndex)
  
    let totalPosts = userRole.length
    let pages = []
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i)
    }


    
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')
        console.log(id)
        if (proceed) {
            fetch(`http://localhost:5002/user-role/all-users-role/${id}`, {
                method: "DELETE",

            })
                .then(Response => Response.json())
                .then(data => {
                    refetch()
                    toast.success('Delete Successfully')
                    console.log(data)
                    // if (data.deletedCount > 0) {
                    // }

                })
        }
    }


    return (
        <div>

        <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">All admin</h1>
                <div className="flex justify-end">
                    <label

                        className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-lg my-7 cursor-pointer "
                    >
                        <Link to="">Add New admin</Link>

                    </label>
                </div>




            </div>
            <div className="mt-8 bg-white p-7 rounded-xl">

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-white">
                            <tr className=''>
                                <th className="bg-white "></th>
                                <th className="bg-white">Role Name</th>
                                <th className="bg-white">Status</th>
                                <th className="bg-white">Created_date</th>
                                <th className="bg-white">Modified date</th>
                              
                                <th className="bg-white ">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                userRoles?.map((userRole, i) =>

                                    <tr className=''>
                                        <td>
                                            {i + 1}
                                        </td>

                                        <td>
                                            
                                                <p className=" text-sm">
                                                    {userRole.role_name}
                                                </p>
                                          
                                        </td>
                                        <td>
                                            
                                                <p className=" text-sm">
                                                    {userRole.status}
                                                </p>
                                          
                                        </td>
                                      
                                        <td>
                                            
                                                <p className=" text-sm">
                                                    {userRole.created_date}
                                                </p>
                                          
                                        </td>
                                        <td>
                                            
                                                <p className=" text-sm">
                                                    {userRole.modified_date}
                                                </p>
                                          
                                        </td>
                                      
                                        

                                       
                                      
                                        <td className="">
                                            <div className="flex items-center ">
                                                <Link to={`/allHome/details/${userRole?.id}`}>

                                                    <label
                                                        className="w-8 h-8 bg-green-200 inline-block rounded-full text-center cursor-pointer group hover:bg-green-500 duration-300 mr-1"
                                                        htmlFor=""
                                                    >
                                                        <p className=' mt-2 ml-2 text-green-700 group-hover:text-white duration-300'>
                                                            <HiEye></HiEye>
                                                        </p>
                                                    </label>
                                                </Link>
                                                <Link to={`/api/all-users-role/update/${userRole.id}`}>

                                                    <label
                                                        className="w-8 h-8 bg-blue-200 inline-block rounded-full text-center cursor-pointer group hover:bg-blue-500 duration-300 mr-1"
                                                        htmlFor=""
                                                    >
                                                        <p className=' mt-2 ml-2 text-blue-700 group-hover:text-white duration-300'>
                                                            <HiPencilAlt></HiPencilAlt>
                                                        </p>
                                                    </label>
                                                </Link>



                                                <button
                                                onClick={() => handleDelete(userRole.id)}
                                                >
                                                    <label
                                                        className="w-8 h-8 bg-red-200 inline-block rounded-full text-center cursor-pointer group hover:bg-red-500 duration-300 mr-1"
                                                        htmlFor=""
                                                    >
                                                        <p className=' mt-2 ml-2 text-red-500 group-hover:text-white duration-300'>
                                                            <HiTrash></HiTrash>
                                                        </p>

                                                    </label>
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className=" mt-5 paigination">
      {
        pages.map((page, index) =>
          <button
            key={index + 1}
            onClick={() => setCurrentPage(page)}
            className=

            {page === currentPage ? 'active' : ''}
          >{page}</button>
        )
      }

    </div>

            </div>
        </div>


    </div>
    );
};

export default UserRole;