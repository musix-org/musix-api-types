import { ClientData } from "./types/client";
import {
    PlayerData,
    Players,
    SetPlayerChannel,
    SetPlayerFilter,
    SetPlayerPause,
    SetPlayerPlay,
    SetPlayerPrevious,
    SetPlayerReplay,
    SetPlayerResume,
    SetPlayerSeek,
    SetPlayerSkip,
    SetPlayerSkipTo,
    SetPlayerStop
} from "./types/player";
import {
    QueueData,
    SetQueueAdd,
    SetQueueShuffle,
    SetQueueSlice,
    SetQueueSplice
} from "./types/queue";
import { ShardsData } from "./types/shards";
import { SystemData } from "./types/system";

interface AuthenticationData {
    data: {
        token: string;
    };
}

export type PayloadType =
    | "auth"
    | "statusUpdate"
    | "playerStatusUpdate"
    | "playerUpdate"
    | "queueUpdate"
    | "systemStatusUpdate"
    | "shardStatusUpdate";

export type SetPayloadtype = "setPlayer" | "setQueue";
/*{
    statusUpdate = "statusUpdate",
    playerStatusUpdate = "playerStatusUpdate",
    playerUpdate = "playerUpdate",
    queueUpdate = "queueUpdate",
    systemStatusUpdate = "systemStatusUpdate",
    shardStatusUpdate = "shardStatusUpdate",
    auth = "auth"
}*/

declare module "musix-api-types" {
    interface Payload {
        type: PayloadType;
        data:
            | ClientData
            | PlayerData
            | Players
            | QueueData
            | SystemData
            | ShardsData
            | AuthenticationData;
    }

    interface SetPayload {
        type: SetPayloadtype;
        data:
            | SetPlayerPlay
            | SetPlayerChannel
            | SetPlayerReplay
            | SetPlayerSeek
            | SetPlayerSkip
            | SetPlayerSkipTo
            | SetPlayerStop
            | SetPlayerPrevious
            | SetPlayerPause
            | SetPlayerResume
            | SetPlayerFilter
            | SetQueueAdd
            | SetQueueSplice
            | SetQueueSlice
            | SetQueueShuffle;
    }

    interface SetPlayerPayload {
        type: "setPlayer";
        data:
            | SetPlayerPlay
            | SetPlayerChannel
            | SetPlayerReplay
            | SetPlayerSeek
            | SetPlayerSkip
            | SetPlayerSkipTo
            | SetPlayerStop
            | SetPlayerPrevious
            | SetPlayerPause
            | SetPlayerResume
            | SetPlayerFilter;
    }

    interface SetQueuePayload {
        type: "setQueue";
        data: SetQueueAdd | SetQueueSplice | SetQueueSlice | SetQueueShuffle;
    }
}

export { ClientData, PlayerData, Players, QueueData, SystemData, ShardsData, AuthenticationData };
