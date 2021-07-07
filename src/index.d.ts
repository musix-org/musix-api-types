import Song from "./classes/Song"

declare module "musix-api-types" {
    interface baseRequest {
        token: string;
    }

    interface basePlayerRequest extends baseRequest {
        guildId: string;
    }

    interface basePlayerResponse {
        guildId: string;
    }

    export interface queueResponse extends basePlayerRequest {
        songs: Song[];
        prevSongs: Song[];
    }
    
    export interface filterResponse extends basePlayerRequest {
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
}
