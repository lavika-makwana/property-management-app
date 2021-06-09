import React from 'react';
import { Link } from 'react-router-dom';
import UsersList from './UsersList';
import AddUser from './AddUser';


const NavBar = (props) => {
  return(
    <>
    <div className="col-12">
        {/* Content Header (Page header) */}
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <Link to='/add-user'>
                <li className="nav-item">
                  <button className="btn btn-success"><i className="ion ion-person-add" />Add User</button>
                </li>
              </Link>
              <li className="nav-item">
                <button className="btn btn-success ml-4"><i className="ion ion-person-search" />User List</button>
              </li>
            </ul>
          </div>
          {/* Right navbar links */}
          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-header">15 Notifications</span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <UsersList />
      </div>
    </>
  );
};

export default NavBar;