interface Track {
    title: string;
    url: string;
    author: string;
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
