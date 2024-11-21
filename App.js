import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="voice">
    <div className="Invoice">Invoice</div>
    <div className="invoice-detail">Invoice details</div>
       <div className="container">
     
      <div className="row">
        <label>Customer</label>
         <input 
         type="text"
         placeholder="Name"
         ></input>
        <label>Customer Email</label>
        <input
        type="text"
        placeholder="email@.com"
        ></input>

        <label>Invoice Number</label>
        <input
        type="text"
        placeholder="Invoice number"
        ></input>

        <label>Assigned to</label>
        <input 
        type="text"
        ></input>

      </div>
     
      <div className="row">
        <label>Issue Date</label>
        <input
        type="text"
        placeholder="dd/mm/yyyy"
        ></input>

        <label>Due Date</label>
        <input
        input="text"
        placeholder="dd/mm/yyyy"
        ></input>

        <label>Shipping Address</label>
        <input
        input="text"
        ></input>
        
      </div>
    </div>
    
    </div>
    <div className="items-details">
    <div className="items">Items</div>
    
    </div>
    </>
  );
}

export default App;
