import { Icon } from "@chakra-ui/react";
import IconMetapageSelect from "~icons/app/metapage";

export const Logo: React.FC = () => {
  return (
    <Icon as={IconMetapageSelect} m={1} boxSize={12} aria-label="home" />
  );
};
