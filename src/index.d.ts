import { ClientData } from "./types/client";
import { PlayerData, Players, SetPlayerChannel, SetPlayerFilter, SetPlayerPause, SetPlayerPlay, SetPlayerPrevious, SetPlayerRemoveSong, SetPlayerReplay, SetPlayerResume, SetPlayerSeek, SetPlayerShuffle, SetPlayerSkip, SetPlayerSkipTo, SetPlayerStop } from "./types/player";
import { QueueData } from "./types/queue";
import { ShardsData } from "./types/shards";
import { SystemData } from "./types/system";

interface AuthenticationData {
    data: {
        token: string;
    };
}

export type PayloadType =
    "auth"
    | "statusUpdate"
    | "playerStatusUpdate"
    | "playerUpdate"
    | "queueUpdate"
    | "systemStatusUpdate"
    | "shardStatusUpdate"
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

    interface SetPlayerPayload {
        type: "setPlayer";
        data:
            | SetPlayerPlay
            | SetPlayerChannel
            | SetPlayerRemoveSong
            | SetPlayerShuffle
            | SetPlayerReplay
            | SetPlayerSeek
            | SetPlayerSkip
            | SetPlayerSkipTo
            | SetPlayerStop
            | SetPlayerPrevious
            | SetPlayerPause
            | SetPlayerResume
            | SetPlayerFilter
    }

}

export { ClientData, PlayerData, Players, QueueData, SystemData, ShardsData, AuthenticationData };
