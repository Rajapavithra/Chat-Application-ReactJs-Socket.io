Chat-App-ReactJs-Socket.IO
Not a chat bot. A chat application using React js, HTML, CSS, Socket.IO.

Description: 
  A basic chat application developed based on the well-standing e-commerce industry.Whenever a order is placed, the details has to be broadcasted to all the clients in the same channel. Also allows you to interact with other users in the same channel.
  
Limitations of the Project:
  1)Routes are NOT protected. DO NOT TRY TO LOAD PAGES DIRECTLY THROUGH URL(it wil cause eror). 
  2)Only ONE Channel is implemented as of now and only users of same channel can interact with each other.
  3)Duplication of user is not handled. 4)Chat window is provided with basic options(no-emoji, no-attachment).
  
Pages:
  1)Join Page.
  2)Cart Details Page.
  3)Chat Window.
  
Join Page:
  Page that accepts joining user details such as userName and channelName in which you want to join.
Cart Details Page: 
  Page to display the details of the items in your cart includes product Name, seller, price, color, type, expected Delivery date and delivery fee. Also a page that    accepts the customer details to and let you to place your order.
Chat Window: 
    A chat window to interact with other users joined in the same channel(room) as yours. It also broadcast the placed order details to all the users of the channel.
    
How to Run the Project:

  1)Open a terminal -> Navigate to client folder -> use 'npm start' to start the client.
  2)Open another termila -> Navigate to server folder -> use 'npm start' to start the server. 
  3)Open the browser and run 'localhost:3000'(respective port) in address bar to open the webpage. 4)To work with multiple clients open the url in multiple        browsers.
  
Procedure to explore the project:

  1)Join with userName(anyName) and the channel(chat-room name) name.
  2)On joining you will be redirected to the cart details page. 
  3)Upon joining and navigation to cart page you will get a "welcome" message from admin in chat. 
  4)Click on the chat icon to send and receive messages from other clients. 
  5)In cart details page, Enter the Mandatory fields and click Submit customer details. 
  6)Upon submitting customer Details, order Summary details will get open. 
  7)You shall submit the order. 8)The goods ordered will be broadcasted to all the cients in the same channel.

