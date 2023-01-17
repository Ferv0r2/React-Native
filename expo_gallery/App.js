import React, { useEffect } from "react";
import { StyleSheet, Platform, SafeAreaView, Alert } from "react-native";
import { useGallery } from "./src/hooks/useGallery";
import DropdownPicker from "./src/DropdownPicker";
import TextInputModal from "./src/TextInputModal";
import BigImageModal from "./src/BigImageModal";
import { useRewardAD } from "./src/hooks/useRewardAD";
import ImageList from "./src/ImageList";

export default function App() {
  const {
    imagesWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    textInputModalVisible,
    bigImageModalVisible,
    openTextInputModal,
    closeTextInputModal,
    openBigImageModal,
    closeBigImageModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownVisible,
    openDropdown,
    closeDropdown,
    albums,
    selectAlbum,
    deleteAlbum,
    selectedImage,
    selectImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  } = useGallery();
  const {
    loadRewardAD,
    isLoaded,
    isRewarded,
    isClosed,
    resetIsRewardedIsClosed,
  } = useRewardAD();

  useEffect(() => {
    if (isRewarded && isClosed) {
      openTextInputModal();
      resetIsRewardedIsClosed();
    }
  }, [isRewarded, isClosed]);

  const onPressOpenGallery = pickImage;
  const onPressWatchAD = loadRewardAD;
  const onPressAddAlbum = () => {
    if (albums.length >= 2) {
      Alert.alert("광고를 시청해야 앨범을 추가할 수 있습니다.", "", [
        {
          style: "cancel",
          text: "닫기",
        },
        {
          text: "광고 시청",
          onPress: onPressWatchAD,
        },
      ]);
      return;
    }

    openTextInputModal();
  };
  const onPressTextInputModalBackdrop = closeTextInputModal;
  const onPressBigImageModalBackdrop = closeBigImageModal;
  const onPressHeader = () => {
    isDropdownVisible ? closeDropdown() : openDropdown();
  };
  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropdown();
  };
  const onPressImage = (image) => {
    selectImage(image);
    openBigImageModal();
  };

  const onPressLeftArrow = moveToPreviousImage;
  const onPressRightArrow = moveToNextImage;

  const onLongPressAlbum = (albumId) => deleteAlbum(albumId);
  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onSubmitEditing = () => {
    if (!albumTitle) return;

    addAlbum();

    closeTextInputModal();
    resetAlbumTitle();
  };

  return (
    <SafeAreaView style={styles.container}>
      <DropdownPicker
        isDropdownVisible={isDropdownVisible}
        onPressHeader={onPressHeader}
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        albums={albums}
        onPressAlbum={onPressAlbum}
        onLongPressAlbum={onLongPressAlbum}
      />
      <TextInputModal
        modalVisible={textInputModalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressTextInputModalBackdrop}
      />
      <BigImageModal
        modalVisible={bigImageModalVisible}
        onPressBackdrop={onPressBigImageModalBackdrop}
        selectedImage={selectedImage}
        onPressLeftArrow={onPressLeftArrow}
        onPressRightArrow={onPressRightArrow}
        showPreviousArrow={showPreviousArrow}
        showNextArrow={showNextArrow}
      />

      <ImageList
        imagesWithAddButton={imagesWithAddButton}
        onPressOpenGallery={onPressOpenGallery}
        onPressImage={onPressImage}
        onLongPressImage={onLongPressImage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 36 : 0,
  },
});
