import { ClientData } from "./types/client";
import { PlayerData, Players } from "./types/player";
import { QueueData } from "./types/queue";
import { ShardsData } from "./types/shards";
import { SystemData } from "./types/system";

interface AuthenticationData {
    token: string;
}

export enum PayloadType {
    statusUpdate = "statusUpdate",
    playerStatusUpdate = "playerStatusUpdate",
    playerUpdate = "playerUpdate",
    queueUpdate = "queueUpdate",
    systemStatusUpdate = "systemStatusUpdate",
    shardStatusUpdate = "shardStatusUpdate",
    auth = "auth"
}

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
}

export { ClientData, PlayerData, Players, QueueData, SystemData, ShardsData, AuthenticationData };
