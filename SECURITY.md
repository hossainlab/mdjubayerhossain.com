# Security Configuration

## Environment Variables

This project uses environment variables to securely manage API keys and sensitive configuration.

### Local Development Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Fill in your API keys in the `.env` file:
   ```bash
   VITE_YOUTUBE_API_KEY=your_actual_api_key_here
   ```

### Production Deployment (Netlify)

For Netlify deployment, set environment variables in your Netlify dashboard:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variable:
   - **Key**: `VITE_YOUTUBE_API_KEY`
   - **Value**: Your YouTube Data API key

### YouTube API Key Setup

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select existing one
3. Enable the YouTube Data API v3
4. Create credentials (API Key)
5. Restrict the API key to YouTube Data API v3 for security
6. Optionally restrict by referrer (your domain)

### Security Best Practices

- Never commit `.env` files to version control
- Use different API keys for development and production
- Regularly rotate your API keys
- Restrict API keys to specific services and domains
- Monitor API key usage in Google Cloud Console

### Files to Never Commit

The following files are automatically ignored by Git:
- `.env`
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`