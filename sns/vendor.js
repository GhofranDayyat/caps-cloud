'use strict';

const AWS = require('aws-sdk');
// AWS.config.update({region: 'us-east-1'});
AWS.config.update({region: 'us-east-1'})
var sns = new AWS.SNS();

  
const topicArnt = 'arn:aws:sqs:us-east-1:804075518076:firtQ' 

const msg= JSON.stringify({ orderId: 1234, customer: "Jane Doe", vendorId: topicArnt});

const payload= {
    Message: msg,
    TopicArn:topicArnt
}

sns.publish({
    Message: msg,
    TopicArn:topicArnt
}).promise()
  .then(data => {
      console.log('333333333333');
    console.log('helo',data);
  }).catch(error=>{
      console.log(error.Message);
  });
;
// var returnValue = sns.publish({
//     Message: msg,
//     TopicArn:topicArnt
// })
// returnValue.on('complete', function() {
//     console.log(returnValue.params);
//   }).send();

    // console.log(returnValue.params);