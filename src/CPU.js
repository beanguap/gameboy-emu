// cpu.js
import { opcodes } from "./instructions.js";

export class CPU {
  constructor() {
    // Initialize 8-bit registers (A, B, C, D, E, F, H, L)
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.e = 0;
    this.f = 0; // This register holds flags (zero, subtract, half-carry, carry)
    this.h = 0;
    this.l = 0;

    // Program counter (PC) and Stack pointer (SP)
    this.pc = 0x0100; // Starting point for execution
    this.sp = 0xfffe; // Typically initialized to 0xfffe
  }

  reset() {
    // Reset registers to their default values
    this.a = 0x01; // Often initialized to 0x01 after boot
    this.b = this.c = this.d = this.e = this.f = 0;
    this.h = this.l = 0;
    this.pc = 0x0100; // Reset program counter to start address
    this.sp = 0xfffe; // Reset stack pointer
  }

  /**
   * Performs one fetch/decode/execute cycle.
   * @param {Memory} memory - The memory instance used to fetch instructions and operands.
   * @returns {number} - The number of cycles consumed by the executed instruction.
   */
  step(memory) {
    // Fetch the opcode from memory at the address in the program counter (PC)
    const opcode = memory.readByte(this.pc);

    // Increment the PC by 1 (wrap-around using bitwise AND to ensure 16-bit)
    this.pc = (this.pc + 1) & 0xffff;

    // Look up the handler function for this opcode from the opcodes array
    const handler = opcodes[opcode];

    // If no handler exists, log a warning and return a default cycle count (4 cycles)
    if (!handler) {
      console.warn(`Unimplemented opcode: 0x${opcode.toString(16)}`);
      return 4;
    }

    // Execute the handler function, passing in the CPU and Memory instances.
    // The handler function will update registers, possibly modify memory,
    // and return the number of cycles the instruction consumed.
    const cycles = handler(this, memory);

    // Return the cycle count to the caller (used for timing synchronization)
    return cycles;
  }
}
