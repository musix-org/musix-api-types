interface Track {
    title: string;
    url: string;
    author: string;
    length: number;
    position: number;
}

export interface QueueData {
    tracks: Track[];
    previousTracks: Track[];
    currentTrack: Track | null;
}
