import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Wizard, Steps, Step, WithWizard } from "react-multistep-wizard";
import "./styles.css";
import One from "./Pages/One";
import Two from "./Pages/Two";
import Three from "./Pages/Three";
import Four from "./Pages/Four";
import Five from "./Pages/Five";

const steps = [1, 2, 3, 4, 5];

const App = () => {
  const [step, setStep] = React.useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <One />;
      case 2:
        return <Two />;
      case 3:
        return <Three />;
      case 4:
        return <Four />;
      case 5:
        return <Five />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>React Multistep Wizard </h1>
      <Wizard
        externalOverrides={{
          currentStep: step,
          jump: (p) => setStep(p),
          previous: () => setStep((step) => step - 1),
          next: () => setStep((step) => step + 1),
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
                      currentStep === step ? "bg-blue-500 text-white" : ""
                    }  rounded-full  hover:bg-white hover:text-black`}
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
                <div className="lg:w-2/5 md:w-5/3 sm:w-5/5">
                  {setCurrentStep(step)}
                  {renderStepContent(step)} {/* Render the step content */}
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
