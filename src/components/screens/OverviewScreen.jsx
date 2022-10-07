import { Text, StyleSheet } from "react-native";
import ScreenView from "../ui/ScreenView";
import StyledText from "../ui/StyledText"
import HeaderText from "../ui/HeaderText";
import TodoList from "../ui/TodoList";
import UserDisplay from "../ui/UserDisplay";

import useTheming from "../../hooks/useTheming";
import useUser from "../../hooks/useUser";


const OverviewScreen = ({ navigation }) => {
  const theme = useTheming();
  const { user } = useUser();

  // navigation will probably need to be passed to the flatlist so that each item
  // in it can trigger a nav to the new todo list page
  return (
    <ScreenView>
      <UserDisplay />
      <HeaderText>Todo Lists</HeaderText>
    </ScreenView>
  );
};

export default OverviewScreen;