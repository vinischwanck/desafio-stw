export type { MachineStatus, Alert, MetricHistory };

interface MachineStatus {
    id: string;
    timestamp: Date;
    state: "RUNNING" | "STOPPED" | "MAINTENANCE" | "ERROR";
    metrics: {
        temperature: number;
        rpm: number;
        uptime: number;
        efficiency: number;
    };
    oee: {
        overall: number;
        availability: number;
        performance: number;
        quality: number;
    };
}

interface Alert {
    id: string;
    level: "INFO" | "WARNING" | "CRITICAL";
    message: string;
    component: string;
    timestamp: Date;
    acknowledged: boolean;
}

interface MetricHistory {
    timestamp: Date;
    temperature: number;
    rpm: number;
    efficiency: number;
}