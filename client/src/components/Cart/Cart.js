import React  from 'react';
import ChatPopup from '../ChatPopup/ChatPopup';
import './Cart.css';


import CustomerDetails from '../CustomerDetails/CustomerDetails';
import OrderSummary from '../OrderSummary/OrderSummary';

export default class Cart extends React.Component{
constructor(props){
    super(props);
    this.state={
        agentDetails:{},
        acc:{
            'CustDtlsActive':true,
            'OrderSummaryActive':false
         },
         userDetails:{
             Name:'',
             ContactNumber:'',
             Address:''
         },
         errorMessage:'',
         infoMessage:'',
         isCusDtlsValid:false,
         isChatOpen:true,
         productDetails:[{
             productName:'boAt Rockerz 235v2 Bluetooth Headset',
             seller:'CORSECA',
             price:'1100',
             color:'Black',
             type:'In the Ear',
             DeliveryDate:'Sun Dec 26',
             DeliveryCharge:'45',
             productImage:'BoatInTheEar'
         },{
            productName:'boAt Airdopes 131 Bluetooth Headset',
            seller:'RP Group',
            price:'1300',
            color:'Blue',
            type:'True Wireless',
            DeliveryDate:'Tue Dec 29',
            DeliveryCharge:'55',
            productImage:'BoatAriDopes'
        }]
    }
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onCustomerDetailsSubmit = this.onCustomerDetailsSubmit.bind(this);
    this.isNotEmptyValidation = this.isNotEmptyValidation.bind(this);
    this.onOrderSubmit= this.onOrderSubmit.bind(this);
    this.handleChatClose = this.handleChatClose.bind(this);
}
componentDidMount()
{   
    let {agent} = this.props.location.state;
    this.setState({agentDetails : agent})
      
}
componentDidUpdate(prevProps,prevState){
    let {agent} = this.props.location.state;
    if(prevProps.location.state.agent != agent && (prevState.agent != agent)){
        this.setState({agentDetails : agent})
    }

}
handleInputChange(e){
    let id = e.target.id;
    let userData = Object.assign({},this.state.userDetails);
    userData[id] = e.target.value;
    this.setState({userDetails:userData})
}
isNotEmptyValidation(dataObj){
    var errMsg = '';
    let dataObjKeys = Object.keys(dataObj);
   for(let i=0;i<dataObjKeys.length;i++){
       let key = dataObjKeys[i];
        if(dataObj[key] == '' || dataObj[key] == undefined){
            errMsg = `Mandatory fields cannot be empty`;
            this.setState({errorMessage : errMsg,infoMessage:''});
           return false;
        }else{
            if(dataObj.ContactNumber.length != 10 ) {
                errMsg ='Enter Valid Contact Number';
                this.setState({errorMessage:errMsg,infoMessage:''});
                return false;
            }
        }
     }
    this.setState({errorMessage:'',infoMessage:''})
    return true;
}
 toggleAccordion(e){
    let id = `${e.target.id}Active`;
    let res = Object.assign({},this.state.acc);
    Object.keys(res).map(key=>{
        res[key] = key == id ? true : false;
    })
    this.setState({ acc : res});
}
onCustomerDetailsSubmit(){
    let {userDetails} = this.state;
    let acc = Object.assign({},this.state.acc);
    let isValidData = this.isNotEmptyValidation(userDetails);
    if(isValidData){
        acc['OrderSummaryActive'] = true;
        acc['CustDtlsActive'] = false;
    }
     this.setState({acc,isCusDtlsValid:isValidData});
}
onOrderSubmit (){
    let {isCusDtlsValid,acc,agentDetails,userDetails,productDetails} = this.state;
        if(!isCusDtlsValid){
            this.setState({errorMessage:'Mandatory fields cannot be empty',infoMessage:''})
        }else{
            let amountToBePaid = Number(productDetails[0].price) + Number(productDetails[0].DeliveryCharge)
            let orderMessage = `Agent ${agentDetails.name} Placed the following order:
                                Prdouct: ${productDetails[0].productName},
                                Expected Delivery on/before: ${productDetails[0].DeliveryDate},
                                Amount to be paid: ${amountToBePaid}.
                                Contact Details: ${userDetails.Name}, ${userDetails.ContactNumber},
                                ${userDetails.Address}.`;
            acc['OrderSummaryActive']=false
            this.setState({infoMessage:'Order Placed Successfully',isOrderSummaryValid:true,acc})
            this.refs.chatPopup.sendMessage(orderMessage);
         }
} 
handleChatClose(){
    this.setState({isChatOpen:false})
}
render(){
        let {acc,errorMessage,isCusDtlsValid,userDetails,isOrderSummaryValid,productDetails,infoMessage,isChatOpen,agentDetails} = this.state;
    return(
    <div className='cartOuterContainer'>
         <div className='header bold'>
                    <h1>One Stop Solutions</h1>
                </div>
            <div className='cartInnerContainer'>
                <h1 className='pageTitle'>CART DETAILS</h1>

                {errorMessage !='' ? (<h3 className='errorMessage'>{errorMessage}</h3>) :
                infoMessage != '' ?(<h3 className='successMessage'>{infoMessage}</h3>) :null }

                <CustomerDetails 
                        isCusDtlsValid={isCusDtlsValid}
                        acc={acc}
                        toggleAccordion={this.toggleAccordion}
                        onCustomerDetailsSubmit={this.onCustomerDetailsSubmit}
                        handleInputChange={this.handleInputChange}
                        userDetails ={userDetails}
                        />
                <OrderSummary 
                    acc={acc}
                    toggleAccordion={this.toggleAccordion}
                    onOrderSubmit={this.onOrderSubmit}
                    isOrderSummaryValid={isOrderSummaryValid}
                    productDetails={productDetails}
                />
                {isChatOpen &&
                     <ChatPopup 
                     ref={'chatPopup'}
                     agent={agentDetails}
                     handleClose={this.handleChatClose}/> 
                }
            </div>
       </div> 
       
        )
    }
}
