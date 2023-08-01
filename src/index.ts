import "dotenv/config";
import { createJWTToken, getJWTData } from "./utils";

(() => {
    const token = createJWTToken({ name: "Fernando" });
    const data = getJWTData<{ name: string }>(token);
    console.log(data);
})();