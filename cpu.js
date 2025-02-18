// CPU.js
import { opcodes } from "./Instructions.js"; // <-- Make sure the path is correct!

export class CPU {
  constructor() {
    // Registers
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.e = 0;
    this.f = 0; // Flags
    this.h = 0;
    this.l = 0;

    this.pc = 0x0100; // Program counter
    this.sp = 0xfffe; // Stack pointer
  }

  reset() {
    // You can choose initial values known after the GB BIOS
    this.a = 0x01;
    this.b = this.c = this.d = this.e = this.f = 0;
    this.h = this.l = 0;
    this.pc = 0x0100;
    this.sp = 0xfffe;
  }

  /**
   * Performs one fetch/decode/execute cycle.
   * @param {Memory} memory - The memory object
   * @returns {number} - The number of cycles this instruction took
   */
  step(memory) {
    // 1. Fetch opcode
    const opcode = memory.readByte(this.pc);
    // 2. Increment PC
    this.pc = (this.pc + 1) & 0xffff;

    // 3. Dispatch
    const handler = opcodes[opcode];
    if (!handler) {
      console.warn(`Unimplemented opcode: 0x${opcode.toString(16)}`);
      // fallback cycle count for unknown opcode
      return 4;
    }

    // 4. Execute
    const cycles = handler(this, memory);
    return cycles;
  }
}
