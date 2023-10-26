import { ClientData } from "./types/client";
import { PlayerData } from "./types/player";
import { QueueData } from "./types/queue";

declare module "musix-api-types" {
    enum payloadType {
        statusUpdate = "statusUpdate",
        playerStatusUpdate = "playerStatusUpdate",
        queueUpdate = "queueUpdate"
    }
    interface Payload {
        type: payloadType;
        data: ClientData | PlayerData | QueueData;
    }
}
