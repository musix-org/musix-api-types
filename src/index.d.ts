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
    type PayloadDataType =
        | ClientData
        | PlayerData
        | Players
        | QueueData
        | SystemData
        | ShardsData
        | AuthenticationData;

    interface Payload {
        type: PayloadType;
        data: PayloadDataType;
    }

    type SetPayloadDataType = SetPlayerPayloadDataType | SetQueuePayloadDataType;

    interface SetPayload {
        type: SetPayloadtype;
        data: SetPayloadDataType;
    }

    type SetPlayerPayloadDataType =
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

    interface SetPlayerPayload {
        type: "setPlayer";
        data: SetPlayerPayloadDataType;
    }

    type SetQueuePayloadDataType = SetQueueAdd | SetQueueSplice | SetQueueSlice | SetQueueShuffle;
    interface SetQueuePayload {
        type: "setQueue";
        data: SetQueuePayloadDataType;
    }
}

export { ClientData, PlayerData, Players, QueueData, SystemData, ShardsData, AuthenticationData };
