interface Track {
    id: string;
    title: string;
    url: string;
    author: string;
    thumbnail?: string;
    length: number;
    position: number;
    type: string;
}

type YoutubeResultTrack = Omit<Track, "length" | "position">;

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
    track: Track;
}

export interface SetQueueSplice extends BaseSetQueue {
    type: "splice";
    index1: number;
    index2: number;
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
