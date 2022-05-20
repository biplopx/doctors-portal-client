import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.int';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        <h2 className='text-2xl font-bold text-purple-500'>Welcome to your dashboard</h2>
        <Outlet></Outlet>
        {/* <!-- Page content here --> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-secondary text-black">
          {/* <!-- Sidebar content here --> */}
          <li><Link to="/dashboard">My Appointments</Link></li>
          <li><Link to="/dashboard/review">My Reviews</Link></li>
          <li><Link to="/dashboard/myhistory">My History</Link></li>
          {admin && <>
            <li><Link to="/dashboard/users">My Users</Link></li>
            <li><Link to="/dashboard/add-doctor">Add Doctor</Link></li>
            <li><Link to="/dashboard/manage-doctors">Manage Doctors</Link></li>
          </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;