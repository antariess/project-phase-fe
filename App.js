import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import LoginRegisterScreen from "./components/LoginRegisterScreen";
import Home from "./components/Home";
import * as api from './api';
import Loading from "./components/Loading"

export default class App extends Component<Props> {
  state = { 
    currentUser: { username: "mouse1" }, 
    register: false,
    loading: false
  };

  // signup
  signup = async (email, username) => {
    const newUser = {email, username}
    await api.createUser(newUser)
      .then((user) => {
        this.setState({ 
          currentUser: {
          username:user.username
          },
          loading: false
         });
      })
      .catch(err => {
        console.log(err)
        this.toggleLoading()
      })
  };

  //login
  login = async (email) => {
    await api.fetchUserByEmail(email)
    .then((user) => {
      this.setState({
        currentUser: {
          username:user.username,
        },
        loading: false  
      })
    })
    .catch(err => {
      console.log('catch me')
      console.log(err)
      this.toggleLoading()
    })
  }

  logout = () => {
    this.setState({
      currentUser: { username: '' }
    })
  }

  // displays a default loading screen when loading content
  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  } 

  render() {
    const { loading } = this.state
    return (
      <View style={styles.container}>
        {this.state.currentUser.username === "" && <LoginRegisterScreen login={this.login} signup={this.signup} loading={this.toggleLoading}/>}
        {this.state.currentUser.username !== "" && <Home logout={this.logout}/>}
        {loading && <Loading />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(0,220,90)"
  }
});


