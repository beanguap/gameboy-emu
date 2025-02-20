// main.js
import { CPU } from "./CPU.js";
import { Memory } from "./Memory.js";
import { GPU } from "./GPU.js";
import { loadRomFromFile } from "./romLoader.js";

let cpu, memory, gpu;
let running = false;

function init() {
  cpu = new CPU();
  memory = new Memory();
  gpu = new GPU();
}

function emuLoop() {
  if (!running) return;

  let cyclesPerFrame = 69905; // Approximate cycles per frame
  while (cyclesPerFrame > 0) {
    const usedCycles = cpu.step(memory);
    gpu.update(usedCycles, memory);
    cyclesPerFrame -= usedCycles;
  }

  gpu.render();
  requestAnimationFrame(emuLoop);
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  const romLoaderInput = document.getElementById("romLoader");
  romLoaderInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      loadRomFromFile(file, memory, cpu).then(() => {
        running = true;
        requestAnimationFrame(emuLoop);
      });
    }
  });
});
