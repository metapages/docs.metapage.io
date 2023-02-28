import { Box, HStack, Icon } from "@chakra-ui/react";
import IconMetapageSelect from "~icons/app/metapage";

export const Header: React.FC = () => {
  return <HStack ><Icon as={IconMetapageSelect} m={1} boxSize={12} aria-label="metapages" /> <Box>THE HEADRER</Box></HStack>;
};
