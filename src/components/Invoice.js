import React, { useEffect, useState } from 'react'
import InvoiceDetails from './InvoiceDetails'
import Items from './Items'

function Invoice() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    invoiceNumber: "",
    issueDate: "",
    dueDate: "",
    shippingAddress: "",
  });
  const [items, setItems] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false)

  useEffect(() => {
    setSubmitClicked(false)
  }, [formData])
  

  const handleSubmit = () => {
    setSubmitClicked(true)
    if (!formData.customerName||!formData.customerEmail||!formData.invoiceNumber) {
      alert("Please fill all required fields")
      return
    }
    const mainPayload = {
      formData : formData,
      itemsData:items
    };
    console.log("mainPayload is:", mainPayload);
    alert("Form Submitted Successfully")
    // You can send this data to an API or perform further actions
  };

  return (
    <>
    <header className="Invoice">Invoice</header>
    <InvoiceDetails formData={formData} setFormData={setFormData} submitClicked={submitClicked}/>
    <Items items={items} setItems={setItems}/>
    <div className="form-group customer-message-container mt-3 card mb-5">
        <div className="card-body">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <label>Comments</label>
              <div className="textarea-with-button">
                <textarea
                  rows="4"
                  placeholder="Comments"
                  className="customer-message"
                ></textarea>
              </div> </div>
              <div className="col-md-2 d-flex flex-column justify-content-end text-end align-items-end"> 
                
                <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
              </div>
           
          </div>
        </div>
      </div>
    </>

  )
}

export default Invoice