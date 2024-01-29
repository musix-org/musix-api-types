import { Track } from "./queue";

export interface Players {
    shard: number;
    players: {
        [key: string]: PlayerData;
    };
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
        autoplay: boolean;
    };
    time: number;
}

interface BaseSetPlayer {
    type: string;
    id: string;
}

export interface SetPlayerPlay extends BaseSetPlayer {
    type: "play";
    track: Track;
}

export interface SetPlayerChannel extends BaseSetPlayer {
    type: "channel";
    channel: string;
}

export interface SetPlayerReplay extends BaseSetPlayer {
    type: "replay";
}

export interface SetPlayerSeek extends BaseSetPlayer {
    type: "seek";
    time: number;
}

export interface SetPlayerSkip extends BaseSetPlayer {
    type: "skip";
}

export interface SetPlayerSkipTo extends BaseSetPlayer {    
    type: "skipTo";
    index: number;
}

export interface SetPlayerStop extends BaseSetPlayer {
    type: "stop";
}

export interface SetPlayerPrevious extends BaseSetPlayer {
    type: "previous";
}

export interface SetPlayerPause extends BaseSetPlayer {
    type: "pause";
}

export interface SetPlayerResume extends BaseSetPlayer {
    type: "resume";
}

export interface SetPlayerFilter extends BaseSetPlayer {
    type: "filter";
    filter: string;
    value: boolean | number;
}
