import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { appLocalization } from "../../store/store";
import { useState } from "react";
import { Button } from "@rneui/base";
import { globalLocalization } from "../../localization/localization";
import { useLocalization } from "../../hooks/useLocalization";
import { languages } from "../../api/base";

export default function TabTwoScreen() {
  const { localization } = useLocalization();
  const [ru, setRu] = useState(false);
  const switchLanguage = () => {
    appLocalization.setState(() => {
      return {
        state: {
          localization: ru ? globalLocalization.ru : globalLocalization.en,
        },
      };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{localization.changeLang}</Text>
      <Button
        title={ru ? languages.ru : languages.en}
        onPress={() => {
          setRu(!ru);
          switchLanguage();
        }}
      />
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
