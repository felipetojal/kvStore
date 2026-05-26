
export class Cache<K, V> {
    // Defining the internal structure of the cache.   
    private store: Map<K, { value: V; expiry: number | null}>;

    // Constructor only needs to create a new map.
    constructor() {
        this.store = new Map();
    }

    /**
     * add() adds an item to the map structure
     * @param key 
     * @param value 
     * @param ttlms The "Time To Live" of the data expressed in miliseconds.
     */
    public add(key: K, value: V, ttlms?: number): void {
        // Check if ttl is undefined. If not, we add ttlms to 
        // the current time.
        const ttl = ttlms ? Date.now() + ttlms : null;
        
        // Declaration of the "value" to be stored in the map.
        const val = {
            value: value,
            expiry: ttl
        };
        
        // Storing the value in the map.
        this.store.set(key, val);
    }

    /**
     * delete() takes in the key and deletes the value associated to it in the map.
     * @param key The key to be deleted.
     * @returns Boolean indicating if the operation was successful.
     */
    public delete(key: K): boolean {
        if (this.store.has(key)) {
            return this.store.delete(key);
        }

        return false
    }

    /**
     * get() takes in the key and returns the value associated to it.
     * @param key The key of the value to be retrieved
     * @returns If found, returns the value. Otherwise, returns undefined.
     */
    public get(key: K): V | undefined {
        let val = this.store.get(key);
        if (val == undefined) {
            return undefined;
        }

        // Checking to see if the value still valid.
        if (val.expiry !== null && val.expiry < Date.now()) {
            // Deleting the value from the store.
            this.store.delete(key);
            return undefined;
        }

        return val.value;
    }
}