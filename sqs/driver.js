const { Consumer } = require('sqs-consumer');
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/804075518076/firtQ',
  handleMessage: async (msg) => {
    // do some work with `message`
    let parsedBody = JSON.parse(msg.Body);
    let myOrder = JSON.parse(parsedBody.Message);
    console.log("text is =", myOrder.orderItem);
    console.log("store is =", myOrder.storeName);
  }
});
 

app.on('error', (err) => {
  console.error(err.message);
});
 
app.on('processing_error', (err) => {
  console.error(err.message);
});
 
app.start();
