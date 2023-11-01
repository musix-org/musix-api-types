import { ClientData } from "./types/client";
import { PlayerData, Players } from "./types/player";
import { QueueData } from "./types/queue";
import { ShardsData } from "./types/shards";
import { SystemData } from "./types/system";
import { PayloadType } from "./index";

interface AuthenticationData {
    token: string;
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
