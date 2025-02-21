# Game Boy Emulator in JavaScript

This project is a Game Boy emulator written in JavaScript. Its primary goal is to learn about emulation, computer architecture, and low-level systems by building a fully functional emulator that runs in the browser. 

---

## Table of Contents
- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Implemented Instructions](#implemented-instructions)
- [Planned Features](#planned-features)
- [Usage](#usage)
- [Testing](#testing)
- [References](#references)
- [License](#license)

---

## Overview

This emulator simulates the core hardware components of the original Nintendo Game Boy:
- **CPU Emulation:** Replicates the custom 8-bit CPU, managing registers, opcodes, and timing.
- **Memory Module:** A 64KB address space for storing code (ROM) and data (RAM, I/O).
- **GPU Framework:** A placeholder for tile-based rendering at a 160×144 resolution.
- **ROM Loader:** Loads `.gb` files into the emulator’s memory at runtime.
- **Testing:** Uses Vitest for unit/integration tests, ensuring stable, verifiable progress.

---

## Features

1. **CPU Emulation:**
   - 8-bit registers (A, B, C, D, E, F, H, L) plus PC/SP.
   - Opcode handling via a dispatch table in `instructions.js`.
   - Easily extended with new instructions.

2. **Memory Management:**
   - Single 64KB array (`Uint8Array`) with read/write methods.
   - Future enhancements for bank switching and I/O registers.

3. **ROM Loader:**
   - Loads `.gb` files into memory.
   - Resets CPU state for fresh execution.

4. **GPU Framework:**
   - Minimal scaffolding for a 160×144 canvas.
   - Future tile and sprite rendering to replicate Game Boy graphics.

5. **Testing with Vitest:**
   - Test coverage for core modules (Memory, CPU).
   - Expandable to GPU and advanced CPU tests (arithmetic, interrupts, etc.).

---

## Implemented Instructions

### 8-Bit Immediate Loads
- **NOP (0x00):** Does nothing, 4 cycles.
- **LD B,d8 (0x06):** Loads immediate 8-bit into B, 8 cycles.
- **LD C,d8 (0x0E):** Loads immediate 8-bit into C, 8 cycles.
- **LD D,d8 (0x16):** Loads immediate 8-bit into D, 8 cycles.
- **LD E,d8 (0x1E):** Loads immediate 8-bit into E, 8 cycles.
- **LD H,d8 (0x26):** Loads immediate 8-bit into H, 8 cycles.
- **LD L,d8 (0x2E):** Loads immediate 8-bit into L, 8 cycles.
- **LD A,d8 (0x3E):** Loads immediate 8-bit into A, 8 cycles.

### Register-to-Register Loads
- **LD A,B (0x78):** Copies B into A, 4 cycles.
- **LD A,C (0x79):** Copies C into A, 4 cycles.

---

## Planned Features

- **Arithmetic/Logic Instructions:**  
  ADD, SUB, AND, OR, XOR, CP, plus proper flag handling.
- **16-Bit Loads & Stack Ops:**  
  (e.g., `LD BC,d16`, `PUSH`, `POP`, etc.)
- **CB-Prefix Instructions:**  
  Bitwise ops, rotates, and shifts for advanced CPU behavior.
- **Interrupts & Timers:**  
  Handling V-Blank, LCD, Timer, and Joypad interrupts.
- **GPU Rendering:**  
  Full tile-based rendering & sprite support.
- **MBC (Memory Bank Controllers):**  
  Support for larger ROMs with bank switching.
- **Audio Emulation:**  
  Square waves, noise channel, wave channel, etc.
- **Integration Tests & Test ROMs:**  
  Use known test ROMs (e.g. Blargg’s) to verify CPU correctness.

---

## Usage

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/beanguap/gameboy-emu.git
   cd gameboy-emu


License

This project is licensed under the MIT License.
See LICENSE for details (if you have a separate LICENSE file).

Important References:

https://gbdev.io/pandocs/

https://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html

https://archive.org/details/GameBoyProgManVerl.1/page/n85/mode/2up

https://github.com/rockytriton/LLD_gbemu/raw/main/docs/The%20Cycle-Accurate%20Game%20Boy%20Docs.pdf

https://github.com/rockytriton/LLD_gbemu/raw/main/docs/gbctr.pdf

https://github.com/rockytriton/LLD_gbemu (GitHub Repository)


