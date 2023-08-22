import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import AdminPageList from "../../Controller/Admin/AdminPageList/AdminPageList";
import AllUser from "../../Controller/Admin/Users/AllUser";
import UserRole from "../../Controller/Admin/UsersRole/UserRole";
import UserRolePermission from "../../Controller/Admin/UserRolePermission/UserRolePermission";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/admin-page-list',
                element: <AdminPageList></AdminPageList>
            },
            {
                path:'/allUsers',
                element: <AllUser></AllUser>
            },
            {
                path:'/user-role',
                element: <UserRole></UserRole>
            },
            {
                path:'/role-permission',
                element: <UserRolePermission></UserRolePermission>
            },
        ]
    }
])