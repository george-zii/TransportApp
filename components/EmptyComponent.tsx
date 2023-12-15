import { View, Text, StyleSheet } from "react-native";

export const EmptyComponent: React.FC<{emptyText: string}> = ({emptyText}) => {
    return (
      <View style={styles.container}>
        <Text>{emptyText}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
container: {
    flex: 1, 
    justifyContent: 'center', 
    marginVertical: 16,
},
});