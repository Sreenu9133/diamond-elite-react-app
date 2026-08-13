// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");
//     req.user = decoded; // Decoded token payload containing user id
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid or expired token." });
//   }
// };

// module.exports = authMiddleware;

// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         // Check Authorization header
//         if (!authHeader) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Authorization token is required"
//             });
//         }

//         // Expected:
//         // Authorization: Bearer TOKEN

//         const token = authHeader.split(" ")[1];

//         if (!token) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Token is missing"
//             });
//         }

//         // Verify token
//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET
//         );

//         // Store user ID for next route
//         req.userId = decoded.id;

//         next();

//     } catch (error) {

//         return res.status(401).json({
//             success: false,
//             message: "Invalid or expired token"
//         });

//     }
// };

// export default authMiddleware;


import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header missing"
        });
    }

    const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token missing"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("DECODED TOKEN:", decoded);

        req.userId = decoded.id;

        next();

    } catch (error) {

        console.log("JWT ERROR:", error.message);

        return res.status(401).json({
            success: false,
            message: error.message
        });
    }
};

export default authMiddleware;