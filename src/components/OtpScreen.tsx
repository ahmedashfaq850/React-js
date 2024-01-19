import { useState, useRef } from "react";

const OtpScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputsRef = useRef(Array(6).fill(null));
  const [temp, setTemp] = useState(false);

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleValidatePhoneNumber = () => {
    const phoneNumberPattern = /^\d{11}$/;
    const inValidatePhoneNumber = phoneNumberPattern.test(phoneNumber);
    if (inValidatePhoneNumber) {
      setIsValid(true);
      console.log("Valid Phone Number", phoneNumber);
      setTemp(true);
    } else {
      setIsValid(false);
      console.log("InValid Phone Number", phoneNumber);
    }
  };

  const handleChangeOtp = (index: number, value: any) => {
    if (!isNaN(value) && value !== "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input
      if (index < otp.length - 1) {
        otpInputsRef.current[index + 1].focus();
      }

      // Clear the next input if it already has a value
      if (index < otp.length - 1 && newOtp[index + 1] !== "") {
        newOtp[index + 1] = "";
        setOtp(newOtp);
      }
    }
    else if (value === "" && index > 0) {
        // If backspace is pressed, focus on the previous input
        otpInputsRef.current[index - 1].focus();
      }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    // Perform validation logic here (e.g., compare with the OTP sent)

    // For simplicity, just show a console log
    console.log("Entered OTP:", enteredOtp);

    // If validation is successful, navigate to the next screen or show a success message
 
  };

  return (
    <>
      <div className="mt-20">
        <h1 className="font-bold text-[30px] mb-5">OTP Screen Component</h1>

        <div className="flex flex-col gap-2">
          <label>Enter Phone Number</label>
          <input
            placeholder="Enter Your Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            className="border-2 border-gray-400 rounded-md p-2"
          />
          {!isValid && (
            <p className="text-red-600">Please enter a valid phone number</p>
          )}
          <button
            className="bg-black p-2 text-white rounded-md"
            onClick={handleValidatePhoneNumber}
          >
            Send OTP
          </button>
        </div>
      </div>
      {temp && (
        <div className="flex flex-col justify-center items-center gap-3 mt-10">
          <p>OTP sent to +92 {phoneNumber.slice(1, phoneNumber.length)}</p>
          <div className="flex gap-4">
            {otp.map((digit, index) => (
              <input
                className="w-[45px] h-[45px] border-[1px] text-center text-[25px]"
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChangeOtp(index, e.target.value)}
                ref={(input) => (otpInputsRef.current[index] = input)}
              />
            ))}
          </div>
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </>
  );
};

export default OtpScreen;
