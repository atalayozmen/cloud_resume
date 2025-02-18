# Atalay Özmen's Resume Website

A personal resume website integrated with a visitor counter, showcasing the use of AWS services.

## Development Steps

1. **Initial Setup**
   - Created `index.html` with the basic structure of the resume.
   - Styled the website using `style.css` to achieve a clean and and simple layout.

2. **Visitor Counter Integration**
   - Added a visitor counter section in `index.html` to display the number of visits.
   - Implemented the counter functionality using `script.js`, which increases and retrieves the visitor count by sending a request to my API Gateway resource.

3. **AWS Services Configuration**
   - **S3**: I initially started with a setup where I simply uploaded my HTML and CSS files in an public S3 bucket, and enabled static website hosting. This enabled simple access to my website, although with an ugly bucket name as the URL, and access only with HTTP since I haven't had my SSL certificate at this point.
   - **ACM and CloudFront**: In order to get an SSL certificate for my website, I used ACM. After that, I created an CloudFront distribution where I set my S3 bucket as the origin. I could also add my newly created certificate that provides encryption for exchanged network packets using SSL. Other than easy integration of SSL certificates, the main benefit of CloudFront is content distribution, which helps provide content faster all over the world. 
   - **Route 53**: Used Route 53 for my DNS needs, where I linked my domain name to my website. I set an Alias record that links the domain name to an AWS service, which was my CloudFront distribution in this case. Before the CloudFront setup, I linked it to my S3 bucket instead.
   - **DynamoDB**: Set up a DynamoDB table to store and manage the visitor count. The table has only one row of entry where the count is held.
   - **AWS Lambda**: Set up a Lambda function to handle incrementing and retrieving the visitor count from DynamoDB.
   - **API Gateway**: Set up an API Gateway as the entry point of our backend that calls our Lambda function. The reason I am not using API Gateway directly(with the Function URL feature) is because API Gateway is also helpful for setting up rate limiting, which is important to prevent unwanted AWS bills.

5. **CI/CD**
   - Each time I change my resume and push my changes to GitHub, I wanted the changes to automatically reflect on my website. Updated files should be uploaded to S3, and CloudFront distribution should be invalidated.
   - Since I need to give GitHub Actions the permission to upload files into my S3 bucket and invalidate my CloudFront distribution, I had to create a new IAM user that has these permissions. It needs programmatic access, so it uses an access key as the credential type. I chose not to use the access keys from my administrator account, so that if the credentials were somehow stolen, the access that the attackers got would be minimal.
   - To my new IAM user, I attached my own custom created policy that enables updating, deleting and listing the objects for my bucket, and also another policy that allows creating invalidations on my CloudFront distribution.
   - The access key id, secret access key, and other values such as bucket name, CloudFront distribution id etc. were then added to the GitHub repo as secret environment variables to be used in the GitHub Action workflow.
   - A workflow file named upload_to_s3.yml was created that consisted of two jobs for uploading to S3 and cache invalidation were added, which successfully updates the website upon change in the repository.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **AWS Services**:
  - **Amazon S3 & CloudFront**: Hosting and content delivery for the website.
  - **ACM: AWS Certificate Manager**: Service for obtaining an SSL certificate.
  - **API Gateway**: Service that acts as an entry point for my backend while also providing additional security features.
  - **Amazon DynamoDB**: Fast NoSQL Key-value database for storing visitor counts.
  - **AWS Lambda**: Serverless function to handle visitor counting logic.


