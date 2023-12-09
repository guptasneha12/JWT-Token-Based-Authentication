// 2. VERIFY TOKEN
const jwt=require('jsonwebtoken');
const verifyToken = token => {
    return jwt.verify(token, "anykey", (err, decoded) => {
        // console.log(decoded);
        if (err) {
           return false;
        }
        // return the decoded
        return decoded;
     

    });
 
};

module.exports=verifyToken;