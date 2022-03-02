import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient/client";
import Pages from "./pages";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2 style={{ textAlign: "center" }}>SAYURBOX SWAPI 🚀</h2>
        <Pages />
      </div>
    </ApolloProvider>
  );
}

export default App;
