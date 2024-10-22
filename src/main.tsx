import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElements = document.getElementById("root");

if (rootElements == null) {
	throw new Error();
}

createRoot(rootElements).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
