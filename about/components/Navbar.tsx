import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

import { Logo } from "./Logo";

type LinkTarget = "app" | "docs" | "internal";

const DEVELOPMENT = false;
const URL_APP = DEVELOPMENT ? "https://metapage.localhost:8776" : "https://metapage.io";
const URL_DOCS = DEVELOPMENT ?  "http://localhost:3000" : "https://docs.metapage.io";

export const Navbar: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <HStack
        justifyContent="flex-start"
        as="nav"
        // bg="bg-surface"
        // boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Box py={{ base: "4", lg: "5" }} width="100%">
          <HStack spacing="10" justify="space-between" px={2}>
            <Button variant="link">
              <Link as={RouterLink} to="/">
                <Logo />
              </Link>
            </Button>

            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {[
                    { name: "Product", target: "docs" as LinkTarget },
                    { name: "Pricing", target: "app" as LinkTarget },
                    // { name: "Resources", local: true },
                    // { name: "Support", local: true },
                  ].map((item) =>
                    item.target === "internal" ? (
                      <Button key={item.name} variant="link">
                        <Link
                          as={RouterLink}
                          to={`/${item.name.toLowerCase()}`}
                        >
                          {item.name}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        as="a"
                        href={`${
                          item.target === "app" ? URL_APP : URL_DOCS
                        }/${item.name.toLowerCase()}`}
                        aria-label={`${item.name.toLowerCase()}`}
                      >
                        {" "}
                        {item.name}
                      </Button>
                    )
                  )}
                </ButtonGroup>
                <Spacer />
                <Button
                  as="a"
                  href={URL_DOCS}
                  aria-label="docs"
                  variant="ghost"
                >
                  {" "}
                  <FiSearch fontSize="1.25rem" /> &nbsp; Docs
                </Button>

                <HStack spacing="3">
                  <Button
                    variant="ghost"
                    as="a"
                    href={`${URL_APP}/sign-in`}
                    aria-label="sign in"
                  >
                    {" "}
                    Sign in
                  </Button>

                  <Button
                    colorScheme="blue"
                    as="a"
                    href={`${URL_APP}/sign-up`}
                    aria-label="sign up"
                  >
                    {" "}
                    Sign up
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
