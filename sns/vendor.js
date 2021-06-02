// 'use strict';

// const AWS = require('aws-sdk');
// // AWS.config.update({region: 'us-east-1'});
// AWS.config.update({region: 'us-east-2'})
// var sns = new AWS.SNS();
// // 
  
// const topicArnt = 'arn:aws:sns:us-east-1:804075518076:pickup' 

// const msg= JSON.stringify({ orderId: 1234, customer: "Jane Doe", vendorId: topicArnt});

// const payload= {
//     Message: msg,
//     TopicArn:topicArnt
// }

// sns.publish(payload).promise()
//   .then(data => {
//     console.log(data);
//   }).catch(console.error);
// ;


const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-1'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-1:335083857671:alert';
console.log(process.argv[2]);
const payload = {
  Message: 'Hello from John',
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
;