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
    comments:"",
  });
  const [items, setItems] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  useEffect(() => {
    setSubmitClicked(false)
  }, [formData])
  

  const handleSubmit = () => {
    setSubmitClicked(true)
    if (!formData.customerName||!formData.customerEmail||!formData.invoiceNumber) {
      alert("Please fill all required fields")
      
      // alert("Please fill atleast one row")
      
      return
    }
    if (items.length <= 0) {
      alert("Please fill atleast one form");
      return;
  }
    
    const mainPayload = {
      formData : formData,
      itemsData:items
    };
    console.log("mainPayload is:", mainPayload);
    alert("Form Submitted Successfully")
    setItems([]);
    setFormData({
      customerName: "",
    customerEmail: "",
    invoiceNumber: "",
    issueDate: "",
    dueDate: "",
    shippingAddress: "",
    comments:"",
    });
    
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
                  name='comments'
                  value={formData.comments}
                  onChange={handleChange}
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