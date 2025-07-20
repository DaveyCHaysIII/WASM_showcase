#define MAX_LIMIT 1000000000

/**
 * count_primes - counts all the primes up to limit
 * @limit: the INT we're counting up to
 *
 * Return: number of primes counted
 */

__attribute__((export_name("countPrimes")))
int count_primes(int limit)
{
	int count;

	if (limit > MAX_LIMIT)
		limit = MAX_LIMIT;

	count = 0;
	for (int n = 2; n < limit; n++)
	{
		int is_prime = 1;

		for (int i = 2; i * i <= n; i++)
		{
			if (n % i == 0)
			{
				is_prime = 0;
				break;
			}
		}

		if (is_prime)
			count++;
	}
	return (count);
}
