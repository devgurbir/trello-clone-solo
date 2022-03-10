import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";

function PrivateRoute({ isAuthenticated, children, ...rest }) {
    
    return (
      <Route
        {...rest}
        render={ () => isAuthenticated ? (
            children
          ) : (
            // <Homepage />
            <Redirect to="/login" />
          )
        }
      />
    );
  }
  export default PrivateRoute