"use client";

import Image from "next/image";
import { MachineStatus, Alert, MetricHistory } from "./types/index";
import { useSimularTemperatura, useSimularRPM, useTempoOperacao, formatarTempo, useMaxRpm, useMaxTemp } from "./data/mocks"

function InfoCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (<div className="flex flex-col rounded-lg border p-4 w-[25%] text-center" >
    <h2 className="font-bold">{title}</h2>
    {children}
  </div>);
}

export default function Home() {

  const temperatura = useSimularTemperatura(30);
  const tempMax = useMaxTemp(temperatura);
  const rpm = useSimularRPM(1000);
  const rmpMax = useMaxRpm(rpm);
  const tempoOperacao = useTempoOperacao(0);

  const machine: MachineStatus = {
    id: "cod-abc",
    timestamp: new Date(0),
    state: "RUNNING",
    metrics: {
      temperature: temperatura,
      rpm: rpm,
      efficiency: 50,
      uptime: tempoOperacao
    },
    oee: {
      quality: 70,
      availability: 40,
      overall: 80,
      performance: 25
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-gray-800 ">
      <header className="flex w-full items-center justify-between p-6">
        <h1 className="text-xl  dark:text-orange-700 font-bold ">Dashboard de Monitoramento</h1>
        <div className="text-xl flex items-center gap-6">
          <button>Tema</button>
          <span>Status</span>
          <button>Config</button>
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16">
        <div id="Cards" className="w-full justify-between flex flex-row grid-cols-4 mb-4 text-lg gap-4">
          <InfoCard title="Estado Máquina">
            <p>{machine.id}</p>
            <p>status: {machine.state}</p>
          </InfoCard>
          <InfoCard title="Temperatura">
            <p>{machine.metrics.temperature}°C</p>
            <p>Máx: {Math.max(tempMax)} °C</p>
          </InfoCard>
          <InfoCard title="RPM">
            <p>{machine.metrics.rpm}</p>
            <p>Máx: {Math.max(rmpMax)}</p>
          </InfoCard>
          <InfoCard title="Tempo de Operação">
            <p>{formatarTempo(machine.metrics.uptime)}</p>
          </InfoCard>
        </div>
        <div id="Graficos" className="rounded-lg border p-4 w-[100%]">
          <h2>Gráfico de Métricas</h2>
        </div>
        <div id="Informativos" className="flex flex-row w-[100%] rounded-lg border p-4 gap-2">
          <div className="justify-between w-[50%] rounded-lg border  p-4">
            <h2>Alertas Recentes</h2>
          </div>
          <div className="justify-between w-[50%] rounded-lg border p-4">
            <h2>Métricas de Eficiência</h2>
          </div>
        </div>
      </main >
    </div >
  );
}