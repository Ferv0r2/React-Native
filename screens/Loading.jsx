import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text, Thumbnail } from "native-base";
const LoadingImage = require("../assets/loading.gif");

const Loading = () => {
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Thumbnail large source={LoadingImage} />
        <Text style={styles.title}>Metaoneer</Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3DAE2",
  },
  content: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
});

export default Loading;
