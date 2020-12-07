import jwt from "react-native-pure-jwt";
import { config } from "../helper/config";

export async function generateToken() {
    let jwtToken = await jwt.sign({
        iss: config.apiKey,
        exp: new Date().getTime() + 10000 * 90, // expire in 90 min
    },
        config.apiSecret,
        {
            alg: "HS256"
        })
    return jwtToken;
}