import { GatewayVoiceState } from "discord-api-types/v10";

export interface ClientData {
    fullyReady: boolean;
    ready: boolean;
    readyTimestamp: number | null;
    shard: number[] | null;
    uptime: number | null;
    guilds?: string[];
}

export interface VoiceStateUpdateData {
    oldState: GatewayVoiceState | null;
    newState: GatewayVoiceState | null;
}
