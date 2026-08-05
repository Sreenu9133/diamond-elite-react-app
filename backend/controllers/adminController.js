import db from "../config/db.js";

export const getAllUsers = (req, res) => {

    const sql = `
        SELECT
            id,
            name,
            phone_number,
            email,
            role,
            status,
            created_at
        FROM users
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            totalUsers: result.length,
            users: result
        });

    });

};