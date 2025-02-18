// main.js
import { CPU } from "./cpu.js";
import { Memory } from "./memory.js";
import { GPU } from "./gpu.js";

let cpu, memory, gpu;
let running = false;

function init() {
  // Create instances
  cpu = new CPU();
  memory = new Memory();
  gpu = new GPU();
}

async function loadRom(file) {
  // Read the file as ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  const romData = new Uint8Array(arrayBuffer);

  // Reset memory and CPU
  memory.reset();
  cpu.reset();

  // Copy ROM data into the beginning of memory
  for (let i = 0; i < romData.length; i++) {
    memory.writeByte(i, romData[i]);
  }

  running = true;
  console.log("ROM loaded, size =", romData.length, "bytes");
}

// A simple loop to step the CPU and then render

//emuLoop is crucial allows the CPu to simulate 1/60th of a second.
function emuLoop() {
  if (!running) return;

  // We'll approximate 1/60th of a second in cycles:
  let cyclesPerFrame = 69905; // ~ 4.19 MHz / 60
  while (cyclesPerFrame > 0) {
    const usedCycles = cpu.step(memory);
    gpu.update(usedCycles, memory);

    cyclesPerFrame -= usedCycles;
  }

  // Draw whatever the GPU has
  gpu.render();

  // Schedule next frame
  requestAnimationFrame(emuLoop);
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  const romLoader = document.getElementById("romLoader");
  romLoader.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      loadRom(file).then(() => {
        requestAnimationFrame(emuLoop);
      });
    }
  });
});
