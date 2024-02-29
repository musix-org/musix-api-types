export interface SystemData {
    cpu: {
        cores: number;
        model: string;
        speed: number;
        load: number;
    };
    memory: {
        total: number;
        used: number;
        free: number;
        load: number;
    };
    os: {
        platform: string;
        release: string;
        type: string;
        uptime: number;
    };
    process: {
        pid: number;
        uptime: number;
        memory: {
            rss: number;
            heapTotal: number;
            heapUsed: number;
            external: number;
        };
        cpu: {
            user: number;
            system: number;
        };
    };
}
