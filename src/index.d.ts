import { ClientData } from "./types/client";
import { PlayerData, Players } from "./types/player";
import { QueueData } from "./types/queue";
import { ShardsData } from "./types/shards";
import { SystemData } from "./types/system";

interface AuthenticationData {
    token: string;
}

declare module "musix-api-types" {
    enum PayloadType {
        statusUpdate = "statusUpdate",
        playerStatusUpdate = "playerStatusUpdate",
        playerUpdate = "playerUpdate",
        queueUpdate = "queueUpdate",
        systemStatusUpdate = "systemStatusUpdate",
        shardStatusUpdate = "shardStatusUpdate",
        auth = "auth"
    }
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

    export {
        ClientData,
        PlayerData,
        Players,
        QueueData,
        SystemData,
        ShardsData,
        AuthenticationData,
        PayloadType,
        Payload
    };
}
