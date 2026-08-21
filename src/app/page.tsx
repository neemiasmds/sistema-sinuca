"use client";
import { useState, Dispatch, SetStateAction } from "react";

// Aqui estamos explicando pro TypeScript o que é um "Jogador"
type Jogador = {
  nome: string;
  placar: number;
  bolas: number;
  faltas: number;
  defesas: number;
};

export default function ScoutApp() {
  const [jogadorA, setJogadorA] = useState<Jogador>({ nome: "Felipinho", placar: 0, bolas: 0, faltas: 0, defesas: 0 });
  const [jogadorB, setJogadorB] = useState<Jogador>({ nome: "Baianinho", placar: 0, bolas: 0, faltas: 0, defesas: 0 });

  // Funções com as tipagens (o "fiscal" do Vercel adora isso)
  const addStat = (jogador: Jogador, setJogador: Dispatch<SetStateAction<Jogador>>, stat: keyof Jogador) => {
    setJogador({ ...jogador, [stat]: (jogador[stat] as number) + 1 });
  };

  const subStat = (jogador: Jogador, setJogador: Dispatch<SetStateAction<Jogador>>, stat: keyof Jogador) => {
    if ((jogador[stat] as number) > 0) {
      setJogador({ ...jogador, [stat]: (jogador[stat] as number) - 1 });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-400">Scout Ao Vivo - Sinuca</h1>
      
      {/* Placar da Série */}
      <div className="flex justify-center items-center gap-8 text-3xl font-bold mb-8 bg-gray-800 p-4 rounded-lg">
        <div>{jogadorA.nome} <span className="text-blue-400">{jogadorA.placar}</span></div>
        <div className="text-gray-500">X</div>
        <div><span className="text-blue-400">{jogadorB.placar}</span> {jogadorB.nome}</div>
      </div>

      {/* Painel de Apontamento */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Painel Jogador A */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">{jogadorA.nome}</h2>
          
          <div className="flex justify-between items-center bg-gray-700 p-3 rounded">
            <span>Bolas Encaçapadas</span>
            <div className="flex gap-3 items-center">
              <button onClick={() => subStat(jogadorA, setJogadorA, 'bolas')} className="bg-red-500 px-3 py-1 rounded text-xl">-</button>
              <span className="text-xl font-bold w-6 text-center">{jogadorA.bolas}</span>
              <button onClick={() => addStat(jogadorA, setJogadorA, 'bolas')} className="bg-green-500 px-3 py-1 rounded text-xl">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-700 p-3 rounded">
            <span>Faltas</span>
            <div className="flex gap-3 items-center">
              <button onClick={() => subStat(jogadorA, setJogadorA, 'faltas')} className="bg-red-500 px-3 py-1 rounded text-xl">-</button>
              <span className="text-xl font-bold w-6 text-center">{jogadorA.faltas}</span>
              <button onClick={() => addStat(jogadorA, setJogadorA, 'faltas')} className="bg-green-500 px-3 py-1 rounded text-xl">+</button>
            </div>
          </div>
        </div>

        {/* Painel Jogador B */}
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">{jogadorB.nome}</h2>
          
          <div className="flex justify-between items-center bg-gray-700 p-3 rounded">
            <span>Bolas Encaçapadas</span>
            <div className="flex gap-3 items-center">
              <button onClick={() => subStat(jogadorB, setJogadorB, 'bolas')} className="bg-red-500 px-3 py-1 rounded text-xl">-</button>
              <span className="text-xl font-bold w-6 text-center">{jogadorB.bolas}</span>
              <button onClick={() => addStat(jogadorB, setJogadorB, 'bolas')} className="bg-green-500 px-3 py-1 rounded text-xl">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-700 p-3 rounded">
            <span>Faltas</span>
            <div className="flex gap-3 items-center">
              <button onClick={() => subStat(jogadorB, setJogadorB, 'faltas')} className="bg-red-500 px-3 py-1 rounded text-xl">-</button>
              <span className="text-xl font-bold w-6 text-center">{jogadorB.faltas}</span>
              <button onClick={() => addStat(jogadorB, setJogadorB, 'faltas')} className="bg-green-500 px-3 py-1 rounded text-xl">+</button>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg text-xl">
        Salvar Ficha (Enviar para o Banco)
      </button>
    </div>
  );
}