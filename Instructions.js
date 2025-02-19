// Instructions.js
export const opcodes = new Array(256).fill(null);

// NOP (0x00)
opcodes[0x00] = (cpu, memory) => {
  return 4;
};

// LD BC,d16 (0x06)
opcodes[0x06] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.b = value;
  return 8;
};

// LD C,d8 (0x0E)
opcodes[0x0e] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.c = value;
  return 8;
};

// LD D,d8 (0x16)
opcodes[0x16] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.d = value;
  return 8;
};

// LD E,d8 (0x1E)
opcodes[0x1e] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.e = value;
  return 8;
};

// LD H,d8 (0x26)
opcodes[0x26] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.h = value;
  return 8;
};

// LD L,d8 (0x2E)
opcodes[0x2e] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.l = value;
  return 8;
};

// LD A,d8 (0x3E)
opcodes[0x3e] = (cpu, memory) => {
  const value = memory.readByte(cpu.pc);
  cpu.pc = (cpu.pc + 1) & 0xffff;
  cpu.a = value;
  return 8;
};
