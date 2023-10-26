import { ClientData } from "./types/client";
import { PlayerData } from "./types/player";
import { QueueData } from "./types/queue";
import { SystemData } from "./types/system";

declare module "musix-api-types" {
    enum payloadType {
        statusUpdate = "statusUpdate",
        playerStatusUpdate = "playerStatusUpdate",
        queueUpdate = "queueUpdate",
        systemStatusUpdate = "systemStatusUpdate"
    }
    interface Payload {
        type: payloadType;
        data: ClientData | PlayerData | QueueData | SystemData;
    }
}
