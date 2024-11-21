import React from "react";

function InvoiceDetails() {
  return (
    <>
      <div className="card">
        <div className="card-header">Invoice details</div>
        <div className="container">
          {/* Row 1 */}
          <div className="row">
            <div className="form-group">
              <label>Customer</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <label>Customer Email</label>
              <input type="text" placeholder="email@.com" />
            </div>
            <div className="form-group">
              <label>Invoice Number</label>
              <input type="text" placeholder="Invoice number" />
            </div>
            <div className="form-group">
              <label>Assigned to</label>
              <input type="text" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="form-group">
              <label>Issue Date</label>
              <input type="text" placeholder="dd/mm/yyyy" />
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input type="text" placeholder="dd/mm/yyyy" />
            </div>
            <div className="form-group">
              <label>Shipping Address</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceDetails;
