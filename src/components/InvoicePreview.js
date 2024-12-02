import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppData } from "./AppContext";

function InvoicePreview() {
  const navigate = useNavigate();
  const { mainPayload } = useAppData();

  useEffect(() => {
    console.log("test", mainPayload);
  }, []);

  return (
    <div>
      <div className="invoice-form-container">
        <h2>Invoice Details</h2>
        <form className="invoice-form">
          <div className="form-group">
            <label htmlFor="customerName">
              Customer Name:{mainPayload.formData?.customerName}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email:{mainPayload.formData?.customerEmail}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="invoiceNumber">
              Invoice Number:{mainPayload.formData?.invoiceNumbe}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="issueDate">
              Issue Date:{mainPayload.formData?.issueDate}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">
              Due Date:{mainPayload.formData?.dueDate}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="address">
              Address:{mainPayload.formData?.shippingAddress}
            </label>
          </div>
        </form>
      </div>

      <div className="invoice-form-container">
        <h2>Item Details</h2>
        <div className="">
          <div className="">
            <>
              <div className="d-flex w-100">
                <div className="col-3">
                  <h6>Name</h6>
                </div>
                <div className="col-3">
                  <h6>qty</h6>
                </div>
                <div className="col-3">
                  <h6>Rate</h6>
                </div>
                <div className="col-3">
                  <h6>Amount</h6>
                </div>
              </div>
              {mainPayload.itemsData.map((item, index) => (
                <div className="d-flex w-100">
                <div className="col-3">
                  <p>{item.item}</p>
                </div>
                <div className="col-3">
                  
                  <p>{item.qty}</p>
                </div>
                <div className="col-3">
                <p>{item.rate}</p>
                </div>
                <div className="col-3">
                <p>{item.qty*item.rate}</p>
                </div>
              </div>
              ))}
            </>
          </div>
        </div>
      </div>

      <div>
        <button
          className="button btn btn-danger"
          onClick={() => {
            navigate("/");
          }}
        >
          back
        </button>
      </div>
    </div>
  );
}

export default InvoicePreview;
