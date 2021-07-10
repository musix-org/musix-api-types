import Song from "./types/Song"

declare module "musix-api-types" {
    interface baseRequest {
        token: string;
    }

    export interface basePlayerRequest extends baseRequest {
        guildId: string;
        data: any;
    }

    export interface playerQueueGetRequest extends basePlayerRequest {}

    export interface playerQueuePostRequest extends basePlayerRequest {
        songs?: Song[];
        prevSongs?: Song[];
    }

    export interface playerQueue {
        songs: Song[];
        prevSongs: Song[];
    }


    export interface playerFiltersGetRequest extends basePlayerRequest {}

    export interface playerFiltersPostRequest extends basePlayerRequest {
        "3D"?: boolean;
        bass?: number;
        flanger?: boolean;
        nightCore?: boolean;
        phaser?: boolean;
        pulsator?: boolean;
        reverse?: boolean;
        treble?: number;
        tremolo?: boolean;
        vaporwave?: boolean;
        vibrato?: boolean;
        volume?: number;
    }
    
    export interface playerFilters {
        "3D": boolean;
        bass: number;
        flanger: boolean;
        nightCore: boolean;
        phaser: boolean;
        pulsator: boolean;
        reverse: boolean;
        treble: number;
        tremolo: boolean;
        vaporwave: boolean;
        vibrato: boolean;
        volume: number | string;
    }

    export interface playerDataGetRequest extends basePlayerRequest {}

    export interface playerDataPostRequest extends basePlayerRequest {
        playing?: boolean;
        paused?: boolean;
        looping?: boolean;
        songLooping?: boolean;
    }

    export interface playerStatusData {
        playing: boolean;
        paused: boolean;
        looping: boolean;
        songLooping: boolean;
    }

    export interface playerVoiceChannelGetRequest extends basePlayerRequest {

    }

    export interface playerVoiceChannelResponse {

    }


    export interface playerMethodRequest extends basePlayerRequest {}

    export interface playerPlayParams {
        seek?: number;
        play?: boolean;
        replay?: boolean;
    }

    export interface playerJoinParams {
        channel: `${bigint}`
    }

    export interface playerRemoveParams {
        pos: number
    }

    export interface playerSetVolumeParams {
        multiplier: number
    }

    export interface playerSkiptoParams {
        point: number
    }
}
