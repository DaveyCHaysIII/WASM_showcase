function jsMultiply(N) {
  const A = [], B = [], C = [];
  for (let i = 0; i < N; i++) {
    A[i] = [], B[i] = [], C[i] = [];
    for (let j = 0; j < N; j++) {
      A[i][j] = i + j;
      B[i][j] = i - j;
      C[i][j] = 0;
    }
  }

  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
      for (let k = 0; k < N; k++)
        C[i][j] += A[i][k] * B[k][j];

  // checksum to make sure work is done
  let checksum = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
      checksum ^= C[i][j];
return checksum;
}

Module.onRuntimeInitialized = function () {
  const output = document.getElementById("output");

  const N = 128;

  // JS version
  let t1 = performance.now();
  let jsSum = jsMultiply(N);
  let t2 = performance.now();
  output.textContent += `JS   - Checksum: ${jsSum}\n`;
  output.textContent += `JS   - Time taken: ${(t2 - t1).toFixed(2)} ms\n`;

  // WASM version
  Module._init_matrices();
  let t3 = performance.now();
  Module._multiply_matrices();
  let t4 = performance.now();
  let wasmSum = Module._get_checksum();
  output.textContent += `WASM - Checksum: ${wasmSum}\n`;
  output.textContent += `WASM - Time taken: ${(t4 - t3).toFixed(2)} ms\n`;
};
