// romLoader.js
export async function loadRomFromFile(file, memory, cpu) {
  // Read the file as an ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  // Convert the ArrayBuffer into a Uint8Array for easier access to each byte
  const romData = new Uint8Array(arrayBuffer);

  // Reset the memory and CPU to ensure a clean state
  memory.reset();
  cpu.reset();

  // Copy each byte of the ROM into memory starting at address 0x0000
  for (let i = 0; i < romData.length; i++) {
    memory.writeByte(i, romData[i]);
  }

  console.log("ROM loaded, size =", romData.length, "bytes");
  return romData.length; // Optionally, you can return the ROM size
}
