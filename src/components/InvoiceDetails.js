import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function InvoiceDetails({formData, setFormData,submitClicked}) {
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate=useNavigate()


  return (
    <>
      <div className="card">
        <div className="card-header">Invoice details</div>
        <div className="container">
          {/* Row 1 */}
          <div className="row">
            <div className="form-group">
              <label>
                Customer <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="customerName"
                placeholder="Name"
                value={formData.customerName}
                onChange={handleChange}
              />
              {submitClicked && !formData.customerName &&<span className="text-error">Please fill the filed above</span>}
            </div>
            <div className="form-group">
              <label>
                Customer Email <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="customerEmail"
                placeholder="email@.com"
                value={formData.customerEmail}
                onChange={handleChange}
              />
              {submitClicked && !formData.customerEmail &&<span className="text-error">Please fill the filed above</span>}
            </div>
            <div className="form-group">
              <label>
                Invoice Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="invoiceNumber"
                placeholder="Invoice number"
                value={formData.invoiceNumber}
                onChange={handleChange}
              />
              {submitClicked && !formData.invoiceNumber &&<span className="text-error">Please fill the filed above</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="form-group">
              <label>Issue Date</label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Shipping Address</label>
              <input
                type="text"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
              />
            </div>
          </div>

       
        </div>
      </div>
    </>
  );
}

export default InvoiceDetails;
