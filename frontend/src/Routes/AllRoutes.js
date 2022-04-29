import { Route, Switch } from "react-router-dom";
// import Board from "../BoardComponent/index";
import SingleCard from "../Components/Card/SingleCard";
import LabelWrapper from "../Components/Label/LabelWrapper";
import Homepage from "../Components/Homepage/Homepage";
import Layout from "../Components/LoginSignup/Layout";
import Login from "../Components/LoginSignup/Login";
import Signup from "../Components/LoginSignup/Signup";
import Workspace from "../Components/LoginSignup/Workspace";
import PrivateRoute from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../Redux/User/actions";
import getBearerToken from "../Utils/GetBearerToken";
import Loading from "../Components/Loading";
import SingleWorkspace from "../Components/Workspace/SingleWorkspace";
import List from "../Components/List/List";
import Board from "../Components/Board/Board";
// import AppBar from "../BoardComponent/components/AppBar";
function AllRoutes() {
  // let isLoading = useSelector(state => state.user.isLoading)
  let isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let isLoading = useSelector((state) => state.user.isLoading);
  let workspaces = useSelector(state => state.user?.user?.workspaces)
  
  console.log("Is loading", isLoading)
  const dispatch = useDispatch();

  const getUserData = async () => {
    // let token = await getBearerToken();
    dispatch(getUser());
  };

  useEffect(() => {
    getUserData();
  }, []);

  if(isLoading){
    return <Loading />
  }
  else{

  
  return (
    <Switch>
      <Route exact path="/">
        {/* {isAuthenticated ? <Homepage /> : <Redirect to={`/workspace/${workspaceID}`} /> } */}
        {isLoading || isAuthenticated == null ? null : isAuthenticated ? (
          <Redirect to={`/workspace/${workspaces[0]}`} />
        ) : (
          <Homepage />
        )}
        // {/* <List />
        // <List />
        // <List /> */}
      </Route>
      // {/* <Route exact path="/appbar">
      //   <AppBar />
      // </Route> */}
      <Route exact path="/board/:board_id">
        <Board />
      </Route>

      <Route exact path="/login">
        <Layout>
          <Login />
        </Layout>
      </Route>
      <Route exact path="/signup">
        <Layout>
          <Signup />
        </Layout>
      </Route>
      <Route exact path="/create-first-workspace">
        {isLoading || isAuthenticated == null ? null : isAuthenticated ? (
          <Workspace />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/card/:card_id">
        <Board />
        <SingleCard />
      </Route>
      <Route exact path="/workspace/:workspace_id">
        {isLoading || isAuthenticated == null ? null : isAuthenticated ? (
          <SingleWorkspace />
        ) : (
            <Redirect to="/login" />
        )}
        
      </Route>
    </Switch>
  );
        }
}

export default AllRoutes;
