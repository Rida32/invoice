import React, { useState } from "react";

const DUMMY = [
  {
    id: 1,
    item: "Laptop",
    description: "Dell Inspiron 15",
    qty: 2,
    rate: 700,
    amount: 1400,
    costPrice: 650,
    isMisc: false,
  },
  {
    id: 2,
    item: "Mouse",
    description: "Logitech Wireless Mouse",
    qty: 5,
    rate: 20,
    amount: 100,
    costPrice: 15,
    isMisc: true,
  },
  {
    id: 3,
    item: "Keyboard",
    description: "Mechanical Keyboard",
    qty: 3,
    rate: 50,
    amount: 150,
    costPrice: 40,
    isMisc: false,
  },
];

function Items() {
  const [items, setItems] = useState(DUMMY);

  return (
    <div className="card">
      <div className="card-header">Items</div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Cost Price</th>
              <th>Is Misc</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>
                       {item.description}
                    </td>
                    <td>
                       {item.qty} 
                    </td>
                    <td>
                        {item.rate}
                    </td>
                    <td>{item.qty * item.rate}</td>
                    <td>
                      {item.costPrice} 
                    </td>
                    <td>
                       {item.isMisc}
                    </td>
                    <td>
                        <button onClick={() => setItems((prevItems) =>prevItems.filter((i) => i.id !== item.id))} >Delete</button>
                    </td>
                </tr>
            ))}
            <tr>
                <td>
                <select>
                    <option value="" disabled selected>
                    Select Item
                    </option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                </select>
                </td>
                <td>
                <textarea rows="2" cols="35" placeholder="Enter description"></textarea>
                </td>
                <td>
                <input type="number" placeholder="Qty" />
                </td>
                <td>
                <input type="number" placeholder="Rate" />
                </td>
                <td>0</td>
                <td>
                <input type="number" placeholder="Cost Price" />
                </td>
                <td></td>
                <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Items;
