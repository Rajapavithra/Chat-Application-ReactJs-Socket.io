import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import Accordion from '../Accordion/Accordion';
import CustomerDetailForm from '../Form/CustomerDetailForm';


const CustomerDetails = (props)=>{
    let {isCusDtlsValid,acc={},toggleAccordion,onCustomerDetailsSubmit,handleInputChange,userDetails={}} = props;
    return(
    <Accordion title='1. Customer Details' isValid={isCusDtlsValid} id='CustDtls' isActive={acc.CustDtlsActive} onClick={toggleAccordion}>
        <CustomerDetailForm handleInputChange={handleInputChange} userDetails={userDetails} />
        <SubmitButton submitText={'Confirm Details'} onSubmitClick={onCustomerDetailsSubmit} />
    </Accordion>
)
}
export default CustomerDetails;

