// Configuration that uses environment variables in production (GitHub Actions)
// and falls back to privateInfo.json for local development

let privateInfo = {};

try {
  // Try to import privateInfo.json for local development
  privateInfo = require('./privateInfo.json');
} catch (e) {
  // File doesn't exist (e.g., in CI/CD), use empty object
  privateInfo = {};
}

const config = {
  high_score_api_endpoint: process.env.REACT_APP_HIGH_SCORE_API_ENDPOINT || privateInfo.high_score_api_endpoint,
  high_score_api_key: process.env.REACT_APP_HIGH_SCORE_API_KEY || privateInfo.high_score_api_key,
  like_api_endpoint: process.env.REACT_APP_LIKE_API_ENDPOINT || privateInfo.like_api_endpoint,
  like_api_key: process.env.REACT_APP_LIKE_API_KEY || privateInfo.like_api_key,
  form_endpoint: process.env.REACT_APP_FORM_ENDPOINT || privateInfo.form_endpoint,
  captcha_sitekey: process.env.REACT_APP_CAPTCHA_SITEKEY || privateInfo.captcha_sitekey
};

export default config;
