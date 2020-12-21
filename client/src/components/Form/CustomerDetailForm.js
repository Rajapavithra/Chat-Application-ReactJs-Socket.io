import React from 'react';
import Asterisk from '../Asterisk/Asterisk';
import './CustomerDetailForm.css';

const CustomerDetailForm = (props)=>{
    let {handleInputChange,userDetails} = props;
    return (
    <table className='table'>
            <tbody> 
             <tr>
                <td><label>Customer Name</label><Asterisk /></td>
                <td>:</td>
                <td><input id='Name' onChange={handleInputChange} value={userDetails.Name} className='dtlsInput' type='text'/></td>
            </tr>
            <tr>
                <td><label>Mobile Number</label><Asterisk /></td>
                <td>:</td>
                <td><input id='ContactNumber' onChange={handleInputChange} value={userDetails.ContactNumber}  className='dtlsInput' type='number'/></td>
            </tr>
            <tr>
                <td><label>Delivery Address</label><Asterisk /></td>
                <td>:</td>
                <td><textarea id='Address' onChange={handleInputChange} value={userDetails.Address} className='dtlsInput textArea' type=''/></td>
            </tr>
            </tbody>
        </table>
    )
}

export default CustomerDetailForm;