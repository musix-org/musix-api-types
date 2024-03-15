import { Track } from "./queue";

export type PlaylistTrack = Omit<Track, "position">;

export interface Playlist {
    id: number;
    user_id: string;
    name: string;
    tracks: PlaylistTrack[];
}
