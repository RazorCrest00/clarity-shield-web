/* Continuous, mono capture. Unlike analyser snapshots, no samples are skipped. */
class LivePCM extends AudioWorkletProcessor {
  constructor() {
    super();
    this.samples = new Float32Array(2048);
    this.position = 0;
  }
  process(inputs) {
    const channels = inputs[0];
    if (!channels?.length) return true;
    for (let i = 0; i < channels[0].length; i++) {
      let value = 0;
      for (const channel of channels) value += channel[i] / channels.length;
      this.samples[this.position++] = value;
      if (this.position === this.samples.length) {
        this.port.postMessage(this.samples, [this.samples.buffer]);
        this.samples = new Float32Array(2048);
        this.position = 0;
      }
    }
    return true;
  }
}
registerProcessor("live-pcm", LivePCM);
