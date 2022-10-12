import { FlatList, StyleSheet, View } from "react-native";

import StyledText from "./StyledText";
import useTheming from "../../hooks/useTheming";
import OverviewListItem from "./OverviewListItem";

const OverviewList = ({ lists = [] }) => {
  const theme = useTheming();

  //TODO: Big idea here - what if this expands the entire
  // width of the screen, with no horizontal padding? It would
  // be like its own subsection

  const style = StyleSheet.create({
    wrapper: {
      // backgroundColor: theme.backgroundAlt,
      borderRadius: theme.borderRadiusSmall,
      // padding: theme.padding,
      // paddingLeft: theme.padding/2,
      // paddingRight: theme.padding/2,
      // paddingBottom: theme.padding - theme.margin
    }
  });

  const renderItem = ({ item }) => (
    <OverviewListItem
      title={item.name}
      //onPress={}
    />
  );

  return (
    <FlatList
      data={lists}
      renderItem={renderItem}
      style={style.wrapper}
    />
    // <View style={style.wrapper}>
    //   <StyledText>
    //     OverviewList Placeholder!
    //   </StyledText>
    // </View>
  );
};

export default OverviewList;
