const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
//console.log(messages);
import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(1);

  const nextHandler = () => {
    console.log(step);
    {
      step <= 2 ? setStep((c) => c + 1) : "";
    }
  };

  const previousHandler = () => {
    console.log(step);
    {
      step > 1 ? setStep((c) => c - 1) : "";
    }
  };

  // const step = 2;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}> 3</div>
      </div>
      <div className="message">
        Step{step}: {messages[step - 1]}
      </div>
      <div className="buttons">
        <button
          onClick={previousHandler}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={nextHandler}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          {step < 3 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
}
