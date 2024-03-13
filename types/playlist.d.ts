import { Track } from "./queue";

export type PlaylistTrack = Omit<Track, "position">;

export interface Playlist {
    id: string;
    user_id: string;
    name: string;
    tracks: PlaylistTrack[];
}
