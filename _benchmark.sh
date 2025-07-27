#!/bin/bash

# Check if command is provided
if [ $# -eq 0 ]; then
  echo "Usage: $0 <command>"
  exit 1
fi

# Record start time in nanoseconds
start_ns=$(date +%s%N)

# Run the command
"$@"

# Record end time in nanoseconds
end_ns=$(date +%s%N)

# Calculate elapsed time in milliseconds
elapsed_ms=$(( (end_ns - start_ns) / 1000000 ))

echo "Elapsed time: ${elapsed_ms} ms"
