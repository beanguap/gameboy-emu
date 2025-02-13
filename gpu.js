// gpu.js
export class GPU {
  constructor() {
    this.canvas = document.getElementById("screen");
    this.ctx = this.canvas.getContext("2d");

    // Prepare an ImageData buffer for 160x144
    this.imageData = this.ctx.createImageData(160, 144);
  }

  update(cycles, memory) {
    // For now, just ignore cycles or do something minimal
  }

  render() {
    // In the future, you'll draw the current frame
    // For now, let's fill with a solid color
    // (Actually writing to imageData pixel-by-pixel is next step)
    for (let i = 0; i < this.imageData.data.length; i += 4) {
      // White background
      this.imageData.data[i + 0] = 255; // R
      this.imageData.data[i + 1] = 255; // G
      this.imageData.data[i + 2] = 255; // B
      this.imageData.data[i + 3] = 255; // A
    }
    this.ctx.putImageData(this.imageData, 0, 0);
  }
}
