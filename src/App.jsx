import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const inputIsValid = userInput.duration >=1;

  function handleChange(inpuutIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inpuutIdentifier]: +newValue, // [inputIdentifier] will dynamically get either of userInputs(ie InitialInvestment n all) and it's value is set to be newValue entered by the user
        // the + symbol in +newValue will convert the string to a number value as newValue by default is treated as a string
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onHandleChange={handleChange} OnUserInput={userInput} />
      {inputIsValid ?<Results input={userInput} /> : undefined}
    </>
  );
}

export default App;
