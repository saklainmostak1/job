import { createBrowserRouter } from "react-router-dom";

import Main from "../Connection/Main";
// import AdminPageList from "../View/Admin/College/AdminPageList";
import UserRolePermission from "../View/Admin/College/UserRolePermission";
import UserRole from "../View/Admin/College/UserRole";
import AllUsers from "../View/Admin/College/AllUsers";
import UpdateUserRole from "../View/Admin/College/UpdateUserRole";
import AdminPageList from "../View/Admin/College/AdminPageList";



// import AdminPageList from "../View/Admin/College/AdminPageList";



export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
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
            {
                        path: '/api/all-users',
                        element: <AllUsers></AllUsers>
            },
            {
                        path: '/api/all-users-role/update/:id',
                        element: <UpdateUserRole></UpdateUserRole>
            },
        ]
    }
])