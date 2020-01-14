import React, { Component } from "react";
import { AsyncStorage, StyleSheet, Text, View, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import Presidents from "./data/presidentsJson";
import Quotes from "./data/quotes";
import { getImage } from "./functions/getImage";
import MainMenu from "./components/MainMenu";

export default class App extends Component {
  constructor(props) {
    super(props);
    // STATES
    this.state = {
      gameHasStarted: false,
      highscore: 0,
      score: 0,
      questionIndex: 1,
      question: "",
      answerIndex: [],
      correctAnswer: "",
      imageQuestion: false
    };

    // Binds all the methods
    this.handlePlay = this.handlePlay.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.questionMaker = this.questionMaker.bind(this);
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.getRandomWithManyExclusions = this.getRandomWithManyExclusions.bind(
      this
    );
  }

  async componentDidMount() {
    await this.retrieveHighscore();
  }

  // Stores the highscore in asyncstorage
  storeHighscore = async () => {
    try {
      await AsyncStorage.setItem("HIGHSCORE", this.state.highscore.toString()); // Stores the highscore with the key HIGHSCORE, must be a string and is therefore converted
    } catch (error) {
      console.log(error);
    }
  };

  // Gets the current highscore which is saved in asyncstorage
  retrieveHighscore = async () => {
    try {
      var highscore = await AsyncStorage.getItem("HIGHSCORE"); // The highscore is fetched with the key HIGHSCORE
      highscore = JSON.parse(highscore); // Pareses the highscore to an INT
      if (highscore !== null || highscore !== Nan) {
        this.setState({
          highscore: highscore + 1
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Updates the highscore if the score is bigger than the current highscore
  async updateHighscore() {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      });
      // Stores the highscore in asyncstorage
      await this.storeHighscore();
    }
  }

  // Called when the play button is pressed
  handlePlay() {
    // Makes sure the game has started and resets question index and score
    this.setState({
      gameHasStarted: !this.state.gameHasStarted,
      questionIndex: 1,
      score: 0
    });
    // Questions are made
    this.questionMaker(Presidents);
  }

  // Called when the back button is pressed
  handleBack() {
    this.updateHighscore(); // Check if highscore needs updating
    this.setState({
      imageQuestion: false,
      gameHasStarted: !this.state.gameHasStarted
    });
  }

  // Called when answer is given
  handleAnswer(answer) {
    // If the answer is correct the score is updated
    if (answer === this.state.correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    // Question number is updated and resets imagequestion
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      imageQuestion: false
    });
    this.updateHighscore();
    // Called to create a new question
    this.questionMaker(Presidents);
  }

  // Sets the correct answer state
  setCorrectAnswer(correctAnswer) {
    this.setState({
      correctAnswer: correctAnswer
    });
  }

  //Creates the questions for the quiz. As of now there is only 2 different quiz questions, chosen at random.
  questionMaker(presidents) {
    var rand = Math.floor(Math.random() * 3 + 1); // Randomizes question 1 or 2
    var president = Math.floor(Math.random() * presidents.length); // Randomizes selected president for the correct answer
    var excludeListAnswersIndex = []; // Exclude list for use in getRandomWithManyExclusives(). This is used for randomizing where the correct answer is
    var excludeListAnswers = []; // Same as above only for randomizing the incorrect answer

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

        // Sets the current question
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

        // Sets the current question
        this.setState({
          question:
            "When did " + presidents[president].president + " sit in office?"
        });
        break;
      case 3:
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

        // Sets the current question
        this.setState({
          question: "Which president is this?",
          imageQuestion: true
        });

        break;
      default:
        return "Error";
    }
  }

  // Returns a random int and makes sure it is unique
  getRandomWithManyExclusions(excludeList) {
    var rand = null;

    while (rand === null || excludeList.includes(rand)) {
      rand = Math.round(Math.random() * (4 - 1));
    }
    excludeList.push(rand);
    return rand;
  }

  // RENDER
  render() {
    // If the game has not started the main menu is rendered
    if (!this.state.gameHasStarted) {
      return (
        <MainMenu
          highscore={this.state.highscore}
          imageQuestion={this.state.imageQuestion}
          handlePlay={this.handlePlay}
        />
      );
    }
    // If the game has started, render the question and answers
    else {
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
            {this.state.imageQuestion ? (
              <View>
                {getImage(this.state.correctAnswer, this.state.imageQuestion)}
              </View>
            ) : null}
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
              onPress={this.handleBack}
            ></Button>
          </View>
        </View>
      );
    }
  }
}

// Stylesheet (Should be moved to seperate file)
const styles = StyleSheet.create({
  menu: {
    flex: 1
  },
  menuContainer: {
    flex: 2,
    alignItems: "center",
    marginTop: 70
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
