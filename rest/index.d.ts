import { APIPartialGuild } from "discord-api-types/v10";
import { QueueData, Track } from "../types/queue";
import { PlayerData } from "../types/player";
import { Schema$SearchListResponse, Schema$SearchResult } from "../external/google/youtube/v3";

interface BaseRequest {
    id: string;
}

interface BaseResponse {
    id: string;
}

declare module "musix-api-types/rest" {
    // GET player
    type PlayerResponse = BaseResponse & PlayerData;
    // POST player/play
    type PlayerPlayRequest = {
        track: Track;
    };
    // POST player/seek
    type PlayerSeekRequest = {
        time: number;
    };
    // POST player/skip
    type PlayerSkipRequest = {
        index?: number;
    };
    // PUT player/filter
    type PlayerFilterRequest = {
        filter: string;
        value: boolean | number;
    };
    // GET player/channel
    type PlayerChannelResponse = BaseResponse & {};
    // GET queue
    type QueueResponse = BaseResponse & QueueData;
    // PUT queue
    type QueuePutRequest = {
        track: Track;
    };
    // PATCH queue
    type QueuePatchRequest = {
        index1: number;
        index2?: number;
    };

    // DELETE queue
    type QueueDeleteRequest = {
        start: number;
        end: number;
    };
    //POST queue/repeat
    type QueueRepeatRequest = {
        single?: boolean;
    };
    // GET guilds
    type GuildsResponse = {
        guilds: APIPartialGuild[];
    };
    // GET search
    type SearchResponse = Schema$SearchListResponse;
    type SearchRequestItem = Schema$SearchResult;
}
