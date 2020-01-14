import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Button } from "react-native-elements";
import Quotes from "../data/quotes";
import { getImage } from "../functions/getImage";
import styles from "../styles/mainMenuStyles";

export default class MainMenu extends Component {
  render() {
    var quoteRand = Math.floor(Math.random() * Quotes.length); // Returns a random quote with author
    var imageRand = Math.floor(Math.random() * 45 + 1);

    return (
      <View style={styles.menu}>
        <Header
          centerComponent={{
            text: "US Presidents Quiz",
            style: {
              flex: 1,
              color: "#fff",
              fontSize: 20
            }
          }}
        ></Header>
        <Text style={styles.highscore}>HighScore: {this.props.highscore}</Text>
        <View style={styles.menuContainer}>
          <View>{getImage(imageRand, this.props.imageQuestion)}</View>
          <Text style={styles.welcome}>
            To get started, press the Play button
          </Text>
          <Button
            buttonStyle={styles.playBtn}
            onPress={this.props.handlePlay}
            title="Play"
          ></Button>
          <Text style={styles.quoteText}>"{Quotes[quoteRand].quoteText}"</Text>
          <Text style={styles.quoteAuthor}>
            - {Quotes[quoteRand].quoteAuthor}
          </Text>
        </View>
      </View>
    );
  }
}
