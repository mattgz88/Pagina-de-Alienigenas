import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Avatar from "./Avatares";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Avatar />
  </StrictMode>
);
