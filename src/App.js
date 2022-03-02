import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient/client";
import Pages from "./pages/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2 style={{ textAlign: "center" }}>STARSHIPS 🚀</h2>
        <Pages />
      </div>
    </ApolloProvider>
  );
}

export default App;
