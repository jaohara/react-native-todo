import ScreenView from "../ui/ScreenView";
import StyledText from "../ui/StyledText";
import StyledButton from "../ui/StyledButton";

import { routes, routeNames } from "../../routes";

import useTheming from "../../hooks/useTheming";

/*
  TODO: Add some buttons for quick nav between the screens to confirm that they are all rendering.

  After this, wrap up and commit nav, then make a new 

*/

const renderNavButtons = ({}) => {
  
};

const TestScreen = ({ navigation }) => {
  const theme = useTheming();
  const navTo = (route) => navigation.navigate(route);

  const buttonProps = [
    {
      key: "login-button",
      onPress: () => navTo(routeNames.login),
      title: "Login",
    },
    {
      key: "overview-button",
      onPress: () => navTo(routeNames.overview),
      title: "Overview",
    },
    {
      key: "todo-button",
      onPress: () => navTo(routeNames.todo),
      title: "Todo",
    },
  ];

  const renderNavButtons = () => buttonProps.map(props => (<StyledButton {...props} />));

  return (
    <ScreenView>
      {renderNavButtons()}
    </ScreenView>
  );
};

export default TestScreen;