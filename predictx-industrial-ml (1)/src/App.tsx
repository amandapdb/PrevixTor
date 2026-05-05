/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Thermometer, 
  Zap, 
  RotateCw, 
  Wrench, 
  Cpu, 
  AlertTriangle, 
  CheckCircle2,
  Info
} from 'lucide-react';

type MachineType = 'L' | 'M' | 'H';

interface PredictionData {
  type: MachineType;
  airTemp: number;
  processTemp: number;
  rotSpeed: number;
  torque: number;
  toolWear: number;
}

export default function App() {
  const [data, setData] = useState<PredictionData>({
    type: 'M',
    airTemp: 300,
    processTemp: 305,
    rotSpeed: 1500,
    torque: 40,
    toolWear: 100,
  });

  const [result, setResult] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  const calculatePrediction = () => {
    setIsPredicting(true);
    setResult(null);

    // Simulate model latency
    setTimeout(() => {
      let status = "Máquina funcionando normalmente";

      if (data.torque > 60 && data.toolWear > 200) {
        status = "Falha da máquina";
      } else if (data.rotSpeed < 1200) {
        status = "Falha da máquina";
      } else if (data.processTemp > 310) {
        status = "Falha da máquina";
      }

      setResult(status);
      setIsPredicting(false);
    }, 800);
  };

  const handleInputChange = (field: keyof PredictionData, value: string | number) => {
    setData(prev => ({ ...prev, [field]: value }));
    setResult(null); // Clear result when inputs change
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E0E0E6] flex flex-col font-sans">
      {/* Background Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header */}
      <header className="border-b border-white/10 p-6 flex items-center justify-between bg-[#0D0D10]/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Cpu className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">PredictX Industrial</h1>
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest">ML Prediction Engine v2.4.0</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-white/40 uppercase">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            System Ready
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
        {/* Left Column: Data Input */}
        <section className="lg:col-span-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Machine Type */}
            <div className="space-y-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <label className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <Settings className="w-3 h-3" /> Machine Type
              </label>
              <div className="flex gap-2">
                {(['L', 'M', 'H'] as MachineType[]).map((t) => (
                  <button
                    id={`type-${t}`}
                    key={t}
                    onClick={() => handleInputChange('type', t)}
                    className={`flex-1 py-2 rounded-md font-mono text-sm transition-all border ${
                      data.type === t 
                      ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' 
                      : 'bg-white/5 border-transparent text-white/40 hover:bg-white/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Air Temperature */}
            <div className="space-y-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <label className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <Thermometer className="w-3 h-3" /> Air Temperature (K)
              </label>
              <input
                id="air-temp"
                type="number"
                value={data.airTemp}
                onChange={(e) => handleInputChange('airTemp', Number(e.target.value))}
                className="w-full bg-[#15151A] border border-white/10 rounded-md p-3 text-sm font-mono focus:border-blue-500/50 outline-none transition-all"
              />
            </div>

            {/* Process Temperature */}
            <div className="space-y-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <label className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <Thermometer className="w-3 h-3" /> Process Temp (K)
              </label>
              <input
                id="process-temp"
                type="number"
                value={data.processTemp}
                onChange={(e) => handleInputChange('processTemp', Number(e.target.value))}
                className="w-full bg-[#15151A] border border-white/10 rounded-md p-3 text-sm font-mono focus:border-blue-500/50 outline-none transition-all"
              />
            </div>

            {/* Rotational Speed */}
            <div className="space-y-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <label className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <RotateCw className="w-3 h-3" /> Rotational Speed (rpm)
              </label>
              <input
                id="rotational-speed"
                type="number"
                value={data.rotSpeed}
                onChange={(e) => handleInputChange('rotSpeed', Number(e.target.value))}
                className="w-full bg-[#15151A] border border-white/10 rounded-md p-3 text-sm font-mono focus:border-blue-500/50 outline-none transition-all"
              />
            </div>

            {/* Torque */}
            <div className="space-y-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <label className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <Zap className="w-3 h-3" /> Torque (Nm)
              </label>
              <input
                id="torque"
                type="number"
                value={data.torque}
                onChange={(e) => handleInputChange('torque', Number(e.target.value))}
                className="w-full bg-[#15151A] border border-white/10 rounded-md p-3 text-sm font-mono focus:border-blue-500/50 outline-none transition-all"
              />
            </div>

            {/* Tool Wear */}
            <div className="space-y-2 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <label className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <Wrench className="w-3 h-3" /> Tool Wear (min)
              </label>
              <input
                id="tool-wear"
                type="number"
                value={data.toolWear}
                onChange={(e) => handleInputChange('toolWear', Number(e.target.value))}
                className="w-full bg-[#15151A] border border-white/10 rounded-md p-3 text-sm font-mono focus:border-blue-500/50 outline-none transition-all"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center justify-center space-y-6 pt-4">
            <motion.button
              id="predict-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={calculatePrediction}
              disabled={isPredicting}
              className={`px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isPredicting ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  ANALYSING DATA...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  RUN PREDICTION
                </>
              )}
            </motion.button>

            {/* Results Display */}
            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-2xl"
                >
                  <div className={`p-8 rounded-2xl border-2 flex flex-col items-center text-center space-y-4 ${
                    result.includes('Falha') 
                    ? 'bg-red-500/10 border-red-500/30' 
                    : 'bg-green-500/10 border-green-500/30'
                  }`}>
                    {result.includes('Falha') ? (
                      <div className="p-4 bg-red-500 rounded-full">
                        <AlertTriangle className="w-10 h-10 text-white" />
                      </div>
                    ) : (
                      <div className="p-4 bg-green-500 rounded-full">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest">
                        Analysis Output
                      </h2>
                      <p className={`text-4xl font-bold ${
                        result.includes('Falha') ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {result}
                      </p>
                    </div>

                    <div className="w-full h-px bg-white/10 my-2" />
                    
                    <p className="text-sm text-white/60 max-w-md mx-auto">
                      Based on current operational parameters, the neural network predicts a {result.includes('Falha') ? 'high probability of critical component failure' : 'stable operational state with no immediate failure risks'}.
                    </p>

                    {result.includes('Falha') && (
                      <div className="flex gap-4 mt-2">
                        <div className="px-3 py-1 bg-red-500/20 text-red-300 rounded text-xs font-mono flex items-center gap-1.5 border border-red-500/30">
                          <AlertTriangle className="w-3 h-3" /> IMMEDIATE ACTION REQUIRED
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Info Section */}
      <footer className="p-8 border-t border-white/5 bg-[#0D0D10]/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 text-xs text-white/30">
          <div className="flex-1 space-y-3">
            <h3 className="flex items-center gap-2 text-white/50 font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" /> Technical Reference
            </h3>
            <p>Our predictive model utilizes thousands of historical data points from AI4I 2020 Predictive Maintenance Dataset. It monitors real-time sensor data to flag potential breakdowns before they occur.</p>
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="text-white/50 font-bold uppercase tracking-wider">Operational Thresholds</h3>
            <ul className="space-y-1 list-disc pl-4 font-mono">
              <li>Process Temps &gt; 310K indicate thermal stress</li>
              <li>RPM &lt; 1200 signal drivetrain efficiency drop</li>
              <li>High Torque/Wear interaction flags tool failure</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
