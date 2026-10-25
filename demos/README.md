# Bundled examples

These are demonstration inputs, not training or evaluation data. Every report
is computed by the normal analyzer. Audio is transcribed and image text is
extracted at runtime; no demo transcript or findings are injected.

## IRS scam call excerpts

- Source: Pindrop, **Largest IRS Phone Scam Exceeded 450,000 Victims**,
  originally published 15 April 2014; inspected 23 October 2026.
- Context: https://www.pindrop.com/article/irs-phone-scam-live-call-analysis/
- This is a real scammer speaking with a Pindrop employee posing as a victim.
  Pindrop altered the employee's voice for privacy. This is not a staged call
  or a voice-authenticity demonstration.
- Two published excerpts from the same call are presented in their original
  order: part 12 (14:20 in the source conversation, arrest-warrant pressure)
  and part 14 (18:15, wire-payment demand). This is an excerpt compilation,
  **not a complete or continuous conversation**.
- Part 12: https://cdn.prod.website-files.com/6a809521fc6b7dfa71f2e253/6aa9115d84ea31157eb82d12_part_12.mp3
  SHA-256: `405521d77007cc0228addd4fe045888b03c67df6221613d9302b806536a231b5`.
- Part 14: https://cdn.prod.website-files.com/6a809521fc6b7dfa71f2e253/6aa9115d68e55a7b761fb961_part_14.mp3
  SHA-256: `2378692945fe3d05b6c5a4050975152a88c4f85ad000e1d82ee8544b9deee42e`.
- Transformation: Chrome Web Audio decode/resample to 16 kHz; average both
  stereo channels to retain both participants; concatenate the complete
  excerpts with 0.5 seconds of silence; encode PCM16 WAV. No new speech,
  looping, changed words, or injected transcript.
- Bundled file: `irs-scam-excerpts.wav`, 63.664 seconds, 2,037,292 bytes.
  SHA-256: `e78460e092a087d5a13e254a0ada1609d7851aebc44714a3676b44bdfdfdd288`.
- Rights: publicly accessible third-party recordings; Pindrop states all
  rights reserved and supplies no explicit open license. Used for educational
  scam analysis; not public domain and no publisher endorsement is implied.

The report is computed from the file the presenter can play. Native builds
share the web asset folder. The previous 33-second SSA robocall is removed.

## Gift card conversation

Original fictional conversation created for Clarity Shield, rendered from
`scripts/fixtures/gift-card-chat.html`. No private conversation or third-party
messaging-app screenshot is used. The image itself says “Sample conversation”.
PNG SHA-256: `b3bba92f76be29799c837bae24c7d7f5506ba5edeb84d2d3b3715685ff4a8560`.

## Text message

Original fictional bank-code request from Clarity Shield's existing examples.

## Reproduction

Run `node scripts/prepare-demo-assets.mjs` with Chrome and Playwright available.
Set `PLAYWRIGHT_MODULE` to an installed Playwright module when needed. This
downloads and verifies both source excerpts, creates the documented WAV, and
captures the HTML conversation. It prints the resulting hashes. Browser/platform changes can
alter rendered PNG bytes; inspect and update hashes explicitly if regenerating
on a different runtime.
