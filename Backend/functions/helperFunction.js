const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

// helper function to encode email,password 

const generateToken = (email, password) => {
    return jwt.sign({ email, password }, process.env.JWT_SECRET)
}

// helper function to decode the jwt token
const decodeToken = (token) => {
    const verifiedData = jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return null
        } else {
            return decoded;
        }
    });

    return verifiedData;
};


// helper function to verify user password 
const checkPassword = (password, encodedValue) => {
    return bcrypt.compare(password, encodedValue)
}

// helper function to verify admin login & password 
const checkAdminPassword = (email, password) => {
    if (email === process.env.ADMIN_EMAIL
        && password === process.env.ADMIN_PASSWORD) {
        return true
    }
    else {
        return false
    }
}


// exporting 
module.exports = { generateToken, decodeToken, checkPassword, checkAdminPassword }
