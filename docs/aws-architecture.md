# GENENT AI – AWS Architecture Plan

## Core AWS Services

Frontend Hosting:
- AWS Amplify OR Amazon S3 + CloudFront

API Layer:
- Amazon API Gateway
- AWS Lambda (Serverless backend)

AI Layer:
- Amazon Bedrock
  - Model: Anthropic Claude 3 Haiku

Data Storage:
- Amazon DynamoDB (draft version tracking)

Security:
- AWS IAM (role-based access control)
- AWS Secrets Manager (API credential management)

Monitoring:
- Amazon CloudWatch (logs & metrics)

---

## Data Flow

User → CloudFront → API Gateway → Lambda → Bedrock → JSON Validation → DynamoDB → Response
