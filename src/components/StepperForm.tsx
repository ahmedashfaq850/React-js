import { useState } from "react";

const StepperForm = () => {
  const steps = [
    {
      step: 1,
      label: "Personal Information",
      component: () => <div>This is Step 1 Component</div>,
    },
    {
      step: 2,
      label: "Contact Information",
      component: () => <div>This is Step 2 Component</div>,
    },
    {
      step: 3,
      label: "Payment Information",
      component: () => <div>This is Step 3 Component</div>,
    },
    {
      step: 4,
      label: "Review",
      component: () => <div>This is Step 4 Component</div>,
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length ? prev + 1 : steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <div className="text-center h-full pt-[50px] m-5">
        <h1>Stepper Form</h1>
        <div className="flex justify-between p-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <p className={`${currentStep === step.step ? "active" : ""} ${currentStep > index +1 ? "complete" : ""}  circle`}>
                {currentStep > index + 1 ? "✅" : step.step}
              </p>
              <h3>{step.label}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          {steps[currentStep - 1].component()}
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button className="bg-blue-300 p-2 rounded-md" onClick={prevStep}>
            Previous
          </button>
          <button className="bg-blue-300 p-2 rounded-md" onClick={nextStep}>
            {currentStep === 4 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default StepperForm;
