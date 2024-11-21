import './App.css';
import Invoice from './components/Invoice';

function App() {
  return (
    <div className="App">
    <Invoice/>

    <div className="form-group customer-message-container mt-5">
  <label>Customer Message</label>
  <div className="textarea-with-button">
    <textarea
      rows="4"
      placeholder="Customer Message"
      className="customer-message"
    ></textarea>
    <button className="save-button">Save</button>
  </div>
</div>

 </div>
  );
}

export default App;
