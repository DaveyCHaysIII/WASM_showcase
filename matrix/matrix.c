#include <stdint.h>
#include <stdlib.h>

#define N 1024  // Adjust size here

static int A[N][N];
static int B[N][N];
static int C[N][N];

void init_matrices()
{
	for (int i = 0; i < N; i++)
		for (int j = 0; j < N; j++)
		{
			A[i][j] = (i + j);
			B[i][j] = (i - j);
			C[i][j] = 0;
		}
}

void multiply_matrices()
{
	for (int i = 0; i < N; i++)
		for (int j = 0; j < N; j++)
			for (int k = 0; k < N; k++)
				C[i][j] += A[i][k] * B[k][j];
}

int get_checksum()
{
	int sum = 0;
	for (int i = 0; i < N; i++)
		for (int j = 0; j < N; j++)
			sum ^= (int)C[i][j];
	return sum;
}
