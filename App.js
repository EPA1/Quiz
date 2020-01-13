import React, { Component } from "react";
import { AsyncStorage, StyleSheet, Text, View, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import Presidents from "./dataJson/presidentsJson";
import Quotes from "./dataJson/quotes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameHasStarted: false,
      highscore: 0,
      score: 0,
      questionIndex: 1,
      question: "",
      answerIndex: [],
      correctAnswer: "",
      loading: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.questionMaker = this.questionMaker.bind(this);
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.getRandomWithManyExclusions = this.getRandomWithManyExclusions.bind(
      this
    );
  }

  handleClick() {
    this.handleLoading();
    this.questionMaker(Presidents);
    this.handleLoading();
    this.setState({
      gameHasStarted: !this.state.gameHasStarted,
      questionIndex: 1
    });
  }

  handleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  handleAnswer(answer) {
    if (answer === this.state.correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      questionIndex: this.state.questionIndex + 1
    });
    this.questionMaker(Presidents);
  }

  setCorrectAnswer(correctAnswer) {
    this.setState({
      correctAnswer: correctAnswer
    });
  }

  questionMaker(presidents) {
    var rand = Math.floor(Math.random() * 2 + 1);
    var president = Math.floor(Math.random() * presidents.length);
    var excludeListAnswersIndex = [];
    var excludeListAnswers = [];

    switch (rand) {
      case 1:
        //Answer 1 (CORRECT)
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] = presidents[president].president;

        this.setCorrectAnswer(presidents[president].president);

        //Answer 2
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[
            this.getRandomWithManyExclusions(excludeListAnswers)
          ].president;

        //Answer 3
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[
            this.getRandomWithManyExclusions(excludeListAnswers)
          ].president;

        //Answer 4
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[
            this.getRandomWithManyExclusions(excludeListAnswers)
          ].president;

        this.setState({
          question:
            "Who was president from \n" +
            presidents[president].took_office +
            " - " +
            presidents[president].left_office +
            "?"
        });
        break;
      case 2:
        //Answer 1 (CORRECT)
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[president].took_office +
          " - " +
          presidents[president].left_office;

        this.setCorrectAnswer(
          presidents[president].took_office +
            " - " +
            presidents[president].left_office
        );

        //Answer 2
        var RandPres1 = this.getRandomWithManyExclusions(excludeListAnswers);
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[RandPres1].took_office +
          " - " +
          presidents[RandPres1].left_office;

        //Answer 3
        var RandPres2 = this.getRandomWithManyExclusions(excludeListAnswers);
        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[RandPres2].took_office +
          " - " +
          presidents[RandPres2].left_office;

        //Answer 4

        var RandPres3 = this.getRandomWithManyExclusions(excludeListAnswers);

        this.state.answerIndex[
          this.getRandomWithManyExclusions(excludeListAnswersIndex)
        ] =
          presidents[RandPres3].took_office +
          " - " +
          presidents[RandPres3].left_office;

        this.setState({
          question:
            "When did " + presidents[president].president + " sit in office?"
        });
        break;
      case 3:
        return "Which president is this?";
        break;
      default:
        return "Error";
    }
  }

  getRandomWithManyExclusions(excludeList) {
    var rand = null;

    while (rand === null || excludeList.includes(rand)) {
      rand = Math.round(Math.random() * (4 - 1));
    }
    excludeList.push(rand);
    return rand;
  }

  render() {
    if (!this.state.gameHasStarted) {
      var quoteRand = Math.floor(Math.random() * Quotes.length);

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
          <Text style={styles.highscore}>
            HighScore: {this.state.highscore}
          </Text>
          <View style={styles.menuContainer}>
            <Image
              style={styles.menuImage}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg"
              }}
            ></Image>
            <Text style={styles.welcome}>
              To get started, press the Play button
            </Text>
            <Button
              buttonStyle={styles.playBtn}
              onPress={this.handleClick}
              title="Play"
              loading={this.state.loading}
            ></Button>
            <Text style={styles.quoteText}>
              "{Quotes[quoteRand].quoteText}"
            </Text>
            <Text style={styles.quoteAuthor}>
              - {Quotes[quoteRand].quoteAuthor}
            </Text>
          </View>
        </View>
      );
    } else {
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
            Score: {this.state.score}/{this.state.questionIndex - 1}
          </Text>
          <View style={styles.gameContainer}>
            <Text style={styles.questionIndex}>
              Question {this.state.questionIndex}
            </Text>
            <Text style={styles.questionText}>{this.state.question}</Text>
            <Button
              style={styles.answersBtn}
              title={this.state.answerIndex[0]}
              onPress={() => this.handleAnswer(this.state.answerIndex[0])}
            ></Button>
            <Button
              style={styles.answersBtn}
              title={this.state.answerIndex[1]}
              onPress={() => this.handleAnswer(this.state.answerIndex[1])}
            ></Button>
            <Button
              style={styles.answersBtn}
              title={this.state.answerIndex[2]}
              onPress={() => this.handleAnswer(this.state.answerIndex[2])}
            ></Button>
            <Button
              style={styles.answersBtn}
              title={this.state.answerIndex[3]}
              onPress={() => this.handleAnswer(this.state.answerIndex[3])}
            ></Button>
            <Button
              style={styles.backBtn}
              title="Back"
              onPress={this.handleClick}
            ></Button>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1
  },
  menuImage: {
    marginTop: 50,
    height: 250,
    width: 200
  },
  menuContainer: {
    flex: 2,
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    marginTop: 50
  },
  playBtn: {
    margin: 30,
    width: 150
  },
  quoteText: {
    margin: 20,
    fontStyle: "italic",
    textAlign: "center"
  },
  quoteAuthor: {},
  highscore: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 20
  },
  score: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 20
  },
  game: {
    flex: 1
  },
  gameContainer: {
    flex: 2,
    alignItems: "center"
  },
  questionIndex: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30
  },
  questionText: {
    fontSize: 20,
    margin: 30,
    textAlign: "center"
  },
  answersBtn: {
    margin: 20,
    width: 200
  },
  backBtn: {
    margin: 20
  }
});
