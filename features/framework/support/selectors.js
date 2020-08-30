// These are ways of being able to identify HTML elements to interact with and check.
const selectors = {
    links: {
        Signup: "a[href=\"/signup\"]",
        Login: "a[href=\"/login\"]",
        Logout: "a.logout",
        "I have forgotten my password": "a[href=\"/forgot-password\"]",
        "Your account": "a[href=\"/account\"]",
        "Find out more": ".description [href=\"/services\"]"
    }
};

module.exports = selectors;
