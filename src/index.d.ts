import { ClientData } from "./types/client";
import { PlayerData, Players } from "./types/player";
import { QueueData } from "./types/queue";
import { ShardsData } from "./types/shards";
import { SystemData } from "./types/system";

declare module "musix-api-types" {
    enum payloadType {
        statusUpdate = "statusUpdate",
        playerStatusUpdate = "playerStatusUpdate",
        playerUpdate = "playerUpdate",
        queueUpdate = "queueUpdate",
        systemStatusUpdate = "systemStatusUpdate",
        shardStatusUpdate = "shardStatusUpdate"
    }
    interface Payload {
        type: payloadType;
        data: ClientData | PlayerData | Players | QueueData | SystemData | ShardsData;
    }
}
