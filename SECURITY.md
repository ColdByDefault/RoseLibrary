# Security Policy

## Supported Versions

This project is a client-side-only implementation hosted on GitHub Pages, which may expose sensitive information like API keys. Security patches and updates are applied as needed. Below is the list of supported versions:

| Version | Supported          |
| ------- | ------------------ |
| < 3.0.0   | :x:                |
| > 3.1.1   | ✅              |

## Known Vulnerability: Firebase API Key Exposure
**Although, Firebase was removed, this Note was kept as a reminder**
### Description

This website is a client-side implementation that relies on Firebase for backend services and is hosted on GitHub Pages. Due to the absence of server-side backend scripts, sensitive credentials, including API keys, are embedded in the frontend JavaScript code. While the API key is restricted to specific domains and APIs, it is still visible to anyone inspecting the application's source files or network requests.

### Risk

The exposed API key can potentially be exploited by attackers to:
- Perform unauthorized operations on Firebase project within the scope of allowed APIs.
- Exhaust usage quotas or incur additional costs if APIs are misused.

### Current Mitigation

1. The API key is restricted to the specific domains
2. The API key is restricted to essential Firebase APIs only, including:
   - Firebase Authentication API
   - Cloud Firestore API
   - Firebase Hosting API
   - Other necessary Firebase APIs.

## Reporting a Vulnerability

If you discover a security vulnerability or a better solution to secure the project:
1. **Contact us**: Submit an issue or pull request on the GitHub repository.
2. **Response Time**: Expect an acknowledgment within 2 business days. Updates will be shared regularly until resolution.

### Notes:
- See Version 3.1.1.

