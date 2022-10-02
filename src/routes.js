import LoginScreen from "./components/screens/LoginScreen";
import OverviewScreen from "./components/screens/OverviewScreen";
import TodoScreen from "./components/screens/TodoScreen";
import TestScreen from "./components/screens/TestScreen";

export const routeNames = {
  login: "Login",
  overview: "Lists",
  test: "Test",
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
  {
    name: routeNames.test,
    component: TestScreen,
  },
];