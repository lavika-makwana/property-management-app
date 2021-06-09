import React from 'react';
import AddUser from './AddUser';

const NavBar = (props) => {
	return(
    <div className="col-12">
      {/* Content Header (Page header) */}
      
      {/* Main content */}
      <section className="content col-12">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Default box */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">User Details</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
						      {/* user add Form */}
						      <AddUser />
						      {/* /.card */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  Footer
                </div>
                {/* /.card-footer*/}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
	);
};

export default NavBar;