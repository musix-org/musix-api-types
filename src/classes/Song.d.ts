export default interface Song {
    readonly title: string;
    readonly url: string;
    readonly author: string;
    readonly type: "ytsr" | "ytpl" | "ytdl" | "soundCloud";
    readonly playerType: "ytdl" | "soundCloud";
    readonly duration: number;
    readonly longDuration?: string;
    readonly channel: string;
    readonly thumbnail: string;
}