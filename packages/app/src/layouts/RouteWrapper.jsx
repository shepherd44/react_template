import { Route } from "react-router-dom";

const RouteWrapper = ({
  component: Component,
  render,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          {!Component && render && render()}
          {!render && Component && <Component {...props} />}
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
