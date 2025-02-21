// Language: JavaScript
import { describe, it, expect } from "vitest";
import { CPU } from "../src/cpu.js";
import { Memory } from "../src/memory.js";

describe("CPU Module", () => {
  it("should initialize registers correctly after reset", () => {
    const cpu = new CPU();
    cpu.reset();

    expect(cpu.a).toBe(0x01);
    expect(cpu.pc).toBe(0x0100);
    expect(cpu.sp).toBe(0xfffe);
  });
});