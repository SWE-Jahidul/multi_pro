import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Wizard, Steps, Step, WithWizard } from "react-multistep-wizard";

const steps = [1, 2, 3, 4, 5];

const App = () => {
  const [step, setStep] = React.useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <h1>React Multistep Wizard ok</h1>
      <Wizard
        externalOverrides={{
          currentStep: step,
          jump: (p) => setStep(p),
          previous: () => setStep((step) => step - 1),
          next: () => setStep((step) => step + 1)
        }}
      >
        <div>
          <WithWizard>
            {(ctx) =>
              steps.map((step) => (
                <button
                  style={{ width: "40px", fontSize: "25px", margin: "16px" }}
                  key={step}
                  onClick={() => ctx.jump(step)}
                >
                  <div
                    className={`${
                      currentStep === step ? "bg-blue-500" : "invisible"
                    } my-4 rounded-full`}
                  >
                    <div className="text-white"> Icon </div>
                  </div>
                  <div
                    className={`${
                      currentStep === step ? "bg-green-600" : ""
                    } border rounded-full border-gray-800 hover:bg-blue-500 hover:text-white`}
                  >
                    {step}
                  </div>
                </button>
              ))
            }
          </WithWizard>
        </div>
        <Steps>
          {steps.map((step) => (
            <Step key={step}>
              {(ctx) => (
                <div>
                  {/* <h1 style={{ textAlign: "center" }}>{step}</h1> */}
                  {setCurrentStep(step)}
                  <p>Current Step {currentStep} </p>
                  
                </div>
              )}
            </Step>
          ))}
        </Steps>
      </Wizard>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
