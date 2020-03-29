'use strict';

module.exports.hello = async event => {
  console.log(event.pathParameters.name)
  const reply = `Hello there... ${event.pathParameters.name}`;
  // const {first, second} = event;
  // const added = first + second;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: reply,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.cron = async event =>{
  const now = new Date();
  const message = `Time is ${now}`;
  console.log(message);
  return {
    body: JSON.stringify({
      message: message,
    })
  }
}