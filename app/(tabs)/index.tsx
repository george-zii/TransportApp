import {
  ActivityIndicator,
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { useQuery } from "@tanstack/react-query";
import { getTransport } from "../../api/transport";
import { Transport } from "../../api/models";
import { Link } from "expo-router";
import {
  Avatar,
  ButtonGroup,
  Card,
  ListItem,
  Tab,
  TabView,
  Image,
} from "@rneui/themed";
import { useState } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import { YandexMap } from "../../components/YandexMap";

export default function TabOneScreen() {
  const { localization } = useLocalization();
  const carsQuery = useQuery({
    queryKey: ["transport"],
    queryFn: getTransport,
  });
  const [typeIndex, setTypeIndex] = useState(0);
  const [listView, setListView] = useState(false);
  const renderTransport: ListRenderItem<Transport> = ({ item }) => {
    return (
      <Link
        href={{
          pathname: "/transportItem",
          params: {
            id: item.id,
            title: item.title,
            type: item.type,
            latitude: item.latitude,
            longitude: item.longitude,
            driverName: item.driverName,
            driverNumber: item.driverNumber,
            photo: item.photo,
          },
        }}
        style={{ margin: 16 }}
      >
        <Avatar rounded source={{ uri: item.photo }} size={80} />
        <View>
          <Text style={{ fontSize: 40 }}>{item.title}</Text>
          <Text style={{ fontSize: 20 }}>{item.driverNumber}</Text>
        </View>
      </Link>
    );
  };
  return (
    <>
      <ButtonGroup
        buttons={[
          localization.carsTypeShort.cargo,
          localization.carsTypeShort.passenger,
          localization.carsTypeShort.specialized,
        ]}
        selectedIndex={typeIndex}
        onPress={(value) => {
          setTypeIndex(value);
        }}
      />
      {listView ? (
        <YandexMap
          points={
            carsQuery.data?.data
              ? carsQuery.data?.data.filter(
                  (item) => item.type === typeIndex + 1
                )
              : []
          }
        />
      ) : (
        <>
          <View style={styles.container}>
            {carsQuery.isLoading ? <ActivityIndicator /> : null}
            {carsQuery.isError ? <Text>{localization.networkError}</Text> : null}
            <FlatList
              data={carsQuery.data?.data.filter(
                (item) => item.type === typeIndex + 1
              )}
              renderItem={renderTransport}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </>
      )}
      <View>
        <Button
          title={
            listView ? localization.viewTypes.list : localization.viewTypes.map
          }
          onPress={() => setListView(!listView)}
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
