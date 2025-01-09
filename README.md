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
   - **S3**: Initially I started with a setup where I simply uploaded my HTML and CSS files in an public S3 bucket, and enabled static website hosting. 
   - **Route 53**: I used Route 53 for my DNS needs, where I linked my domain name to my website. I set an Alias record that links the domain name to an AWS service, which was the my distribution in this case.
   - **DynamoDB**: Set up a DynamoDB table to store and manage the visitor count.
   - **AWS Lambda**: Set up a Lambda function to handle incrementing and retrieving the visitor count from DynamoDB.
   - **API Gateway**: Set up an API Gateway as the entry point of our backend that calls our Lambda function. APIGW is also helpful for setting rate limiting in order to prevent unwanted amount of requests.

4. **CI/CD**
   - Each time I change my resume and push my changes to GitHub, I want the changes to automatically reflect on my website. Updated files should be uploaded to S3, and CloudFront distribution should be invalidated.
   - For this, I used GitHub actions that uses my newly created IAM users access key.
   - Since I need to give GitHub actions the permission to upload files into my S3 bucket, I had to create a new IAM user for it. It needs programmatic access, so it uses Access Key as the credential type.
   - To my new IAM user, I attached my own custom created policy that enables updating, deleting and listing the objects for my bucket, and also another policy that allows creating invalidations on my CloudFront distributions.
   - The access key id, secret access key, and other values such as bucket name, CloudFront distribution id etc. were then added to the GitHub repo as secret environment variables to be used in the GitHub Action Workflow.
   - A workflow file named upload_to_s3.yml was created that consisted of two jobs for upload to S3 and cache invalidation were added, which successfully updates the website.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **AWS Services**:
  - **Amazon DynamoDB**: NoSQL database for storing visitor counts.
  - **AWS Lambda**: Serverless functions to handle visitor counting logic.
  - **Amazon S3 & CloudFront**: Hosting and content delivery for the website.

