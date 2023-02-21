import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icon";
import { RemoteImage } from "../components/RemoteImage";
import { Typography } from "../components/Typography";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export const ImageDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();
  const [downloading, setDownloading] = useState(false);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      if (permissionResult.status === "deined") return;
      if (permissionResult.status === "undetermined") {
        const requestResult = await MediaLibrary.requestPermissionsAsync();
        if (requestResult === "denied") {
          setDownloading(false);
          return;
        }

        const asset = await MediaLibrary.createAssetAsync(uri);
        const album = await MediaLibrary.createAlbumAsync(
          "MyFirstAlbum",
          asset,
          false
        );
      }
    } catch (err) {}

    setDownloading(false);
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>
      </Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RemoteImage
          url={route.params.url}
          width={width}
          height={width * 1.2}
        />
      </View>

      <Button onPress={onPressDownload}>
        <View
          style={{
            paddingBottom: 24,
            backgroundColor: "black",
          }}
        >
          <View
            style={{
              height: 52,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {downloading ? (
              <ActivityIndicator />
            ) : (
              <>
                <Typography color={"white"}>DOWNLOAD</Typography>
                <Icon name="download" size={24} color="white" />
              </>
            )}
          </View>
        </View>
      </Button>
    </View>
  );
};
