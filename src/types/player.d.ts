export interface Players {
    [key: string]: PlayerData;
}

export interface PlayerData {
    id: string;
    status: {
        playing: boolean;
        paused: boolean;
        looping: boolean;
        songLooping: boolean;
        stopped: boolean;
        errored: boolean;
        startTime: null | number;
    };
    time: number;
}
