import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContianer = ({ children }: Props) => {
  return (
    <Box width="250px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContianer;
