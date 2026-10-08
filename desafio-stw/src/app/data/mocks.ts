import { useState, useEffect } from 'react';
import { MachineStatus } from "../types/index";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

//Simular temperatura 
export function useSimularTemperatura(temperaturaInicial: number) {
    const [temperatura, Temperatura] = useState<number>(temperaturaInicial);

    useEffect(() => {
        const interval = setInterval(() => {
            Temperatura((tempAtual) => {
                const variacao = (Math.random() - 0.5) * 2;
                return Number((tempAtual + variacao).toFixed(1));
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return temperatura;
}

//Lista as ocorrencia das maiores temperaturas
export function useMaxTemp(MaxTemp: number) {

    const [maxTemp, setMaxTemp] = useState(MaxTemp);

    useEffect(() => {
        setMaxTemp((max) => Math.max(max, MaxTemp));
    }, [MaxTemp]);

    return maxTemp;
}

//Simular RPM
export function useSimularRPM(RpmInicial: number) {
    const [rpm, Rpm] = useState<number>(RpmInicial);

    useEffect(() => {
        const interval = setInterval(() => {
            Rpm((rpmAtual) => {
                const variacao = (Math.random() - 0.5) * 10;
                return Number((rpmAtual + variacao).toFixed(1));
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return rpm;
}

//Lista as ocorrencia dos maiores RPM
export function useMaxRpm(RpmMax: number) {

    const [rpmMax, setRpmMax] = useState(RpmMax);

    useEffect(() => {
        setRpmMax((max) => Math.max(max, RpmMax));
    }, [RpmMax]);

    return rpmMax;
}

//Tempo de Operação da Máquina
export function useTempoOperacao(TempoIncial: number) {
    const [tempo, setTempo] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo((tempo) => tempo + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return tempo;
}

//Formatar Tempo de Operação
export function formatarTempo(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;
}


// Informações fakes para preencher as divs de Gráficos, Alertas e Métricas. Porém não consegui avançar na parte de exibir essas informações no page.tsx

const historico = [
    { hora: "10:00", temp: 62, rpm: 1180 },
    { hora: "10:05", temp: 65, rpm: 1210 },
    { hora: "10:10", temp: 71, rpm: 1350 },
    { hora: "10:15", temp: 68, rpm: 1290 },
    { hora: "10:20", temp: 74, rpm: 1420 },
    { hora: "10:25", temp: 70, rpm: 1330 },
];

const alertas = [
    { id: 1, nivel: "critico", msg: "Temperatura acima de 80°C", hora: "10:22" },
    { id: 2, nivel: "aviso", msg: "RPM oscilando fora do padrão", hora: "10:14" },
    { id: 3, nivel: "info", msg: "Manutenção preventiva agendada", hora: "09:50" },
];

const eficiencia = [
    { nome: "Disponib.", valor: 94 },
    { nome: "Desempenho", valor: 87 },
    { nome: "Qualidade", valor: 98 },
];

const corNivel: Record<string, string> = {
    critico: "bg-red-500",
    aviso: "bg-amber-500",
    info: "bg-sky-500",
};