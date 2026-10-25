# Bundled local models

The original input models are committed. Live speaker models are provisioned
with `npm run inputs:prepare` and are ignored by Git. User content remains in the
browser during local model inference; these
artifacts provide local text analysis, audio transcription, and OCR.

## Runtime assets

| Directory | Purpose | Upstream source | License |
| --- | --- | --- | --- |
| `clarity-minilm` | Quantized semantic encoder and Clarity Shield classifier head | [`sentence-transformers/all-MiniLM-L6-v2`](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | Apache-2.0 |
| `whisper-tiny-en` | Quantized English audio transcription | [`onnx-community/whisper-tiny.en`](https://huggingface.co/onnx-community/whisper-tiny.en) | Apache-2.0 |
| `tesseract` | English screenshot OCR | [`tesseract.js`](https://github.com/naptha/tesseract.js) and [`tessdata`](https://github.com/naptha/tessdata) | Apache-2.0 |
| `wasm`, `whisper-wasm` | Local ONNX execution | [`onnxruntime`](https://github.com/microsoft/onnxruntime) | MIT |
| `speaker-segmentation` | Speech activity and WeSpeaker voice embeddings for two-party live calls | [`onnx-community/pyannote-segmentation-3.0`](https://huggingface.co/onnx-community/pyannote-segmentation-3.0), [`altunenes Community-1 ONNX conversion`](https://huggingface.co/altunenes/speaker-diarization-community-1-onnx) of [`pyannote/Community-1`](https://huggingface.co/pyannote/speaker-diarization-community-1) | MIT (segmentation); CC BY 4.0 (embedding) |

Exact revisions, file hashes, package versions, and artifact metadata are in
`input-runtime-manifest.json` and `clarity-minilm/runtime-manifest.json`.
Live model revisions and SHA-256 hashes are in `models/speaker-segmentation.json`.
Credit for the embedding weights belongs to pyannote and WeSpeaker, and the
ONNX conversion to altunenes. The downloaded weights are unmodified; the
embedding file is renamed locally. The CC BY 4.0 license is at
https://creativecommons.org/licenses/by/4.0/.

The Clarity Shield classifier head is project code and data. The upstream model
weights, tokenizers, OCR data, and runtimes remain governed by their respective
licenses.

The original committed artifacts are about 174 MB. Provisioning live speaker
models adds about 32 MB locally. Model binaries added for live speech are not
committed.
