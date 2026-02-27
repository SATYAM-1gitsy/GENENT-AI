# GENENT AI System Architecture

## High-Level Flow

1. User submits idea via frontend.
2. API Gateway receives request.
3. Lambda validates input and builds structured prompt.
4. Bedrock invokes Anthropic Claude 3 Haiku.
5. Response parsed and validated against JSON schema.
6. Draft optionally stored in DynamoDB.
7. Structured response returned to user.

## Reliability Layer

- JSON parsing validation
- Schema enforcement
- Demo fallback mode
- Rate limiting (planned)
