import { createBrowserRouter } from "react-router-dom";

import Main from "./Main";
import AdminPageList from "../View/Admin/Admin_Page_list/AdminPageList";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                        path: '/api/all-admin',
                        element: <AdminPageList></AdminPageList>
            }
        ]
    }
])