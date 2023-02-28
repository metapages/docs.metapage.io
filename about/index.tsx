import React from "react";
import { Stack } from "@mantine/core";
import { AuthMotivationPanel } from "./components/AuthMotivationPanel";
import { Navbar } from "./components/Navbar";

export const Home: React.FC = () => (
  <Stack align="stretch">
    <Navbar />
    <AuthMotivationPanel />
  </Stack>
);
