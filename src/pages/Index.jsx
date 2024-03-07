import React from "react";
import { Box, Container, Heading, Text, Button, VStack, Image, HStack, Link, Divider } from "@chakra-ui/react";
import { FaEnvelope, FaTwitter, FaLinkedin, FaBook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <VStack spacing={5}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580128637456-8f5ee699d117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBYnJhaGFtJTIwTGluY29sbnxlbnwwfHx8fDE3MDk4MDUzMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Abraham Lincoln Portrait" />
        <Heading as="h1">Abraham Lincoln</Heading>
        <Text align="center">16th President of the United States, Lawyer, and Statesman</Text>
        <Text align="center">"Government of the people, by the people, for the people, shall not perish from the Earth."</Text>
        <Button leftIcon={<FaEnvelope />} colorScheme="blue">
          Contact
        </Button>

        <HStack divider={<Divider orientation="vertical" />} spacing={4}>
          <Link href="https://twitter.com/abrahamlincoln" isExternal>
            <Button variant="ghost" colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/abrahamlincoln" isExternal>
            <Button variant="ghost" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              LinkedIn
            </Button>
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Abraham_Lincoln" isExternal>
            <Button variant="ghost" colorScheme="orange" leftIcon={<FaBook />}>
              Biography
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
