#include "matrix.c"
#include <stdio.h>
#include <time.h>


long get_elapsed_ms(struct timespec start, struct timespec end)
{
    return (end.tv_sec - start.tv_sec) * 1000 +
           (end.tv_nsec - start.tv_nsec) / 1000000;
}

int main()
{
    struct timespec start, end;

    printf("Initializing...\n");
    init_matrices();

    printf("Starting multiplication...\n");
    clock_gettime(CLOCK_MONOTONIC, &start);
    multiply_matrices();
    clock_gettime(CLOCK_MONOTONIC, &end);

    int checksum = get_checksum();
    printf("Checksum: %d\n", checksum);
    printf("Elapsed: %ld ms\n", get_elapsed_ms(start, end));
}
