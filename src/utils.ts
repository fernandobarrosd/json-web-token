/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import "dotenv/config";
import { sign, verify } from "jsonwebtoken";



export function createJWTToken(payload: any) {
    const { PRIVATE_KEY } = process.env;
    const token = sign(payload, PRIVATE_KEY);

    return token;
}


export function getJWTData<T>(token: string) {
    const { PRIVATE_KEY } = process.env;
    const data = verify(token, PRIVATE_KEY) as T;
    return data;
}