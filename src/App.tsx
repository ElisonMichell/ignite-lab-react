import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import rocketseatIcon from "./assets/rocketseat-icon.png"

export function App() {

  document.querySelector("link")!.href = rocketseatIcon;

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}