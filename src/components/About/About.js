import React, { useRef } from "react";
import LinkNewTab from "./LinkNewTab";

import classes from "./About.module.css";

import worldPexelsImg from "../../imgs/pexels-andrea-piacquadio-3769138.jpg";
import manOnEarthStorysetImg from "../../imgs/Study abroad-bro.png";

import { scrollingTop } from "../../utils/utils-react";

const About = () => {
  const matchSummaryRef = useRef();

  return (
    <div className={classes.page}>
      <img
        src={worldPexelsImg}
        alt={worldPexelsImg}
        className={classes["top-img"]}
      />
      <div className={classes["page-with-no-img-top"]}>
        <h1>About</h1>
        <div>
          <p>
            Since I was a small child, I used to check and learn everything I
            didn't know, one of the main topics was geography.
          </p>
          <p>
            I was looking for hours on Google Maps and on Wikipedia, learning
            about new countries, flags, capital cities, etc.
          </p>
          <p>
            When I got better at coding, I thought why not build a flags game
            with different difficulty levels and with an analysis of your past
            games that would enable you to learn from your past mistakes?
          </p>
          <p>And that is what made me create this project.</p>
        </div>
        <div>
          <h2>This project is built with the MERN stack:</h2>
          <ul className={classes["stack-list"]}>
            <li>
              <button className="button-28">
                <div>Database</div>
                <LinkNewTab
                  className={classes.technology}
                  data="MongoDB"
                  href="https://university.mongodb.com/"
                />
              </button>
            </li>
            <li>
              <button className="button-28">
                <div>Server</div>
                <div>
                  <LinkNewTab
                    className={classes.technology}
                    data="Node.js"
                    href="https://nodejs.org/en/"
                  />
                  <span>, </span>
                  <LinkNewTab
                    className={classes.technology}
                    data="Express.js"
                    href="https://expressjs.com/"
                  />
                  <span>, </span>
                  <LinkNewTab
                    className={classes.technology}
                    data="Mongoose.js"
                    href="https://mongoosejs.com/"
                  />
                </div>
              </button>
            </li>
            <li>
              <button className="button-28">
                <div>Client</div>
                <LinkNewTab
                  className={classes.technology}
                  data="React"
                  href="https://reactjs.org/docs/getting-started.html"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className={classes["section-1"]}>
          <img
            className={classes["story-set-img"]}
            src={manOnEarthStorysetImg}
            alt="Study abroad bro png"
          />
          <p>
            I started this project by finding an{" "}
            <LinkNewTab
              data="external API"
              href="https://medium.com/@khallilbailey/internal-vs-external-apis-2e54ef28659a"
            />{" "}
            -{" "}
            <LinkNewTab
              data="https://restcountries.com/v3.1/all"
              href="https://restcountries.com/v3.1/all"
            />
            .
          </p>
          <p>
            In the "server.js" file, I created a server with some function to
            transform the original data from the API. I filtered each country
            Item with mapping in order to get only the necessary country's data
            for the game. I converted the API's fields 'name', 'flag', and
            'numericCode' to fields 'name', 'flag', and 'id' respectively.
          </p>
          <p>
            I used another external source –{" "}
            <LinkNewTab
              data="https://www.sporcle.com/games/RobPro/flags-of-the-world-progressively-harder"
              href="https://www.sporcle.com/games/RobPro/flags-of-the-world-progressively-harder"
            />
            . A flag quiz that contains all countries' flags and is ordered
            based on how known it is.
          </p>
          <p>
            Based on the data aforesaid, I created another field for each
            country object – 'flagKnown' (type of number) – which represents how
            much the country's flag is known. For example, Japan has the most
            known country flag, which is why Japan's country object field of
            'flagKnown' gets the number 1. In addition, all dependent
            territories, which have the least known flags hold in their field of
            'flagKnown' the last number – 197.
          </p>
          <p>
            At this point, I saved all the data in the server in a JSON file
            ("countries.json"), consisting of an object with one field –
            'countries'- that holds an array of objects. Each object represents
            a country, which holds the fields – 'name' – country's name
            (string), 'flag' – country's flag image link (string), 'id'
            (string), and 'flagKnown' (number).
          </p>
          <p>
            First of all, I created a the "/countries-elrom"{" "}
            <LinkNewTab
              data="route"
              href="https://expressjs.com/en/guide/routing.html"
            />{" "}
            with "GET" function. That gets the countries array from the
            "countries.json" file. Later on, I wanted to create various quizzes
            with different difficulty levels. Inserted two optional{" "}
            <LinkNewTab
              data="query parameters"
              href="https://masteringjs.io/tutorials/express/query-parameters"
            />{" "}
            to the API I build – 'minknown' and 'maxknown' (type of numbers).
            These queries enable filtering the countries array before it gets to
            the client, and return only countries (objects) that whose field of
            'flagKnown' (number) is in the range created by the queries –
            'minknown' and 'maxknown'. Later, I added another{" "}
            <LinkNewTab
              data="query parameter"
              href="https://masteringjs.io/tutorials/express/query-parameters"
            />{" "}
            named "quantity" (type of number) which randomly chooses the same
            quantity of countries from the filtered countries' array according
            to the "minknown" and "maxknown"{" "}
            <LinkNewTab
              data="query parameters"
              href="https://masteringjs.io/tutorials/express/query-parameters"
            />{" "}
            .
          </p>
          <p>
            I started building the client with React. The app was built with a
            main page - "Layout" component, that renders a navigation bar -
            "Navigation" component, and a "main" HTML element that renders the
            app's content with its different routes through the{" "}
            <LinkNewTab
              data="react-router version 6"
              href="https://reactrouter.com/en/main/start/tutorial"
            />{" "}
            . The navigation bar holds three options – the default two are
            "Geography Game" and "About", and an optional one – the user's name,
            which toggles a menu with "Score", "Profile", "Badges" and "Log Out"
            options.
          </p>
        </div>
        <div className={classes["section-1"]}>
          <p>
            When the user logs in, he navigates automatically to "Main"
            component, which renders the game's rules through the "GameRules"
            component, buttons for the different difficulty levels through the
            "Levels" component, and a button for starting to play the game
            through the "MainLevel" component.
          </p>
          <p>
            By clicking the upper difficulty level buttons, the user chooses his
            level to play with. By clicking the "start playing" button, an{" "}
            <LinkNewTab
              data="http 'GET' request"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
            />{" "}
            in being triggered to the server using a self-built{" "}
            <LinkNewTab
              data="custom hook"
              href="https://reactjs.org/docs/hooks-custom.html"
            />{" "}
            named "useHttpAxios" for every http request on the app, through the
            API with the{" "}
            <LinkNewTab
              data="routes"
              href="https://expressjs.com/en/guide/routing.html"
            />{" "}
            of "/countries-elrom", with the optional{" "}
            <LinkNewTab
              data="query parameters"
              href="https://masteringjs.io/tutorials/express/query-parameters"
            />{" "}
            of "minknown" and "maxknown" and returns a filtered array of the
            countries (type of object).
          </p>
          <ul>
            <li>
              - Used <LinkNewTab data="redux" href="https://redux.js.org/" />{" "}
              and{" "}
              <LinkNewTab
                data="redux-toolkit"
                href="https://redux-toolkit.js.org/"
              />{" "}
              to build global variables that hold the questions' array and the
              questions' quantity.
            </li>
            <li>
              - The "questions" variable is an array, and its items are arrays,
              which represent questions. Each question array consists of four
              items, which are objects, and each one of those objects represents
              a country.
            </li>
            <li>
              - Sending the desirable questions' quantity and then extracting
              countries randomly four times the desirable questions' quantity.
              If I would want 10 questions than the function will extract 40
              countries. That is done using a{" "}
              <LinkNewTab
                data="helper function"
                href="https://www.geeksforgeeks.org/javascript-helper-methods/"
              />{" "}
              named "getMeRandomElements", which gets 2 parameters – an array
              and a desirable number, and returns an object that contains 3
              arrays:
              <ul>
                <li>An array with all the randomly selected items.</li>
                <li>
                  An array with the indices of the randomly selected items.
                </li>
                <li>An array with all the items that were not selected.</li>
              </ul>
            </li>
            <li>
              - Every question (array) – holds four countries (objects), and
              every one of these gets a new field, 'isCountry' (boolean) that
              represents the right country according to the flag. Hence, one
              object includes 'isCountry' with a true value, and the other three
              hold a false value.
            </li>
            <li>
              - Then, I realized the function in the redux-toolkit slice has a
              problem, I am actually limited in the quantity of the questions
              because every time I execute the function I am extracting the
              desirable questions' quantity times four. That means I can only
              play with questions' quantity its maximum is the countries
              quantity divided by four.
            </li>
            <li>
              - I changed the API in such a way it will return me an object
              which contains two arrays:
              <ul>
                <li>
                  o 'potentialTrueCountries' – an array with all the countries
                  that are in the{" "}
                  <LinkNewTab
                    data="query parameters"
                    href="https://masteringjs.io/tutorials/express/query-parameters"
                  />{" "}
                  range of "minwidth" and "maxwidth".
                </li>
                <li>
                  o 'potentialFalseCountries' – an array with all the countries
                  that does not stand in the{" "}
                  <LinkNewTab
                    data="query parameters"
                    href="https://masteringjs.io/tutorials/express/query-parameters"
                  />{" "}
                  range of "minwidth" and "maxwidth".
                </li>
                <li>
                  Then, I changed the function in the slice. This function will
                  randomly choose a number of countries from the true countries
                  array based on the desirable questions' quantity and add to
                  each country (object) a field of 'isCountry' with a true
                  value.
                </li>
                <li>
                  o All the non-randomly selected countries add up to the
                  'potentialFalseCountries' array.
                </li>
                <li>
                  {" "}
                  o For each true country object we create an array which
                  represents a question. It gets three randomly selected country
                  objects with a field of 'isCountry' with a false value.
                </li>
                <li>
                  o Then the questions array is saved in the redux store. -
                  Later on, I decided it would be smarter to transmit all the
                  functionality done in a{" "}
                  <LinkNewTab
                    data="redux-toolkit reducer"
                    href="https://redux-toolkit.js.org/api/createslice#reducers"
                  />{" "}
                  to a function that will do the same on the server.
                </li>
                <li>
                  o This function does almost the same functionality as in the
                  client. It returns an array that represents the questions.
                  Evert question item is an array of four objects, every object
                  item representing an option for the particular question, so
                  that the first option, is always the true one the three after
                  are wrong ones.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={classes["section-1"]}>
          <h2>Similarity</h2>
          <div>
            <p>
              I tried to think about how to make the harder difficulty levels
              more complicated for the user.
            </p>
            <p>
              Many of the countries' flags are very similar, some have small
              similarities and some have more.
            </p>
            <p>
              Therefore, I added two fields to each country in the countries
              array in the "countries.json" file – "similarity1" and
              "similarity2". Both of them hold an array of strings and every
              string is actually representing another country's "id" field, its
              flag is similar to the country mentioned above flag. "similarity1"
              holds the ids of the countries, which their flag are the most
              similar, and "similarity2" holds the less similar ones.
            </p>
            <p>
              So, I inserted another optional{" "}
              <LinkNewTab
                data="query parameter"
                href="https://masteringjs.io/tutorials/express/query-parameters"
              />{" "}
              to the "GET" function in the "/countries-elrom"{" "}
              <LinkNewTab
                data="route"
                href="https://expressjs.com/en/guide/routing.html"
              />{" "}
              , named "similarities", and it accepts the number 1 or 2.
            </p>
            <p>
              If "similarities" accepts the value of 1, a false country flag
              option is being chosen - one country's id field from both
              country's object's fields arrays, "similarity1" and "similarity2".
            </p>
            <p>
              If "similarities" accepts the value of 2, a false country option
              is being chosen - one country's id field from the country's object
              field array – "similarity1" and another false country option is
              being chosen from all the ids the both country object's array
              field of "similarity1" and "similarity2", not including the first
              chosen false country option.
            </p>
            <p>
              This enables on the harder difficulty levels to get at each
              question false country names options that their flag is similar to
              the appearing flag of the true country option, what is making it
              harder for the player to choose the right country name option for
              the flag.
            </p>
          </div>
        </div>
        <div className={classes["section-1"]}>
          <h2>Authentication</h2>
          <div className={classes["section-2"]}>
            <h3>Server</h3>
            <div>
              <p>
                On the same time, I built the "/auth-elrom"{" "}
                <LinkNewTab
                  data="route"
                  href="https://expressjs.com/en/guide/routing.html"
                />{" "}
                , which includes functions for signing in, signing up, updating
                the user data, changing his or her password, sending a
                verification code to the user's email, and verifying this code.
              </p>
              <p>
                I used{" "}
                <LinkNewTab
                  data="jsonwebtoken"
                  href="https://www.npmjs.com/package/jsonwebtoken"
                />{" "}
                for signing a{" "}
                <LinkNewTab
                  data="token"
                  href="https://auth0.com/docs/secure/tokens/json-web-tokens"
                />{" "}
                while signing up and signing in,{" "}
                <LinkNewTab
                  data="bcryptjs"
                  href="https://www.npmjs.com/package/bcryptjs"
                />{" "}
                for encoding and decoding the password, and{" "}
                <LinkNewTab
                  data="nodemailer"
                  href="https://nodemailer.com/about/"
                />{" "}
                for sending the code verification to the user's email.
              </p>
              <p>
                Almost every function in the server has a middleware function
                named "authenticateTokenMW" that accepts as an argument the
                user's token that is being saved on local storage, which is
                created every time the user is logging in.
              </p>
            </div>
          </div>
          <div className={classes["section-2"]}>
            <h3>Client</h3>
            <div>
              <p>
                Using{" "}
                <LinkNewTab
                  data="context"
                  href="https://reactjs.org/docs/context.html"
                />{" "}
                I create "authContext" and an "AuthContextProvider"{" "}
                <LinkNewTab
                  data="provider"
                  href="https://reactjs.org/docs/context.html#contextprovider"
                />{" "}
                component, which is wrapping the "App" component.
              </p>
              <p>
                In the user's login, a user's token is returned to the client
                and saved on the browser's{" "}
                <LinkNewTab
                  data="session storage"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
                />{" "}
                .
              </p>
              <p>
                The existence of the{" "}
                <LinkNewTab
                  data="token"
                  href="https://auth0.com/docs/secure/tokens/json-web-tokens"
                />{" "}
                conditionally set the "isLoggedIn" variable in the context.
                "isLoggedIn" enabled to create a special component -
                "ProtectedRoute" that checks if there is a{" "}
                <LinkNewTab
                  data="token"
                  href="https://auth0.com/docs/secure/tokens/json-web-tokens"
                />{" "}
                and the user is actually logged in. And only if he is logged in
                those routes and matching components can be accessed and
                rendered.
              </p>
            </div>
          </div>
        </div>
        <div className={classes["section-1"]}>
          <h2>Forms</h2>
          <div>
            <p>
              In every form in this app, I used{" "}
              <LinkNewTab
                data="Formik"
                href="https://formik.org/docs/overview"
              />{" "}
              , an{" "}
              <LinkNewTab
                data="open source library"
                href="https://www.heavy.ai/technical-glossary/open-source-library"
              />{" "}
              for handling forms.
            </p>
            <p>
              Additionally, in some of the forms, I used{" "}
              <LinkNewTab data="Yup" href="https://www.npmjs.com/package/yup" />
              , which is another open source library and a schema builder for
              value parsing and validation.
            </p>
          </div>
        </div>
        <div className={classes["section-1"]}>
          <h2>The Game</h2>
          <div>
            <p>
              On the "Main" component, in the child component "Levels", the user
              chooses his desirable level, which{" "}
              <LinkNewTab
                data="dispatches"
                href="https://react-redux.js.org/api/hooks#usedispatch"
              />{" "}
              action and activates the "startPlaying"{" "}
              <LinkNewTab
                data="reducer"
                href="https://redux-toolkit.js.org/api/createslice#reducers"
              />{" "}
              at the "countries slice" and sets the – "isStartPlaying",
              "difficultyLevel" and "startTime" fields at the{" "}
              <LinkNewTab
                data="initial state slice"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              . Then when he clicks on the "start playing" button for starting
              the current match.
            </p>
            <p>
              That is done by sending an{" "}
              <LinkNewTab
                data="http 'GET' request"
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
              />{" "}
              to the server with parameters of "quantity" – number of questions,
              "minwidth" – the minimum "flagKnown" field of a country object
              from "countries.json" file, "maxwidth" – the maximum "flagKnown"
              field of a country object from "countries.json" file and
              "similarities" – as described above in "Similarity" section.
            </p>
            <p>
              After sending the request, all the data that return from the
              request - the questions and their quantity are saved respectively
              on the redux-toolkit slice "countries slice" on the{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              fields of "questions" and "questionsQuantity".
            </p>
          </div>
          <div className={classes["section-2"]}>
            <h3>Question</h3>
            <p>
              The app{" "}
              <LinkNewTab
                data="navigates programmatically"
                href="https://reactrouter.com/en/main/hooks/use-navigate"
              />{" "}
              to the "/question" route, which renders the "Question" component.
            </p>
            <p>
              In that component, appears on the top – a stopwatch that was built
              using a self-built{" "}
              <LinkNewTab
                data="custom hook"
                href="https://reactjs.org/docs/hooks-custom.html"
              />{" "}
              "useStopWatch", the number of the question (from the field
              "questionsQuantity" field using{" "}
              <LinkNewTab
                data="useSelector"
                href="https://react-redux.js.org/api/hooks#useselector"
              />{" "}
              ) from the number of the total question (from the field
              "questionIndex" field using{" "}
              <LinkNewTab
                data="useSelector"
                href="https://react-redux.js.org/api/hooks#useselector"
              />{" "}
              ), and the difficulty level of the particular match (from the
              field "difficultyLevel" field using{" "}
              <LinkNewTab
                data="useSelector"
                href="https://react-redux.js.org/api/hooks#useselector"
              />{" "}
              ).
            </p>
            <p>
              In its middle, it renders the "Flag" component, which presents the
              country flag, and the player has to guess its correct country
              name.
            </p>
            <p>
              At its bottom, the country names options appear through the
              "Options" and "Option" components.
            </p>
            <p>
              In the "Options" component, there is a{" "}
              <LinkNewTab
                data="helper function"
                href="https://www.geeksforgeeks.org/javascript-helper-methods/"
              />{" "}
              , named "shuffleArray", that accepts as argument an array of the
              particular question's options When the player chooses an option,
              the option is checked. If the country name in the option the
              player chose belongs to the flag above, the player is correct. If
              the player chose the correct option, this option will change its
              background to green and it will{" "}
              <LinkNewTab
                data="dispatch"
                href="https://react-redux.js.org/api/hooks#usedispatch"
              />{" "}
              an action named "caseTrueAnswer", which will update some of the
              slice's{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              fields – "score" will increase by one, a question object will be
              created with the field of "isCorrect" that holds "true" and a
              "trueCountry" field that holds correct country's id. Eventually,
              this question object is pushed to the slice's{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              field of "questionsToServer". If the player chose the wrong
              option, the option will change its background to red, the correct
              one will change its style to greenish and it will{" "}
              <LinkNewTab
                data="dispatch"
                href="https://react-redux.js.org/api/hooks#usedispatch"
              />{" "}
              an action named "caseFalseAnswer", which will update the slice's{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              field "questionsToServer" – a question object will be created with
              the field of "isCorrect" that holds "false", a "trueCountry" field
              that holds correct country's id and a "falseCountry" field that
              holds false country's id (the options chosen by the player).
              Eventually, this question object is pushed to the slice's{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              field of "questionsToServer" (type of array).
            </p>
            <p>
              After choosing the option, there is a delay that is done by{" "}
              <LinkNewTab
                data="setTimeOut"
                href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
              />{" "}
              , and after it a modal appears above the question with a fun fact
              about the correct country – "FunFactModal" component. This
              component is rendered through a{" "}
              <LinkNewTab
                data="portal"
                href="https://reactjs.org/docs/portals.html"
              />{" "}
              .
            </p>
            <p>
              When closing the fun fact, a check is being made – if
              "questionIndex" from (using{" "}
              <LinkNewTab
                data="useSelector"
                href="https://react-redux.js.org/api/hooks#useselector"
              />{" "}
              from "countries slice", "questionIndex" field in the slice's{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              ) is not equal to "questionsQuantity" (using{" "}
              <LinkNewTab
                data="useSelector"
                href="https://react-redux.js.org/api/hooks#useselector"
              />{" "}
              from "countries slice", " questionsQuantity " field in the slice's{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              ) minus one. That check means, if the player haven't made it yet
              to his last question on the particular match. As long he didn't, a
              dipatch is made with action with "nextCountryHandler", that
              increases the questions' index by one – "questionIndex" field. And
              the question's data is being changed by accessing the new data
              using{" "}
              <LinkNewTab
                data="useSelector"
                href="https://react-redux.js.org/api/hooks#useselector"
              />{" "}
              and accessing suitable fields in the{" "}
              <LinkNewTab
                data="initial state slice"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              that were mentioned above.
            </p>
            <p>
              But, if this is the player's final question, an{" "}
              <LinkNewTab
                data="http 'PATCH' request"
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH"
              />{" "}
              is sent to the server with the{" "}
              <LinkNewTab
                data="route"
                href="https://expressjs.com/en/guide/routing.html"
              />{" "}
              of "/score-elrom", and a body with fields of the difficulty level,
              the start time and the end time of the match with milliseconds,
              the match's score, and "questionsToServer" array. That request,
              updated the player's data, at the appropriate level field at this
              score field (type of object).
            </p>
            <p>
              As long as "Question" component is rendered, a check is made at
              his render cycle, if the questions' (from "questions" field in{" "}
              <LinkNewTab
                data="initial state"
                href="https://redux-toolkit.js.org/api/createslice#initialstate"
              />{" "}
              of "countries slice") length is equal to zero, which means there
              are no questions and that means that to user probably refreshed
              his page. If they are, the app{" "}
              <LinkNewTab
                data="programmatically navigates"
                href="https://reactrouter.com/en/main/hooks/use-navigate"
              />{" "}
              to the route "/welcome", which renders the "Main" component, and
              includes the levels and the start playing buttons.
            </p>
          </div>
          <div className={classes["section-2"]} ref={matchSummaryRef}>
            <h3>Match Summary</h3>
            <div>
              <p>
                After sending the previously mentioned request,{" "}
                <LinkNewTab
                  data="programmatic navigation"
                  href="https://reactrouter.com/en/main/hooks/use-navigate"
                />{" "}
                is done to "/match-summary", which renders "MatchSummary"
                component.
              </p>
              <p>
                On the first render of this component, an{" "}
                <LinkNewTab
                  data="http 'GET' request"
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
                />{" "}
                is done to the{" "}
                <LinkNewTab
                  data="route"
                  href="https://expressjs.com/en/guide/routing.html"
                />{" "}
                "/score-elrom/game-summary" with one parameter of the level the
                player played in his last match.
              </p>
              <p>
                This request return some data and analysis about his last match
                on the level he played in, like – duration, improvement relative
                to prior matches, what and he how he answered every question in
                the match, etc.
              </p>
            </div>
          </div>
        </div>
        <div className={classes["section-1"]}>
          <h2>User's info</h2>
          <div>
            <p>
              Through hovering his name, the user toggles a menu with the
              options of "Profile", "Scores", "Badges" and "Log Out", as already
              mentioned above.
            </p>
            <div className={classes["section-2"]}>
              <h3>Scores</h3>
              <div>
                <p>
                  Scores By clicking the "Score" option, the user is navigating
                  to the route "/scores", which renders the "Scores" component.
                </p>
                <p>
                  At this component, three main child components are rendered –
                  "UserLevels", "MatchSummary" and "ScoreTable".
                </p>
                <p>
                  At the first render of this component, using useEffect, an{" "}
                  <LinkNewTab
                    data="http 'GET' request"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
                  />{" "}
                  is sent to the{" "}
                  <LinkNewTab
                    data="route"
                    href="https://expressjs.com/en/guide/routing.html"
                  />{" "}
                  of "/score-elrom". This request returns multiple data and
                  analyses on each of the user's levels and an array of the
                  users with their scores by order.
                </p>
                <p>
                  <strong
                    className={classes["link-in-page"]}
                    onClick={() => scrollingTop(matchSummaryRef)}
                  >
                    "MatchSummary"
                  </strong>{" "}
                  is the same as mentioned above.
                </p>
              </div>
              <div>
                <div className={classes["section-3"]}>
                  <h4>UserLevels</h4>
                  <div>
                    <p>
                      This component accepts in his{" "}
                      <LinkNewTab
                        data="props"
                        href="https://reactjs.org/docs/components-and-props.html"
                      />{" "}
                      the data and analyses on each of the user's levels
                      ("userLevelsData" – a type of array) and the equivalent
                      set state function.
                    </p>
                    <p>
                      It renders the mapping of the above state array of
                      "userLevelsData", with returning the "UserLevel"
                      component.
                    </p>
                    <p>
                      Each "UserLevel" can be toggled separately through{" "}
                      <LinkNewTab
                        data="conditional rendering"
                        href="https://reactjs.org/docs/conditional-rendering.html"
                      />{" "}
                      , and all the components of "UserLevel" can be toggled
                      together.
                    </p>
                    <p>
                      "UserLevel", renders two components – "UserLevelTitle" and
                      "UserLevelData".
                    </p>
                    <p>"UserLevelTitle" renders the level as a title.</p>
                    <p>
                      "UserLevelData" renders about the user's particular level,
                      the average score, total score and total games. In
                      addition, it renders two components of "BestScoreOrTime".
                      Through{" "}
                      <LinkNewTab
                        data="props"
                        href="https://reactjs.org/docs/components-and-props.html"
                      />{" "}
                      the first one renders "bestScore" and the second one
                      renders "bestTime".
                    </p>
                    <p>
                      Both of these components render a button that toggles and{" "}
                      <LinkNewTab
                        data="conditionally renders"
                        href="https://reactjs.org/docs/conditional-rendering.html"
                      />{" "}
                      the mapping of an array of user's best scores/ best times
                      at this particular level, through the
                      "BestScoreOrTimeUnit" component.
                    </p>
                    <p>
                      Also, "UserLevelData" renders the component
                      "LevelFailsPieChart", which renders a pie chart, and each
                      slice in it represents the equivalent number of fails in a
                      particular country's flag at this level. In order to build
                      this pie chart I used{" "}
                      <LinkNewTab
                        data="recharts"
                        href="https://recharts.org/en-US/guide"
                      />{" "}
                      , an{" "}
                      <LinkNewTab
                        data="open source library"
                        href="https://www.heavy.ai/technical-glossary/open-source-library"
                      />{" "}
                      library.
                    </p>
                    <p>
                      When the user hovers over a slice, a tooltip is rendered,
                      with a table in it of all the incorrect countries he chose
                      instead of the correct country that matched the flag.
                    </p>
                  </div>
                </div>
                <div className={classes["section-3"]}>
                  <h4>ScoreTable</h4>
                  <div>
                    <p>
                      This component accepts the "usersWithScores" state through
                      the{" "}
                      <LinkNewTab
                        data="prop"
                        href="https://reactjs.org/docs/components-and-props.html"
                      />{" "}
                      of "scoresTable".
                    </p>
                    <p>
                      It renders a table of all the signed users to the app by
                      the order of their average score in each level, with all
                      of their average scores at each level presented.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes["section-2"]}>
              <h3>Badges</h3>
              <div>
                <p>
                  By clicking the "Badges" option, the user is navigating to the
                  route "/badges", which renders the "Badges" component.
                </p>
                <p>
                  At this component, on his first render cycle, an{" "}
                  <LinkNewTab
                    data="http 'GET' request"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
                  />{" "}
                  is sent to the{" "}
                  <LinkNewTab
                    data="route"
                    href="https://expressjs.com/en/guide/routing.html"
                  />{" "}
                  "/badges-elrom" and returns an array of objects of the user's
                  badges.
                </p>
                <p>
                  From this response, we get data on every badge, if the user
                  got it, when did he achieved it, and with what score and time.
                </p>
                <p>
                  According to these data, a suitable UI for each badge is
                  renders.
                </p>
              </div>
            </div>
          </div>
          <div className={classes["section-2"]}>
            <h3>Profile</h3>
            <div>
              <p>
                By clicking the "Profile" option, the user is navigating to the
                route "/profile", which renders the "Profile" component.
              </p>
              <p>
                At this component, three child components are{" "}
                <LinkNewTab
                  data="conditionally rendered"
                  href="https://reactjs.org/docs/conditional-rendering.html"
                />{" "}
                – "PersonalInfo", "UpdatePersonalInfo" and "ChangePassword".
              </p>
              <p>
                "PersonalInfo" renders the user's info – email, first name and
                last name.
              </p>
              <p>
                "UpdatePersonalInfo" renders a form with a button and inputs
                with already existing values of email, first name and last name.
                In this component, the user can update his personal info by
                sending an{" "}
                <LinkNewTab
                  data="http 'PUT' request"
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT"
                />{" "}
                to the{" "}
                <LinkNewTab
                  data="route"
                  href="https://expressjs.com/en/guide/routing.html"
                />{" "}
                of "/auth-elrom".
              </p>
              <p>
                "ChangePassword" renders a form with a button and two password
                inputs (second for verification), where the user can update his
                password. In this component, the user can update his password by
                sending an{" "}
                <LinkNewTab
                  data="http 'PUT' request"
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT"
                />{" "}
                to the{" "}
                <LinkNewTab
                  data="route"
                  href="https://expressjs.com/en/guide/routing.html"
                />{" "}
                of "/auth-elrom/change-password".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
