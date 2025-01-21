import { Button } from "@chakra-ui/react";

export const ButtonSignUp: React.FC = () => (
  <Button
    colorScheme="blue"
    as="a"
    href="https://metapage.io/sign-up"
    aria-label="sign up"
    maxW="200px"
  >
    {" "}
    Sign up
  </Button>
);
