interface Shard {
    id: number;
    ready: boolean;
}

export interface ShardsData {
    shardList: string | number[];
    shards: Shard[];
    totalShards: number | "auto";
}
