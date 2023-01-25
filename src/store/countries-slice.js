import { createSlice } from "@reduxjs/toolkit";

const countriesInitialState = {
  questions: [],
  questionsQuantity: 0,
  isFunFactsShown: false,
  isQuestionnaireOver: false,
  score: 0,
  isFunFactShown: false,
  questionIndex: 0,
  isStartPlaying: false,
  difficultyLevel: null,
  levelForMatchExplanation: null,
  startTime: 0,
  endTime: 0,
  questionsToServer: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: { ...countriesInitialState },
  reducers: {
    manipulateCountries(state, { payload }) {
      state.questions = payload.questions;
      state.questionsQuantity = payload.questionsQuantity;
      state.startTime = new Date().getTime();
    },
    setMatchExplanation(state, { payload: level }) {
      state.levelForMatchExplanation = level;
    },
    nullify(state) {
      state.score = 0;
      state.questionsQuantity = 0;
      state.isFunFactShown = false;
      state.questions = [];
      state.questionIndex = 0;
      state.isStartPlaying = false;
      state.difficultyLevel = null;
      state.isQuestionnaireOver = false;
      state.questionsToServer = [];
    },
    setIsFunFacts(state, { payload: isFunFactsShown }) {
      state.isFunFactsShown = isFunFactsShown;
    },
    showFunFact(state) {
      state.isFunFactShown = true;
    },
    hideFunFact(state) {
      state.isFunFactShown = false;
    },
    nextCountryHandler(state) {
      state.questionIndex = state.questionIndex + 1;
    },
    startPlaying(state, { payload: difficultyLevel }) {
      state.isStartPlaying = true;
      state.difficultyLevel = difficultyLevel;
    },
    caseTrueAnswer(state, { payload: trueCountry }) {
      const question = state.questionsToServer.find(
        (question) => question.trueCountry === trueCountry
      );
      if (!question) {
        state.score++;
        const questionObj = { isCorrect: true, trueCountry };
        state.questionsToServer = [...state.questionsToServer, questionObj];
      }
    },
    caseFalseAnswer(state, { payload }) {
      const question = state.questionsToServer.find(
        (question) => question.falseCountry === payload.falseCountry
      );
      if (!question) {
        const questionObj = {
          isCorrect: false,
          trueCountry: payload.trueCountry,
          falseCountry: payload.falseCountry,
        };
        state.questionsToServer = [...state.questionsToServer, questionObj];
      }
    },
    caseAnswer(state, { payload }) {
      const { isCorrect, trueCountry, falseCountry, isFinalQuestion } = payload;
      const questionObj = { isCorrect, trueCountry };
      if (falseCountry) {
        questionObj.falseCountry = falseCountry;
      }
      state.questionsToServer = [...state.questionsToServer, questionObj];
      if (isFinalQuestion) {
        state.endTime = new Date().getTime();
        state.isQuestionnaireOver = true;
      }
    },
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
