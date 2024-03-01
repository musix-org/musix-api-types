import { RESTAPIPartialCurrentUserGuild } from "discord-api-types/v10";

export interface ClientData {
    fullyReady: boolean;
    ready: boolean;
    readyTimestamp: number | null;
    shard: number[] | null;
    uptime: number | null;
    guilds?: RESTAPIPartialCurrentUserGuild[];
}
