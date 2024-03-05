interface Track {
    title: string;
    url: string;
    author: string;
    thumbnail?: string;
    length: number;
    position: number;
    type: string;
}

export interface QueueData {
    id: string;
    tracks: Track[];
    previousTracks: Track[];
    currentTrack: Track | null;
}

interface BaseSetQueue {
    type: string;
    id: string;
}

export interface SetQueueAdd extends BaseSetQueue {
    type: "add";
    track: string;
}

export interface SetQueueSplice extends BaseSetQueue {
    type: "splice";
    index1: number;
    index2: number;
    item?: string;
}

export interface SetQueueSlice extends BaseSetQueue {
    type: "slice";
    start: number;
    end: number;
}

export interface SetQueueRepeat extends BaseSetQueue {
    type: "repeat";
    single?: boolean;
}

export interface SetQueueShuffle extends BaseSetQueue {
    type: "shuffle";
}
