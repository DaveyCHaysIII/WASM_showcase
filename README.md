# WASM_showcase
A repo to demonstrate basic WASM functionality

## CONTENTS
Matrix: a demonstration of matrix multiplication
Prime:  a demonstration of counting all prime numbers

## DESCRIPTION

The purpose of both of these tests was to showcase how performant WASM
can be and to practice with the Emscripten compiler. I tried to make
the algorithms as similar as possible and timed them the exact same way.
While admittedly this is a biased and naive test, it does showcase the
exact sort of work WASM is useful for.

## TL;DR THE RESULTS

The primes test showed that the WASM implementatin was about 30% faster
across all cases

The matrix test, however, showed an 80-90% difference, WASM blowing the
JS completely out of the water.

## CONCLUSION

This is only part of the story, several other tests, particularly tests
that had nothing to do with heavy math, showed JS beating out WASM. This
test merely offers evidence that WASM is a tool worthy of putting in the
toolbox.
