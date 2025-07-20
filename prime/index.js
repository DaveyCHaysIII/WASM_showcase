const limit = 2800000; // try 1_000_000 first if testing

console.log(`Counting primes under ${limit}...`);

function countPrimesJS(limit) {
  let count = 0;

  for (let n = 2; n < limit; n++) {
    let isPrime = true;

    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) count++;
  }

  return count;
}

// --- Run JS Version ---
const jsStart = performance.now();
const jsResult = countPrimesJS(limit);
const jsEnd = performance.now();
const jsTime = (jsEnd - jsStart).toFixed(2);

console.log(`JS   - Number of primes: ${jsResult}`);
console.log(`JS   - Time taken: ${jsTime} ms`);

// --- Run WASM Version ---
WebAssembly.instantiateStreaming(fetch("prime.wasm"))
  .then(({ instance }) => {
    const wasmStart = performance.now();
    const wasmResult = instance.exports.countPrimes(limit);
    const wasmEnd = performance.now();
    const wasmTime = (wasmEnd - wasmStart).toFixed(2);

    console.log(`WASM - Number of primes: ${wasmResult}`);
    console.log(`WASM - Time taken: ${wasmTime} ms`);
  })
  .catch((err) => {
    console.error("Failed to load WASM:", err);
  });

  
