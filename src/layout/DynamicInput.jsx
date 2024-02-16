/* eslint-disable react/prop-types */
import { InputCases } from "../utils/InputCase";

const DynamicInput = ({ handleChange, inputs, formState }) => {
  return (
    <div className="p-5">
      {inputs.map((input, index) => (
        <div key={`${input.id}-${index}`} className="flex flex-col p-5">
          <label htmlFor={input.id}>{input.name}</label>
          {InputCases(input, handleChange, formState)}
        </div>
      ))}
    </div>
  );
};

export default DynamicInput;
