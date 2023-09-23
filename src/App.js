import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <StepMessage step={1}>
        <p>Pass in content </p>
        <p>✌</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read Children prop</p>
        <p>😎</p>
      </StepMessage> */}

      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  // const step = 1;
  //1.add a new state variable
  //2.use it in code
  //3.update the state

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test] = useState({name:"Jonas"})

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    //setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    //setStep(step + 1);

    //BAD PRACTICE
    //test.name = "Fred"
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">
            Step {step}:{messages[step - 1]}
            {/* {test.name} 
          </p> */}

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3> {children}
    </div>
  );
}
