import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ShoppingCartProvider } from "./context/ProductContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop.tsx";
// the app has access to all the thing inside the shoppingCartProvider

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<UserProvider>
		<React.StrictMode>
			<ShoppingCartProvider>
				<BrowserRouter>
					<ScrollToTop />
					<App />
				</BrowserRouter>
			</ShoppingCartProvider>
		</React.StrictMode>
	</UserProvider>
);
