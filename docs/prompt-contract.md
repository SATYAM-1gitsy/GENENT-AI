# AI Prompt Contract

The model is instructed to return ONLY valid JSON.

Schema:

{
  "instagram": {
    "slides": ["string"],
    "caption": "string",
    "hashtags": ["string"]
  },
  "linkedin": {
    "hook": "string",
    "body": "string",
    "cta": "string"
  },
  "twitter": {
    "tweets": ["string"]
  }
}

The backend validates structure and applies fallback logic if parsing fails.
