import { Cache } from "./cache.js";

function main() {
    const sessionCache = new Cache<string, number>();
    sessionCache.add("charles", 32, 890);
    sessionCache.add("mark", 23, 9000);
    console.log("Session cache:", sessionCache);

    sessionCache.delete("charles")
    console.log("Session cache:", sessionCache);

    console.log(`${sessionCache.get("mark")?.toString()}`);
}

main();