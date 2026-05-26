# Type-Safe In-Memory Key-Value Store

A lightweight, strictly typed, in-memory caching mechanism for Node.js. Built completely from scratch in TypeScript, this project demonstrates advanced generic typing and asynchronous memory management without relying on external dependencies like Redis.

## Core Concepts Demonstrated

This project bridges the gap between Go's concurrency model and Node.js's single-threaded Event Loop, specifically focusing on memory safety and data expiration.

Key TypeScript and Node.js mechanics utilized:
* **Generics (`<K, V>`):** Ensuring complete compile-time type safety for both cache keys and values, eliminating the need for `any` or type assertions.
* **Lazy Expiration:** Managing Time-To-Live (TTL) asynchronously by evaluating expiration timestamps upon retrieval, avoiding the need for background polling threads.
* **Strict Null Checks:** Handling the distinct differences between `undefined` (missing data) and `null` (items that live forever).
* **ECMAScript Modules (ESM):** Fully configured for modern Node.js module resolution.

## Features

* **Generic Type Enforcement:** The cache strictly adheres to the types instantiated at runtime (e.g., `Cache<string, number>`).
* **Time-To-Live (TTL):** Items can be stored permanently or with a specific millisecond expiration.
* **Memory Safe:** Automatically purges expired items upon access to prevent stale data retrieval.
* **Thread-Safe by Design:** Leverages Node.js's single-threaded architecture, requiring no mutexes or locking mechanisms for concurrent access.

