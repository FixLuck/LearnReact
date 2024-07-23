
import { useState } from "react"
import Header from "./components/Header"
import TableResult from "./components/TableResult"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment"



function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })


  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prev => { //new state depend on the old state, so that once we change the one value, the other value is not change
      return {
        ...prev,
        [inputIdentifier]: +newValue //note: add dấu cộng để chuyển data type từ string thành number
      }
    })
  }




  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid &&
        <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <TableResult input={userInput} />}
    </>

  )
}

export default App
