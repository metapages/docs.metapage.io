
import { ButtonSignUp } from "./ButtonSignUp";

export const AuthMotivationPanel: React.FC = () => {
  return (
    <Box flex="1" display={{ base: "none", md: "block" }}>
      {/* <DarkMode> */}
        <Flex
          direction="column"
          px={{ base: "4", md: "8" }}
          height="full"
          // color="on-accent"
        >
          <Flex flex="1"
          align="center" p={10}
          // background="blue.600"
          // borderWidth='1px'
          // borderRadius="2xl"
          >
            <Stack spacing="8"  >
              <Stack spacing="6">
                <Heading size={useBreakpointValue({ md: "lg", xl: "xl" })}>
                  Communicate rich data to your audience
                </Heading>
                <Text fontSize="lg" maxW="md" fontWeight="medium">
                  Create an account and discover the worlds' most advanced research, simulation and communication tools
                </Text>
              </Stack>
              <HStack spacing="4">
                <AvatarGroup
                  size="md"
                  max={useBreakpointValue({ base: 2, lg: 5 })}
                  borderColor="on-accent"
                >
                  <Avatar
                  bg='white'
                    src="https://molstar.org/img/lighting.png"
                  />
                  <Avatar
                  bg='white'
                    src="https://img.stackshare.io/service/1651/ma2jqJKH_400x400.png"
                  />
                  <Avatar bg='white' src="https://upload.wikimedia.org/wikipedia/commons/5/52/Sound_wave_holding_shape_-_Medium_01.svg" />
                  <Avatar
                  bg='white'
                    src="https://doc.babylonjs.com/img/babylonidentity.svg"
                  />
                  <Avatar
                    bg='white'
                    src="https://cytoscape.org/images/logo/cy3logoOrange.svg"
                  />
                </AvatarGroup>
                <Text fontWeight="medium">Connect to a fast growing library of dashboards and apps</Text>


              </HStack>
              <ButtonSignUp />
            </Stack>
          </Flex>
          {/* <Flex align="center" h="24">
            <Text color="on-accent-subtle" fontSize="sm">
              © 2022 metapages, LLC. All rights reserved.
            </Text>
          </Flex> */}
        </Flex>
      {/* </DarkMode> */}
    </Box>
  );
};
