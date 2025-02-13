// cpu.js
export class CPU {
  constructor() {
    // Just store registers as properties:
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
    // You can choose initial values known after the GB BIOS, or keep them zero
    this.a = 0x01; // for example
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
    const opcode = memory.readByte(this.pc);
    this.pc = (this.pc + 1) & 0xffff; // wrap at 16 bits

    let cycles = 0;

    switch (opcode) {
      case 0x00: // NOP
        // Do nothing
        cycles = 4;
        break;
      case 0x06: // LD B,d8
        this.b = memory.readByte(this.pc);
        this.pc = (this.pc + 1) & 0xffff;
        cycles = 8;
        break;
      default:
        console.warn(`Unimplemented opcode: 0x${opcode.toString(16)}`);
        cycles = 4; // fallback
        break;
    }

    return cycles;
  }
}
