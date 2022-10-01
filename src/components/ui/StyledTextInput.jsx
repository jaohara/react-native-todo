import { Text, TextInput, StyleSheet } from "react-native"

import useTheming from "../../hooks/useTheming";

const StyledTextInput = ({ 
  onBlur,
  onChange,
  onSubmitEditing,
  placeholder,  
  value,
}) => {
  const theme = useTheming();

  const style = StyleSheet.create({
    text: {
  
    }
  });

  // TextInput.cursorColor should be specified from theme.accent
  //    What do I pick for TextInput.selectionColor?
  return (
    <Text style={style.text}>
      I'm a placeholder!
    </Text>
  );
};


export default StyledTextInput;