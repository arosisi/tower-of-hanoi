// Configuration that uses environment variables
// For local development: values come from .env.local
// For GitHub Actions: values come from repository secrets

const config = {
  high_score_api_endpoint: process.env.REACT_APP_HIGH_SCORE_API_ENDPOINT || '',
  high_score_api_key: process.env.REACT_APP_HIGH_SCORE_API_KEY || '',
  like_api_endpoint: process.env.REACT_APP_LIKE_API_ENDPOINT || '',
  like_api_key: process.env.REACT_APP_LIKE_API_KEY || '',
  form_endpoint: process.env.REACT_APP_FORM_ENDPOINT || '',
  captcha_sitekey: process.env.REACT_APP_CAPTCHA_SITEKEY || ''
};

export default config;
