import React, { useState } from "react";
import "./Component/Style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
const InvoiceGenerator = () => {
  const [items, setItems] = useState([
    {
      itemName: "",
      rate: "",
      quantity: "",
      amount: "",
    },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        rate: "",
        quantity: "",
        amount: "",
      },
    ]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newItems = [...items];
    newItems[index][name] = value;

    if (name === "rate" || name === "quantity") {
      const rate = parseFloat(newItems[index]["rate"]);
      const quantity = parseInt(newItems[index]["quantity"]);
      newItems[index]["amount"] = isNaN(rate) || isNaN(quantity) ? "" : rate * quantity;
    }

    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const amount = parseFloat(item.amount);
      return isNaN(amount) ? total : total + amount;
    }, 0);
  };

  return (
    <>
    <h1 style={{color:'white'}}>Invoice Generator</h1>
    <div style={{background:'whitesmoke', height:'600px', width:'1100px', marginLeft:'0px'}}>
            <div style={{ backgroundColor: '#00008B', height: '40px', width: '100%', marginLeft: '0px' }}>
                {/* <h2 style={{ color: 'white', paddingRight: '00px' }}>Item Name<span style={{ paddingRight: '40px' }}>Quantity</span><span style={{ paddingLeft: '100px' }}>Rate</span><span style={{ paddingLeft: '140px' }}>Amount</span></h2> */}
                {/* <h1 style={{color:'white'}}><span style={{paddingRight:'600px'}}>Item Name</span>  <span style={{paddingRight:'600px'}}>Quantity</span>   <span style={{paddingRight:'200px'}}>Rate</span>  <span style={{paddingRight:'100px'}}>Amount</span></h1> */}
            </div>

     <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 row mt-4">
          <div className="border">
      <table className="table table-bordered table-striped">
        <thead>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
              <div class="field-group" style={{width:'200px', marginLeft:'40px'}} >
                <label for="name" class="input-label" style={{paddingLeft:'40px', bottom:'50px'}}>Item name</label>
                <input type="text" name="itemName" value={item.itemName} onChange={(e) => handleInputChange(index, e)} className="text-center align-middle form-control border-0 input-field" placeholder="Enter ItemName" autoComplete="off" />
              </div>
              </td>
              <td>
              <div class="field-group" style={{width:'200px', marginLeft:'40px'}}>
              <label for="name" class="input-label" style={{paddingLeft:'50px'}}>Quantity</label>
                <input
                  type="number"
                  name="rate"
                  value={item.rate}
                  onChange={(e) => handleInputChange(index, e)} className="text-center align-middle form-control border-0 input-field" placeholder="Enter Quantity"
                />
                </div>
              </td>
              <td>
              <div class="field-group" style={{width:'200px', marginLeft:'20px'}}>
              <label for="name" class="input-label" style={{paddingLeft:'70px'}}>Rate</label>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(index, e)} className="text-center align-middle form-control border-0 input-field" placeholder="Enter Rate"
                />
                </div>
              </td>
              <td>
              <div class="field-group" style={{width:'200px', marginLeft:'40px'}}>
              <label for="name" class="input-label" style={{paddingLeft:'40px'}}>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={item.amount}
                  readOnly className="form-control border-0 input-field" placeholder="Enter Amount"
                />
                </div>
              </td>

              <td>
              <div style={{width:'px', marginLeft:'40px', marginTop:'50px'}}>
               <button class='btn btn-primery' onClick={addItem} style={{color:'white', backgroundColor:'blue', width:'80px', height:'30px' }}>Add Line</button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={addItem}>Add Line</button> */}
      <div style={{marginLeft:'900px', paddingTop:'50px'}}>
        <strong>Total Amount:</strong> {calculateTotal()}
         
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </> 
  ) 
};

export default InvoiceGenerator;