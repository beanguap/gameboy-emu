// Instructions.js
export const opcodes = new Array(256).fill(null);

// NOP (0x00)
opcodes[0x00] = (cpu, memory) => {
  return 4;
};

// LD B,d8 (0x06)
opcodes[0x06] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.b = value;
  return 8;
};
