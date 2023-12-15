import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useLocalization } from "../hooks/useLocalization";

export default function ModalScreen() {
  const { localization } = useLocalization();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{localization.developer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
