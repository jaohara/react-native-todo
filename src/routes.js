import LoginScreen from "./components/screens/LoginScreen";
import OverviewScreen from "./components/screens/OverviewScreen";
import TodoScreen from "./components/screens/TodoScreen";

export const routeNames = {
  login: "Login",
  overview: "Lists",
  todo: "Todo:",
};

export const routes = [
  { 
    name: routeNames.login,
    component: LoginScreen,
  },
  { 
    name: routeNames.overview,
    component: OverviewScreen,
  },  
  { 
    name: routeNames.todo,
    component: TodoScreen,
  },
];