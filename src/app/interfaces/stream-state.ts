export interface StreamState {
    playing: boolean;
    readableCurrentTime: string;
    readableDuration: string;
    duration: number | undefined;
    currentTime: number | undefined;
    volume: number | undefined;
    canplay: boolean;
    error: boolean;
}
