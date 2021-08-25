declare module "musix-api-types" {
    export interface PlayerStatusData {
        id: string;
        data: {
            playing: boolean;
            paused: boolean;
            looping: boolean;
            songLooping: boolean;
        };
    }
}
