import React from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    return (


        <div >
            <ul >
                <li>
                    <Link
                        to={`api/all-admin`}>
                        Admin Page List
                    </Link>
                </li>
                {/* <li>
<Link to='/allUsers'>
All User List
</Link>
</li> */}
                <li>
                    <Link to='/api/all-user/user-role'>
                        User Role
                    </Link>
                </li>
                <li>
                    <Link to='/api/all-user/permission-list'>
                        User Role Permission
                    </Link>
                </li>
            </ul>
        </div>

    );
};

export default LeftSideNav;