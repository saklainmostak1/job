import { createBrowserRouter } from "react-router-dom";

import Main from "./Main";
import AdminPageList from "../View/Admin/Admin_Page_list/AdminPageList";
import UserRole from '../View/Admin/Admin_Page_list/UserRole';
import UserRolePermission from '../View/Admin/Admin_Page_list/UserRolePermission'




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                        path: '/api/all-admin',
                        element: <AdminPageList></AdminPageList>
            },
            {
                        path: '/api/all-user/permission-list',
                        element: <UserRolePermission></UserRolePermission>
            },
            {
                        path: '/api/all-user/user-role',
                        element: <UserRole></UserRole>
            },
        ]
    }
])