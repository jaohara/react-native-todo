import { Button, TouchableOpacity, StyleSheet } from "react-native";

import useTheming from "../../hooks/useTheming";

const StyledButton = ({
  onPress,
  title,
}) => {
  const theme = useTheming();

  return (
    <Button 
      title={title}
      onPress={onPress}
    />
  );
};

export default StyledButton;
