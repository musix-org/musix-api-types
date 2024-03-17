import { APIPartialGuild, RESTGetAPICurrentUserResult } from "discord-api-types/v10";
import { QueueData, Track } from "../types/queue";
import { PlayerData } from "../types/player";
import { Playlist, PlaylistTrack } from "../types/playlist";
import { Schema$SearchListResponse } from "../external/google/youtube/v3";

interface BaseRequest {
    id: string;
}

interface BaseResponse {
    id: string;
}

declare module "musix-api-types/rest" {
    // GET auth
    interface AuthResponse extends BaseResponse {
        id: string;
        username: string;
        avatar: string | null;
        access_token: string;
        expires_in: number;
        refresh_token: string;
    }

    // GET guilds
    // headers: access_token
    interface GuildsResponse {
        guilds: APIPartialGuild[];
    }

    // GET player/:id
    type PlayerResponse = BaseResponse & PlayerData;

    // POST player/:id/play
    // headers: access_token
    // not yet implemented, returns 501
    interface PlayerPlayRequest {
        track: Track;
    }

    // POST player/:id/replay
    // headers: access_token
    // no body

    // POST player/:id/seek
    // headers: access_token
    interface PlayerSeekRequest {
        time: number;
    }

    // POST player/:id/skip
    // headers: access_token
    interface PlayerSkipRequest {
        index?: number;
    }

    // POST player/:id/stop
    // headers: access_token
    // no body

    // POST player/:id/previous
    // headers: access_token
    // no body

    // POST player/:id/pause
    // headers: access_token
    // no body

    // POST player/:id/resume
    // headers: access_token
    // no body

    // PUT player/:id/filter
    // headers: access_token
    interface PlayerFilterRequest {
        filter: string;
        value: boolean | number;
    }
    // GET player/:id/channel
    // headers: access_token
    // not yet implemented, returns 501
    type PlayerChannelResponse = BaseResponse & {}; // TODO: add channel data

    // GET playlist/:id
    type PlaylistResponse = BaseResponse & Playlist;

    // POST playlist/:id
    // headers: access_token
    interface PlaylistPostRequest {
        name: string;
        tracks: PlaylistTrack[];
    }

    // PATCH playlist/:id
    // headers: access_token
    interface PlaylistPatchRequest {
        name?: string;
        tracks?: PlaylistTrack[];
    }

    // DELETE playlist/:id
    // headers: access_token
    // no body

    // GET queue/:id
    // headers: access_token
    type QueueResponse = BaseResponse & QueueData;

    // PUT queue/:id
    // headers: access_token
    interface QueuePutRequest {
        tracks: Track[];
    }

    // PATCH queue/:id
    // headers: access_token
    interface QueuePatchRequest {
        index1: number;
        index2?: number;
    }

    // DELETE queue/:id
    // headers: access_token
    interface QueueDeleteRequest {
        pos: number;
    }

    //POST queue/:id/repeat
    // headers: access_token
    interface QueueRepeatRequest {
        single?: boolean;
    }

    // GET search
    type SearchResponse = Schema$SearchListResponse;

    // GET users/me
    // headers: access_token
    type UserResponse = RESTGetAPICurrentUserResult;

    // GET users/me/playlists
    // headers: access_token
    type UserPlaylistsResponse = { playlists: Playlist[] };
}
