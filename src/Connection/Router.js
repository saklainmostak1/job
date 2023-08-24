import { createBrowserRouter } from "react-router-dom";

import Main from "./Main";
import AdminPageList from "../View/Admin/Admin_Page_list/AdminPageList";
import UserRolePermission from "../Controller/Admin/UserRolePermission";
import UserRole from "../Controller/Admin/UserRole";




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