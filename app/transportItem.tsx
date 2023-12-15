import { Button } from "@rneui/base";
import { useLocalSearchParams } from "expo-router";
import { Linking, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { YandexMap } from "../components/YandexMap";
import { Avatar } from "@rneui/themed";
import { useLocalization } from "../hooks/useLocalization";
import { TransportType } from "../api/models";

export default function TransportItemScreen() {
  const { localization } = useLocalization();
  const params = useLocalSearchParams();
  const pressCall = (number: string | number) =>
    Linking.openURL(`tel:///${number}`);

  const transportTypeSwitch = (item: string) => {
    switch (item) {
      case TransportType.cargo:
        return localization.carsTypeLong.cargo;
      case TransportType.passenger:
        return localization.carsTypeLong.passenger;
      case TransportType.specialized:
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
          rounded
          source={{ uri: String(params.photo) }}
          size={120}
        />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.subTitle}>{transportTypeSwitch(params.type.toString())}</Text>
        <Text style={styles.subTitle}>{params.driverName}</Text>
        <Button
          style={styles.button}
          title={localization.call}
          onPress={() => pressCall(params.driverNumber.toString())}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    
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
  button: { marginBottom: 32 },

});
