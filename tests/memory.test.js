// tests/memory.test.js
import { describe, it, expect } from "vitest";
import { Memory } from "../src/memory.js";

describe("Memory Module", () => {
  it("should write and read a byte correctly", () => {
    const memory = new Memory();
    memory.reset();

    memory.writeByte(0x0100, 0x06);
    memory.writeByte(0x0101, 0x42);

    expect(memory.readByte(0x0100)).toBe(0x06);
    expect(memory.readByte(0x0101)).toBe(0x42);
  });

  it("should clamp values to 8 bits", () => {
    const memory = new Memory();
    memory.writeByte(0x0000, 0x1FF); // 0x1FF is 511 decimal, which is > 0xFF
    expect(memory.readByte(0x0000)).toBe(0xFF);
  });
});
