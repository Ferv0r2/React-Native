# React Native

## 라이브러리 설치

```
1)
npm install -g expo-cli
expo init 프로젝트명

2)
npm install -g create-react-native-app
create-react-native-app 프로젝트명
```

## 환경변수

```
ANDROID_HOME = SDK 폴더 경로
Path -> 새로 만들기 -> %ANDROID_HOME%platform-tools
Path -> 새로 만들기 -> C:/Users/{사용자명}/AppData/Local/Android/Sdk
```

Android Studio 실행 없이 AVD 실행

```
%ANDROID_HOME%\emulator\emulator -avd (AVD명)
```

`android` 폴더 내에 `local.properties` 파일 생성 후 아래 내용 작성

```
sdk.dir = C:/Users/{사용자명}/AppData/Local/

// 역슬래시 X
```
