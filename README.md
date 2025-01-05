# Atalay Özmen's Resume Website

A personal resume website integrated with a visitor counter, showcasing the use of AWS services.

## Development Steps

1. **Initial Setup**
   - Created `index.html` with the basic structure of the resume.
   - Styled the website using `style.css` to achieve a clean and modern layout.

2. **Visitor Counter Integration**
   - Added a visitor counter section in `index.html` to display the number of visits.
   - Implemented the counter functionality using `script.js`, which increases and retrieves the visitor count using an AWS Lambda function.

3. **AWS Services Configuration**
   - **DynamoDB**: Set up a DynamoDB table to store and manage the visitor count.
   - **AWS Lambda**: Set up a Lambda function to handle incrementing and retrieving the visitor count from DynamoDB.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **AWS Services**:
  - **Amazon DynamoDB**: NoSQL database for storing visitor counts.
  - **AWS Lambda**: Serverless functions to handle visitor counting logic.
  - **Amazon S3 & CloudFront**: Hosting and content delivery for the website.

