import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ loggedIn, children, ...props }) {
  return(
    <Route exact {...props}>
      {loggedIn ? children : <Redirect to="/"/>}
    </Route>
  )
}

export default ProtectedRoute;