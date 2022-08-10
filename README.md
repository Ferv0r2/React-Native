# React Native

## 라이브러리 설치

```
1)
npm install -g expo-cli
expo init {프로젝트명}
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

## 디바이스

`adb devices` 명령어 결과

- `device` : 연결 및 승인 완료
- `unauthorized` : 연결은 되었으나 승인되지 않음
