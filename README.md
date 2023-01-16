# React Native

## 개발 환경 세팅

### 라이브러리 설치

```
npm install -g expo-cli
expo init MyApp

npx react-native init MyApp --template react-native-template-typescript@6.12.10
```

### 환경변수

```
ANDROID_HOME = SDK 폴더 경로
Path -> 새로 만들기 -> %ANDROID_HOME%platform-tools
Path -> 새로 만들기 -> C:/Users/{user}/AppData/Local/Android/Sdk
```

Android Studio 실행 없이 AVD 실행

```
%ANDROID_HOME%\emulator\emulator -avd (AVD명)
```

`android` 폴더 내에 `local.properties` 파일 생성 후 아래 내용 작성

```
sdk.dir = C:/Users/{user}/AppData/Local/

// 역슬래시 X
```

### 디바이스

`adb devices` 명령어 결과

- `device` : 연결 및 승인 완료
- `unauthorized` : 연결은 되었으나 승인되지 않음

## 각 환경별 비교 및 예시

---

### Components / Android / iOS / Web

- `<View>` / <`ViewGroup`> / <`UIView`> / A non-scrolling `<div>`
- `<Text>` / `<ImageView>` / <`UIImageView`> / `<p>`
- `<Image>` / `<TextView>` / `<UITextView>` / `<img>`
- `<ScrollView>` / `<ScrollView>` / `<UIScrollView>` / `<div>`
- `<TextInput>` / `<EditText>` / `<UITextField>` / `<input type="text">`

### 추가 정보

`<ScrollView>`는 데이터 전체를 한 번에 렌더링하지만,  
`<FlatList>`는 화면에 보이는 요소만 렌더링  
`<SectionList>`는 분할된 데이터 세트로 렌더링

```js
<SectionList sections={[
    {title: "D", data: ["Devin", "Dan", "Dominic"]},
    {title: "J", data: ["Joon", "Jane", "Joel"]}
]}>
```

`<Image>`태그 사용시 `<Image source={{uri:"이미지경로"}}>`  
or `<Image source={require("이미지경로")}>`  
`<Button>`태그에서 `onClick()`이벤트는 `onPress()`  
`<TextInput>`태그에서 `onChange()`이벤트는 `onChangeText()`  
`<TextInput>`태그에서 `value`옵션은 `defaultValue`

## Style

react native는 `px, rem` 등과 같은 단위를 따로 붙이지 않음

## Platform module

---

### `Platform.OS`

각 플랫폼별 옵션을 줄 수 있음

```js
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 200 : 100,
});
```

### `Platform.Version`

버전별 코딩이 가능

**Android**

```js
import { Platform } from "react-native";

if (Platform.Version === 25) {
  console.log("Running on Nougat!");
}
```

**iOS**

```js
import { Platform } from "react-native";

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log("Work around a change in behavior");
}
```

## 폴더 구조

---

[Project Structure](https://www.reactnative.express/app/project_structure)

- Small : 간단한 사이트 프로젝트
- Medium : 팀 단위로 작업
- Large : 여러 팀이 함께 작업

`/screens` : 화면 단위 컴포넌트  
`/navigation` : 화면 전환과 관련된 컴포넌트  
`/api` : 통신 관련 데이터  
`/assets` : 이미지나 폰트  
`/hooks` : custom hook 파일  
`/reducer` : reducer 함수  
`/theme` : 테마 컬러나 mixin 등 앱 전체적으로 사용할 수 있는 데이터  
`/util` : 앱 전체적으로 사용 가능한 간단한 함수

### Small

```
MyApp
├── components
│   ├── Avatar.js
│   ├── Button.js
│   └── List.js
└── App.js
```

### Medium

```
MyApp
├── components
│   ├── buttons
│   │   ├── RoundButton.js
│   │   └── SquareButton.js
│   ├── cards
│   │   ├── ArticleCard.js
│   │   ├── ImageCard.js
│   │   └── VideoCard.js
│   ├── Avatar.js
│   └── List.js
├── screens
│   ├── Feed.js
│   ├── Search.js
│   ├── Post.js
│   ├── Reply.js
│   ├── Profile.js
│   └── Settings.js
├── navigation
│   ├── RootStackNavigator.js
│   └── ProfileTabNavigator.js
└── App.js
```

or

```
MyApp
├── api
│   ├── twitter.js
│   ├── facebook.js
│   └── instagram.js
├── assets
│   ├── app-icon.png
│   └── splash-screen.png
├── hooks
│   ├── useInterval.js
│   └── useLogin.js
├── reducers
│   ├── posts.js
│   ├── users.js
│   └── tweets.js
├── theme
│   ├── colors.js
│   ├── textStyles.js
│   └── spacing.js
├── utils
│   ├── generateUuid.js
│   └── formatCurrency.js
└── ...
```

### Large

```
MyApp
├── modules
│   ├── accounts
│   │   ├── components
│   │   │   ├── UserProfile.js
│   │   │   └── LoginInput.js
│   │   ├── screens
│   │   │   ├── Profile.js
│   │   │   ├── Login.js
│   │   │   └── Deactivate.js
│   │   ├── utils
│   │   │   └── formatAccountName.js
│   │   └── App.js
│   ├── growth
│   │   ├── components
│   │   ├── screens
│   │   ├── utils
│   │   └── App.js
│   ├── privacy
│   │   ├── components
│   │   ├── screens
│   │   ├── utils
│   │   └── App.js
│   └── shared
│       ├── components
│       │   ├── Avatar.js
│       │   ├── Button.js
│       │   └── List.js
│       └── utils
│           └── format.js
└── App.js
```

function Example() {
return (
<NativeBaseProvider>
<Box
        bg="primary.600"
        py="4"
        px="3"
        borderRadius="5"
        rounded="md"
        width={375}
        maxWidth="100%">
<HStack justifyContent="space-between">
<Box justifyContent="space-between">
<VStack space="2">
<Text fontSize="sm" color="white">
Today @ 9PM
</Text>
<Text color="white" fontSize="xl">
Let's talk about avatar!
</Text>
</VStack>
<Pressable
              rounded="xs"
              bg="primary.400"
              alignSelf="flex-start"
              py="1"
              px="3">
<Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white">
Remind me
</Text>
</Pressable>
</Box>
<Image
source={{
              uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
            }}
alt="Aang flying and surrounded by clouds"
height="100"
rounded="full"
width="100"
/>
</HStack>
</Box>
</NativeBaseProvider>
);
}

```

```
