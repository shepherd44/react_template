import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ComponentA, ThemeProvider } from "@react-template/components";
import { DefaultLayout } from "./layouts";
import RouteWrapper from "./layouts/RouteWrapper";

const OtherPackageComponent = () => {
  return <ComponentA />;
};

const One = () => {
  return <div>test</div>;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <RouteWrapper
            path="/"
            component={OtherPackageComponent}
            layout={DefaultLayout}
          />
          <RouteWrapper path="/one" component={One} layout={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
