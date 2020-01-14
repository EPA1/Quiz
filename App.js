import React, { Component } from "react";
import { AsyncStorage, StyleSheet, Text, View, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import Presidents from "./dataJson/presidentsJson";
import Quotes from "./dataJson/quotes";

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
    this.getImage = this.getImage.bind(this);
    this.HandlePlay = this.HandlePlay.bind(this);
    this.HandleBack = this.HandleBack.bind(this);
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

  // Gets an image based on the index parameter
  async getImage(index) {
    switch (index) {
      case 1:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/1.jpg")}
          ></Image>
        );
        break;
      case 2:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/2.jpg")}
          ></Image>
        );
        break;
      case 3:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/3.jpg")}
          ></Image>
        );
        break;
      case 4:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/4.jpg")}
          ></Image>
        );
        break;
      case 5:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/5.jpg")}
          ></Image>
        );
        break;
      case 6:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/6.jpg")}
          ></Image>
        );
        break;
      case 7:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/7.jpg")}
          ></Image>
        );
        break;
      case 8:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/8.jpg")}
          ></Image>
        );
        break;
      case 9:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/9.jpg")}
          ></Image>
        );
        break;
      case 10:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/10.jpg")}
          ></Image>
        );
        break;
      case 11:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/11.jpg")}
          ></Image>
        );
        break;
      case 12:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/12.jpg")}
          ></Image>
        );
        break;
      case 13:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/13.jpg")}
          ></Image>
        );
        break;
      case 14:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/14.jpg")}
          ></Image>
        );
        break;
      case 15:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/15.jpg")}
          ></Image>
        );
        break;
      case 16:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/16.jpg")}
          ></Image>
        );
        break;
      case 17:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/17.jpg")}
          ></Image>
        );
        break;
      case 18:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/18.jpg")}
          ></Image>
        );
        break;
      case 19:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/19.jpg")}
          ></Image>
        );
        break;
      case 20:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/20.jpg")}
          ></Image>
        );
        break;
      case 21:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/21.jpg")}
          ></Image>
        );
        break;
      case 22:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/22.jpg")}
          ></Image>
        );
        break;
      case 23:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/23.jpg")}
          ></Image>
        );
        break;
      case 24:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/24.jpg")}
          ></Image>
        );
        break;
      case 25:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/25.jpg")}
          ></Image>
        );
        break;
      case 26:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/26.jpg")}
          ></Image>
        );
        break;
      case 27:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/27.jpg")}
          ></Image>
        );
        break;
      case 28:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/28.jpg")}
          ></Image>
        );
        break;
      case 29:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/29.jpg")}
          ></Image>
        );
        break;
      case 30:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/30.jpg")}
          ></Image>
        );
        break;
      case 31:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/31.jpg")}
          ></Image>
        );
        break;
      case 32:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/32.jpg")}
          ></Image>
        );
        break;
      case 33:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/33.jpg")}
          ></Image>
        );
        break;
      case 34:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/34.jpg")}
          ></Image>
        );
        break;
      case 35:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/35.jpg")}
          ></Image>
        );
        break;
      case 36:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/36.jpg")}
          ></Image>
        );
        break;
      case 37:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/37.jpg")}
          ></Image>
        );
        break;
      case 38:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/38.jpg")}
          ></Image>
        );
        break;
      case 39:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/39.jpg")}
          ></Image>
        );
        break;
      case 40:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/40.jpg")}
          ></Image>
        );
        break;
      case 41:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/41.jpg")}
          ></Image>
        );
        break;
      case 42:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/42.jpg")}
          ></Image>
        );
        break;
      case 43:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/43.jpg")}
          ></Image>
        );
        break;
      case 44:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/44.jpg")}
          ></Image>
        );
        break;
      case 45:
        return (
          <Image
            style={
              this.state.imageQuestion ? styles.imageQuestion : styles.menuImage
            }
            source={require("./images/45.jpg")}
          ></Image>
        );
        break;
      default:
      // code block
    }
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
  HandlePlay() {
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
  HandleBack() {
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
          <Text style={styles.highscore}>
            HighScore: {this.state.highscore}
          </Text>
          <View style={styles.menuContainer}>
            <View>{this.getImage(imageRand)}</View>
            <Text style={styles.welcome}>
              To get started, press the Play button
            </Text>
            <Button
              buttonStyle={styles.playBtn}
              onPress={this.HandlePlay}
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
              <View>{this.getImage(this.state.correctAnswer)}</View>
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
              onPress={this.HandleBack}
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
  imageQuestion: {
    marginTop: 50,
    height: 250,
    width: 200
  },
  answersBtn: {
    margin: 20,
    width: 200
  },
  backBtn: {
    margin: 20
  }
});
