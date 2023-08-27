import React from 'react';


const Footer = () => {
    return (
        <div className='mt-[700px] lg:mt-0'>
            <footer className="footer bg-slate-700 text-white footer-center p-10  ">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
        // <div>
        //   <div className="drawer lg:drawer-open ">
        //     {/* Header */}

        //     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content">
        //         <div className="navbar shadow-lg bg-slate-400">
        //             <div className="navbar-start">
        //                 <div className="dropdown">
        //                     <label tabIndex={0} className="btn btn-ghost btn-circle" htmlFor="my-drawer">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        //                     </label>

        //                 </div>
        //             </div>

        //             <div className="navbar-end">
        //                 <button className="btn btn-ghost btn-circle">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        //                 </button>
        //                 <button className="btn btn-ghost btn-circle">

        //                     <div className="indicator">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        //                         <span className="badge badge-xs badge-primary indicator-item"></span>
        //                     </div>
        //                 </button>

        //             </div>
        //         </div>

        //         <div>
        //             <Outlet></Outlet>
        //         </div>
        //     </div>

        //     {/* Header End */}
        //     {/* left side nav start */}

        //     <div className="drawer-side " >

        //         <label htmlFor="my-drawer" className=" drawer-overlay"></label>
        //         <ul className="menu p-4 w-80 lg:mt-[-25px] h-full bg-base-200 text-base-content">





        //             <li>
        //                 <Link

        //                     to={`api/all-admin`}>
        //                     Admin Page List
        //                 </Link>
        //             </li>
        //             {/* <li>
        //                 <Link to='/allUsers'>
        //                     All User List
        //                 </Link>
        //             </li> */}
        //             <li>
        //                 <Link to='/api/all-user/user-role'>
        //                     User Role
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to='/api/all-user/permission-list'>
        //                     User Role Permission
        //                 </Link>
        //             </li>


        //         </ul>


        //     </div>
        //     {/* left side nav end */}





        // </div>
        // </div>
    );
};

export default Footer;