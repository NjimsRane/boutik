import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ShoppingCartProvider } from "./context/ProductContext.tsx";
// the app has access to all the thing inside the shoppingCartProvider

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<App />
		</ShoppingCartProvider>
	</React.StrictMode>
);
