import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import { useCookie } from "./src/hooks/useCookie";
import { useTranslation } from "./src/hooks/useTranslation";
import Button from "./src/Button";
import LoadingView from "./src/LoadingView";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { t, locale, setLocale, format } = useTranslation();
  const { cookieKey } = useCookie();
  const [fontLoaded] = useFonts({
    RIDIBatang: require("./assets/fonts/RIDIBatang.otf"),
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cookieKey !== "") {
      setIsLoaded(true);
    }
  }, [cookieKey]);

  useEffect(() => {
    if (locale !== null && fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [locale, fontLoaded]);

  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  const todayText = format(t("today_is"), y, m, d);

  const locales = ["en", "es", "ja", "ko", "zh"];

  if (!isLoaded) return <LoadingView />;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay={false}
        source={require("./assets/background.json")}
        resizeMode="cover"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Text style={styles.todayText}>{todayText}</Text>
          <Text style={styles.cookieText}>{t(cookieKey)}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            {locales.map((item) => (
              <Button
                key={item}
                onPress={() => setLocale(item)}
                isSelected={locale === item}
                text={item.toUpperCase()}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  topContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  todayText: {
    fontFamily: "RIDIBatang",
    position: "absolute",
    top: 70,
    fontSize: 13,
    color: "#8b658f",
  },
  cookieText: {
    fontFamily: "RIDIBatang",
    fontSize: 22,
    color: "#372538",
    textAlign: "center",
    marginHorizontal: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },
});
