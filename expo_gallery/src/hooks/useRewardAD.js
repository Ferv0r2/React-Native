import React, { useState, useEffect } from "react";
import { AdMobRewarded } from "expo-ads-admob";
import { Platform } from "react-native";

const UNIT_ID = Platform.select({
  ios: __DEV__
    ? "ca-app-pub-3940256099942544/1712485313"
    : process.env.ADMOB_IOS_APP_ID,
  android: __DEV__
    ? "ca-app-pub-3940256099942544/5224354917"
    : process.env.ADMOB_ANDROID_APP_ID,
});

export const useRewardAD = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRewarded, setIsRewarded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () => {
      setIsLoaded(true);
    });
    AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
      setIsRewarded(true);
    });
    AdMobRewarded.addEventListener("rewardedVideoDidDismiss", () => {
      setIsClosed(true);
    });

    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  const loadRewardAD = async () => {
    await AdMobRewarded.setAdUnitID(UNIT_ID);
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };

  const resetIsRewardedIsClosed = () => {
    setIsLoaded(false);
    setIsRewarded(false);
    setIsClosed(false);
  };

  return {
    loadRewardAD,
    isLoaded,
    isRewarded,
    isClosed,
    resetIsRewardedIsClosed,
  };
};
