import "./App.css";
import Invoice from "./components/Invoice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./components/Items";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoicePreview from "./components/InvoicePreview";
import { DataProvider } from "./components/AppContext";

import Apiis from "./components/Apiis";


function App() {
 
  return (
    // <div className="App">
    //   <Invoice />

    // </div>
    
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Invoice />} />
          <Route path="/invoicePreview" element={<InvoicePreview />} />
          <Route path="/apiis" element={<Apiis />} />
        </Routes>

      </BrowserRouter>
    </DataProvider>
    
  );
}

export default App;
