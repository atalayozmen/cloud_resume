// Purpose: To fetch the visitor count from the AWS Lambda function and display it on the website.

const counter = document.querySelector(".visitor-count-banner");
async function getVisitorCount() {
    const response = await fetch("https://uqgjrhe5kt4bogme4l26gna6iq0nheeq.lambda-url.eu-west-1.on.aws/");
    const data = await response.json();
    counter.innerHTML = 'You are visitor number ' + data + '! \n This counter is powered by DynamoDB and AWS Lambda.';
}
getVisitorCount();