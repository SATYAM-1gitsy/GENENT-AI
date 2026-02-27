# GENENT AI

## AWS GenAI Integration

GENENT AI is designed as a serverless architecture on AWS.

The system will invoke Anthropic Claude 3 Haiku via Amazon Bedrock to generate structured platform-native content. The backend will run on AWS Lambda behind Amazon API Gateway, with optional draft persistence in Amazon DynamoDB.

This architecture ensures scalability, cost-efficiency, and secure AI integration.Structured AI translation engine that converts a single user idea into platform-native content for Instagram, LinkedIn, and Twitter/X.

## 🚀 Overview

GENENT AI eliminates repetitive rewriting across platforms by generating structured, platform-aware drafts in a single request.

One idea → Multi-platform structured outputs → Controlled refinement loop.

---

## 🏗 Architecture

Frontend:
- Next.js (React)
- AWS Amplify / S3 + CloudFront

API Layer:
- AWS API Gateway
- AWS Lambda (Serverless)

AI Layer:
- Amazon Bedrock
- Anthropic Claude 3 Haiku

Storage:
- Amazon DynamoDB (Draft version tracking)
- Amazon ElastiCache (Session management)

Security:
- AWS IAM (Role-based access)
- AWS Secrets Manager (Credential storage)
- Amazon CloudWatch (Logging & monitoring)

---

## 🔄 Data Flow

User → CloudFront → API Gateway → Lambda → Bedrock → JSON Validation → DynamoDB → Response

---

## 🧠 AI Contract

The system enforces deterministic JSON schema validation to ensure:

- Instagram: Slides + Caption + Hashtags
- LinkedIn: Hook + Body + CTA
- Twitter/X: Thread format (<= 280 chars per tweet)

Fallback demo mode is enabled to ensure system reliability in case of AI failure.

---

## 📌 First Milestone

Deploy serverless backend invoking Anthropic Claude 3 Haiku via Amazon Bedrock to generate structured platform-native content with schema validation and fallback logic.

---

## 📈 Future Scope

- OAuth-based direct publishing
- Image generation for Instagram carousels
- Analytics & engagement insights
- Team collaboration
