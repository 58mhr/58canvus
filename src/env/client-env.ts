import { z } from 'zod';

const clientEnvSchema = z.object({
  // 例: NEXT_PUBLIC_API_URL: z.string().url(),
});

type ClientEnv = z.infer<typeof clientEnvSchema>;

const parseEnv = (): ClientEnv => {
  const parsed = clientEnvSchema.safeParse({
    // 例: NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (!parsed.success) {
    console.error('Invalid client environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Client environment variable validation failed.');
  }

  return parsed.data;
};

export const clientEnv: ClientEnv = parseEnv();
