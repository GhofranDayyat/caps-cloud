// you should re-change your creadintioal each session
const AWS = require('aws-sdk');
const uuid = require('uuid').v4;
const faker = require('faker');

AWS.config.update({region:'us-east-1'}); // from V.virginia

const sns = new AWS.SNS(); 

const topicArn = 'arn:aws:sns:us-east-1:804075518076:firstT';
const msg = { 
  orderId: uuid(),
  customer: faker.name.findName(), 
  vendorId: 'arn:aws:sns:us-east-1:804075518076:firstT'
}

const payload = {
  Message: JSON.stringify(msg),
  TopicArn: topicArn,
};

sns.publish(payload).promise()
    .then(data => {
      console.log('Order sent to driver ------> \n', data);
    })
    .catch(console.error);



// const AWS = require('aws-sdk');
// const uuid = require('uuid').v4;
// const faker = require('faker')

// AWS.config.update({region:'us-east-1'});

// const sns = new AWS.SNS();

// const topic = 'arn:aws:sns:us-east-1:804075518076:firstT';

// setInterval(() => {
//   const message = {
//     orderId: uuid(),
//     customer: faker.name.findName(),
//     vendorId: 'arn:aws:sns:us-east-1:804075518076:firstT'
//   }

//   const payload = {
//     Message: JSON.stringify(message),
//     TopicArn: topic,
//   };

//   sns.publish(payload).promise()
//     .then(data => {
//       console.log('Order sent to driver ------> \n', data);
//     })
//     .catch(console.error);
// }, 5000);

///////////////////////////////////////////////

// // receive delivery acknowledgement
// const { Consumer } = require('sqs-consumer');

// const app = Consumer.create({
//   queueUrl: 'https://sqs.us-east-1.amazonaws.com/804075518076/firtQ',
//   handleMessage: handler,
// });

// function handler(message) {
//   console.log(message.Body);
// }

// app.on('error', (err) => {
//   console.error(err.message);
// });

// app.on('processing_error', (err) => {
//   console.error(err.message);
// });

// app.start();