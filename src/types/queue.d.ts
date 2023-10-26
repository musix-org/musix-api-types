interface Track {
    title: string;
    url: string;
    author: string;
    length: number;
    position: number;
}

export interface QueueData {
    id: string;
    tracks: Track[];
    previousTracks: Track[];
    currentTrack: Track | null;
}
