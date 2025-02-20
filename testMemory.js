// testMemory.js
import { Memory } from "./memory.js";

function testMemory() {
  // Create a new Memory instance and reset it
  const memory = new Memory();
  memory.reset();

  // Write some test values into memory
  memory.writeByte(0x0100, 0x06); // Write 0x06 at address 0x0100
  memory.writeByte(0x0101, 0x42); // Write 0x42 at address 0x0101
  memory.writeByte(0x0102, 0x3e); // Write 0x3E at address 0x0102
  memory.writeByte(0x0103, 0x99); // Write 0x99 at address 0x0103

  // Read the values back from memory and log them
  console.log("Memory[0x0100]:", memory.readByte(0x0100)); // Expected: 6
  console.log("Memory[0x0101]:", memory.readByte(0x0101)); // Expected: 66 (0x42 in decimal)
  console.log("Memory[0x0102]:", memory.readByte(0x0102)); // Expected: 62 (0x3E in decimal)
  console.log("Memory[0x0103]:", memory.readByte(0x0103)); // Expected: 153 (0x99 in decimal)
}

// Run the test function
testMemory();
