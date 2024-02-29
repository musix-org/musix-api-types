import { APIPartialGuild } from "discord-api-types/v10";
import { QueueData, Track } from "./types/queue";
import { PlayerData } from "./types/player";

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
    type PlayerPlayRequest = BaseRequest & {
        track: Track;
    };
    type PlayerPlayResponse = BaseResponse & {};
    // POST player/replay
    type PlayerReplayRequest = BaseRequest & {};
    type PlayerReplayResponse = BaseResponse & {};
    // POST player/seek
    type PlayerSeekRequest = BaseRequest & {
        time: number;
    };
    type PlayerSeekResponse = BaseResponse & {};
    // POST player/skip
    type PlayerSkipRequest = BaseRequest & {
        index?: number;
    };
    type PlayerSkipResponse = BaseResponse & {};
    // POST player/stop
    type PlayerStopRequest = BaseRequest & {};
    type PlayerStopResponse = BaseResponse & {};
    // POST player/previous
    type PlayerPreviousRequest = BaseRequest & {};
    type PlayerPreviousResponse = BaseResponse & {};
    // POST player/pause
    type PlayerPauseRequest = BaseRequest & {};
    type PlayerPauseResponse = BaseResponse & {};
    // POST player/resume
    type PlayerResumeRequest = BaseRequest & {};
    type PlayerResumeResponse = BaseResponse & {};
    // PUT player/filter
    type PlayerFilterRequest = BaseRequest & {
        filter: string;
        value: boolean | number;
    };
    type PlayerFilterResponse = BaseResponse & {};
    // GET player/channel
    type PlayerChannelResponse = BaseResponse & {};
    // GET queue
    type QueueResponse = BaseResponse & QueueData;
    // PUT queue
    type QueuePutRequest = BaseRequest & {
        track: Track;
    };
    type QueuePutResponse = BaseResponse & {};
    // PATCH queue
    type QueuePatchRequest = BaseRequest & {
        index1: number;
        index2: number;
        item?: Track;
    };
    type QueuePatchResponse = BaseResponse & {};
    // DELETE queue
    type QueueDeleteRequest = BaseRequest & {
        start: number;
        end: number;
    };
    type QueueDeleteResponse = BaseResponse & {};
    // POST queue/shuffle
    type QueueShuffleRequest = BaseRequest & {};
    type QueueShuffleResponse = BaseResponse & {};
    // POST login
    type LoginRequest = {};
    type LoginResponse = {};
    // GET guilds
    type GuildsResponse = {
        guilds: APIPartialGuild[];
    };
}
