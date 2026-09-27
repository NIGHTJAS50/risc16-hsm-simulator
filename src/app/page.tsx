"use client";

import { useState } from "react";
import { initialState, requestKey, step, type ProcessorState } from "../simulator/engine";
import "./styles.css";

export default function Home() {
  const [state, setState] = useState<ProcessorState>(initialState);
  return <main>
    <header><span className="eyebrow">CCS 4301 / CCS 4304</span><h1>RISC-16 // Secure Execution Lab</h1><p>Observe instruction flow through a 16-bit processor while the HSM keeps key material outside the general register file.</p></header>
    <section className="toolbar"><button onClick={() => setState(step)}>Step instruction</button><button onClick={() => setState(requestKey)}>Request HSM key handle</button><button className="ghost" onClick={() => setState(initialState())}>Reset</button></section>
    <section className="board">
      <article className="panel pc"><span className="label">PROGRAM COUNTER</span><strong>0x{state.pc.toString(16).padStart(4, "0").toUpperCase()}</strong><span className="signal">FETCH → DECODE → EXECUTE</span></article>
      <article className="panel register"><span className="label">REGISTER FILE</span>{state.registers.map((value, index) => <div className="register-row" key={index}><span>R{index}</span><strong>{value.toString(16).padStart(4, "0").toUpperCase()}</strong></div>)}</article>
      <article className="panel alu"><span className="label">ALU</span><div className="chip">{state.instruction}</div><strong>ACC 0x{state.accumulator.toString(16).padStart(4, "0").toUpperCase()}</strong><span className="signal">ZERO FLAG: {state.zeroFlag ? "SET" : "CLEAR"}</span></article>
      <article className="panel hsm"><span className="label">HARDWARE SECURITY MODULE</span><div className="lock">⌁</div><strong>{state.hsmStatus}</strong><p>Keys never enter the CPU register file.</p></article>
    </section>
    <footer><span>Cycle {state.cycles}</span><span>Instruction bus: 16 bit</span><span>Enclave: isolated</span></footer>
  </main>;
}
