import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdminPageList from '../../View/Admin/College/AdminPageList';

const AdminPageListController = () => {

    const { data: adminPageList = [], isLoading, refetch
    } = useQuery({
        queryKey: ['adminPageList'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5002/admin/all-admin')
            // const res = await fetch(AdminPageListModel.getAllAdminPageList)
            
            const data = await res.json()
            return data
        }
    })



    return (
        <div>
            <AdminPageList adminPageList={adminPageList}
            refetch={refetch}
            ></AdminPageList>
        </div>
    );
};

export default AdminPageListController;