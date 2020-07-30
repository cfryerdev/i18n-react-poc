import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { withTranslation } from "react-i18next";

import { setupTranslation } from "./i18n";
import App from "./App";

setupTranslation().then(() => {
  const AppContainer = withTranslation()(App);
  ReactDOM.render(
    <Suspense fallback={() => <h2>Loading Language...</h2>}>
      <AppContainer />
    </Suspense>,
    document.getElementById("root")
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
