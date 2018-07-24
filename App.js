import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Register from "./components/Register";

export default class App extends Component<Props> {
  state = { currentUser: {}, register: false };

  login = (username, password) => {
    // authentification logic
    // .then(...
    this.setState({ currentUser: {} });
  };

  switchLoginRegister = () => {
    this.setState({ register: !this.state.register });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: "90%",
            height: 90,
            marginTop: 30
          }}
          source={require("./assets/logos/splashLogo.png")}
        />
        <View style={styles.card}>
          {!this.state.register && (
            <Login switchLoginRegister={this.switchLoginRegister} />
          )}

          {this.state.register && (
            <Register switchLoginRegister={this.switchLoginRegister} />
          )}
        </View>
        <Image
          style={{
            width: "100%",
            height: 150
          }}
          source={require("./assets/images/cloud.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(0,220,90)"
  },
  welcome: {
    fontFamily: "Pacifico-Regular",
    fontSize: 80,
    color: "#F5FCFF",
    textAlign: "center",
    margin: 0
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  card: {
    backgroundColor: "#F5FCFF",
    width: "90%",
    alignItems: "center",
    marginTop: 20,
    padding: 30,
    elevation: 10,
    borderRadius: 5
  }
});
