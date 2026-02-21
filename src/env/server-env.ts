import { z } from 'zod';

const serverEnvSchema = z.object({
  NODE_ENV: z.string().pipe(z.enum(['development', 'test', 'production'])),
  DEFAULT_LOCALE: z
    .string()
    .pipe(z.enum(['en', 'ja']))
    .optional(),
});

type ServerEnv = z.infer<typeof serverEnvSchema>;

const parseEnv = (): ServerEnv => {
  const parsed = serverEnvSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE,
  });

  if (!parsed.success) {
    console.error('Invalid server environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Server environment variable validation failed.');
  }

  return parsed.data;
};

export const serverEnv: ServerEnv = parseEnv();
