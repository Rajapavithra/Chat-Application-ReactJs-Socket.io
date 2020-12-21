import react from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import Accordion from '../Accordion/Accordion';
import OrderDetails from '../OrderDetails/OrderDetails';


const OrderSummary = (props)=>{
    let {acc,
        toggleAccordion,
        onOrderSubmit,
        isOrderSummaryValid,
        productDetails
        } = props;
    return(
        <Accordion title='2. Order Summary' isValid={isOrderSummaryValid} id='OrderSummary' isActive={acc['OrderSummaryActive']} onClick={toggleAccordion}>
            <OrderDetails 
                 productDetails={productDetails}
            />
            <SubmitButton submitText={'Place Order'} onSubmitClick={onOrderSubmit} />
        </Accordion>
    )
}

export default OrderSummary;
