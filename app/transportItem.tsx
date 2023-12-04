import { Button } from "@rneui/base";
import { useLocalSearchParams } from "expo-router";
import { Linking, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { YandexMap } from "../components/YandexMap";
import { Avatar } from "@rneui/themed";
import { useLocalization } from "../hooks/useLocalization";

export default function TransportItemScreen() {
  const { localization } = useLocalization();
  const params = useLocalSearchParams();
  const pressCall = (number: string | number) =>
    Linking.openURL(`tel:///${number}`);
  const pressWrite = (number: string | number, text: string) =>
    Linking.openURL(`whatsapp://send?text=${text}&phone=${number}`);

  const func = (item: string) => {
    switch (item) {
      case "1":
        return localization.carsTypeLong.cargo;
      case "2":
        return localization.carsTypeLong.passenger;
      case "3":
        return localization.carsTypeLong.specialized;
      default:
        break;
    }
  };

  console.log("params", params);
  return (
    <>
      <YandexMap
        points={[
          {
            id: Number(params.id),
            title: String(params.title),
            type: Number(params.type),
            latitude: String(params.latitude),
            longitude: String(params.longitude),
            driverName: String(params.driverName),
            driverNumber: String(params.driverNumber),
            photo: String(params.photo),
          },
        ]}
      />
      <View style={styles.container}>
        <Avatar
          containerStyle={{ margin: 16 }}
          rounded
          source={{ uri: String(params.photo) }}
          size={120}
        />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.subTitle}>{func(params.type.toString())}</Text>
        <Text style={styles.subTitle}>{params.driverName}</Text>
        <View style={{ flexDirection: "row", marginVertical: 8 }}>
          <Button
            style={styles.button}
            title={localization.call}
            onPress={() => pressCall(params.driverNumber.toString())}
          />
          <Button
            style={styles.button}
            title={localization.write}
            onPress={() =>
              pressWrite(
                params.driverNumber.toString(),
                localization.whatsappText
              )
            }
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: { marginHorizontal: 8 },
});
