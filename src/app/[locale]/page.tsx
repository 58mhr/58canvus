import { Box, Flex, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import type { FC } from 'react';
import { useTranslations } from '@/hooks';

const Home: FC = () => {
  const { tHome } = useTranslations();
  return (
    <Flex align="center" bg="gray.50" justify="center" minH="100vh">
      <Box
        as="main"
        bg="white"
        display="flex"
        flexDirection="column"
        gap={16}
        justifyContent="space-between"
        maxW="800px"
        minH="100vh"
        px={{ base: 6, md: 16 }}
        py={{ base: 16, md: 32 }}
        w="full"
      >
        <Box>
          <Image alt="Next.js logo" height={20} priority={true} src="/next.svg" width={100} />
        </Box>
        <Stack align="flex-start" gap={6}>
          <Heading
            as="h1"
            color="gray.900"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="semibold"
            letterSpacing="tight"
            lineHeight="1.2"
          >
            {tHome('welcome')}
          </Heading>
          <Text color="gray.500" fontSize="lg" lineHeight="tall" maxW="440px">
            Looking for a starting point or more instructions? Head over to
            <Link
              color="gray.900"
              fontWeight="medium"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
              textDecoration="underline"
              textUnderlineOffset="2px"
            >
              Templates
            </Link>
            or the
            <Link
              color="gray.900"
              fontWeight="medium"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
              textDecoration="underline"
              textUnderlineOffset="2px"
            >
              Learning
            </Link>
            center.
          </Text>
        </Stack>
        <HStack flexWrap="wrap" gap={4}>
          <Link
            _hover={{ bg: 'gray.700', textDecoration: 'none' }}
            alignItems="center"
            bg="gray.900"
            borderRadius="full"
            color="white"
            display="inline-flex"
            fontSize="sm"
            gap={2}
            h={10}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            px={6}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Vercel logomark"
              height={16}
              src="/vercel.svg"
              style={{ filter: 'invert(1)' }}
              width={16}
            />
            Deploy Now
          </Link>
          <Link
            _hover={{ bg: 'gray.50', textDecoration: 'none' }}
            alignItems="center"
            bg="white"
            borderColor="gray.200"
            borderRadius="full"
            borderWidth="1px"
            color="gray.900"
            display="inline-flex"
            fontSize="sm"
            h={10}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            px={6}
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Home;
