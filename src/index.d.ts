declare module "musix-api-types" {
    interface Song {
    title: string;
    author: string;
    url: string;
    duration: string;
}

interface PlayerStatus {
    playing: boolean;
    paused: boolean;
    looping: boolean;
    songLooping: boolean;
    stopped: boolean;
    errored: boolean;
    startTime: null | number;
}

export interface playerData {
    id: string;
    queue: Song[];
    status: PlayerStatus;
    event: "start" | "end" | "update" | "created" | "deleted";
}

export interface statsData {
    commandUses: { command: string; uses: number }[];
}

export interface debugData {}

export interface Payload {
    type: "player" | "stats" | "debug";
    data: playerData | statsData | debugData;
}

export interface PlayerPayload extends Payload {
    type: "player";
    data: playerData;
}

export interface StatsPayload extends Payload {
    type: "stats";
    data: statsData;
}

export interface DebugPayload extends Payload {
    type: "debug";
    data: debugData;
}

}