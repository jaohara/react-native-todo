import { FlatList, StyleSheet } from "react-native";

import StyledText from "./StyledText";
import useTheming from "../../hooks/useTheming";

const TodoList = ({}) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.backgroundAlt,
      borderRadius: theme.borderRadius,
    }
  });

  return (
    <StyledText>
      TodoList Placeholder!;
    </StyledText>
  );
};

export default TodoList;
