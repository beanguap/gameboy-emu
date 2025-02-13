// memory.js
export class Memory {
  constructor() {
    // 0x10000 = 65536 bytes
    this.bytes = new Uint8Array(0x10000);
  }

  readByte(addr) {
    return this.bytes[addr];
  }

  writeByte(addr, value) {
    this.bytes[addr] = value & 0xff;
  }

  reset() {
    this.bytes.fill(0);
  }
}
