import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Button } from "react-native-elements";
import { getImage } from "../functions/getImage";
import styles from "../styles/inGameStyles";

export default class InGame extends Component {
  render() {
    return (
      <View style={styles.game}>
        <Header
          centerComponent={{
            text: "US Presidents Quiz",
            style: {
              color: "#fff",
              fontSize: 20
            }
          }}
        ></Header>
        <Text style={styles.score}>
          Score: {this.props.score}/{this.props.questionIndex - 1}
        </Text>
        <View style={styles.gameContainer}>
          <Text style={styles.questionIndex}>
            Question {this.props.questionIndex}
          </Text>
          <Text style={styles.questionText}>{this.props.question}</Text>
          {this.props.imageQuestion ? (
            <View>
              {getImage(this.props.correctAnswer, this.props.imageQuestion)}
            </View>
          ) : null}
          <Button
            style={styles.answersBtn}
            title={this.props.answerIndex[0]}
            onPress={() => this.props.handleAnswer(this.props.answerIndex[0])}
          ></Button>
          <Button
            style={styles.answersBtn}
            title={this.props.answerIndex[1]}
            onPress={() => this.props.handleAnswer(this.props.answerIndex[1])}
          ></Button>
          <Button
            style={styles.answersBtn}
            title={this.props.answerIndex[2]}
            onPress={() => this.props.handleAnswer(this.props.answerIndex[2])}
          ></Button>
          <Button
            style={styles.answersBtn}
            title={this.props.answerIndex[3]}
            onPress={() => this.props.handleAnswer(this.props.answerIndex[3])}
          ></Button>
          <Button
            style={styles.backBtn}
            title="Back"
            onPress={this.props.handleBack}
          ></Button>
        </View>
      </View>
    );
  }
}
