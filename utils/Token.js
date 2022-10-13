import { JsonWebTokenError } from "jsonwebtoken";

const GenerateToken = (user) => {
    //creating accessToken
    const accessToken = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET || "",
        {
            expiresIn: "2h"
        }
    );

    //creating refresh token
    const refreshToken = jwt.sign(
        {id: user._id},
        process.env.JWT_REFRESH_SECRET || "",
        {
            expiresIn: "4h"
        }
    );
    return {accessToken, refreshToken}
}

export default GenerateToken