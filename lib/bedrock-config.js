// AWS Bedrock Configuration (Planned)

export const bedrockConfig = {
  region: process.env.AWS_REGION || "us-east-1",
  modelId: "anthropic.claude-3-haiku-20240307-v1:0",
  maxTokens: 1500
};
