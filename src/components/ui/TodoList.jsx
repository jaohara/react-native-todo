import { FlatList, StyleSheet, View } from "react-native";

import StyledText from "./StyledText";
import useTheming from "../../hooks/useTheming";

const TodoList = ({ lists = [] }) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.backgroundAlt,
      borderRadius: theme.borderRadiusSmall,
      padding: theme.padding,
    }
  });

  return (
    <View style={style.wrapper}>
      <StyledText>
        TodoList Placeholder!
      </StyledText>
    </View>
  );
};

export default TodoList;
