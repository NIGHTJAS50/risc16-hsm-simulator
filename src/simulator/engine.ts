export type ProcessorState = {
  pc: number;
  registers: number[];
  accumulator: number;
  instruction: string;
  zeroFlag: boolean;
  hsmStatus: string;
  cycles: number;
};

export function initialState(): ProcessorState {
  return { pc: 0, registers: [4, 7, 0, 0], accumulator: 0, instruction: "WAIT", zeroFlag: true, hsmStatus: "SEALED", cycles: 0 };
}

export function step(state: ProcessorState): ProcessorState {
  const value = (state.registers[0] + state.registers[1]) & 0xffff;
  return { ...state, pc: (state.pc + 2) & 0xffff, accumulator: value, instruction: "ADD R0, R1", zeroFlag: value === 0, hsmStatus: "SEALED", cycles: state.cycles + 1 };
}

export function requestKey(state: ProcessorState): ProcessorState {
  return { ...state, instruction: "HSM.KEY_HANDLE", hsmStatus: "KEY RELEASED FOR SIGN", cycles: state.cycles + 1 };
}
