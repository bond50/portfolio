const { doubleCsrf } = require('csrf-csrf');

const csrf = doubleCsrf({
    getSecret: () => process.env.CSRF_SECRET,
    getTokenFromRequest: req => req.body.csrfToken,
    cookieName: process.env.NODE_ENV === 'production' ? '__Host-prod.x-csrf-token' : '_csrf',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' // Enable for HTTPS in production
    }
});


export const doubleCsrfProtection = csrf.doubleCsrfProtection;
export const generateToken = csrf.generateToken;