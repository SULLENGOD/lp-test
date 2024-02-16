export const InputCases = (input, handleChange, formState) => {
  switch (input.type) {
    case "BOOLEAN":
      return (
        <input
          type="checkbox"
          id={input.id}
          name={input.id}
          checked={formState[input.id] || false}
          onChange={(e) =>
            handleChange({
              target: { name: input.id, value: e.target.checked },
            })
          } 
        />
      );
    case "TEXT_AREA":
      return (
        <textarea
          id={input.id}
          name={input.id}
          onChange={handleChange}
          value={formState[input.id] || ""}
          placeholder={input.defaultValue}
        />
      );
    case "MULTIPLE_VALUES_LIST":
      return (
        <select
          id={input.id}
          name={input.id}
          onChange={handleChange}
          value={formState[input.id] || []}
          multiple={true}
        >
          {input.acceptedValues.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      );
    case "TEXT":
      return (
        <input
          type="text"
          id={input.id}
          name={input.id}
          value={formState[input.id] || ""}
          onChange={handleChange}
        />
      );
    case "radio":
      return (
        <div>
          {input.acceptedValues.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name={input.id}
                value={value}
                // eslint-disable-next-line no-unused-vars
                onChange={(e) =>
                  handleChange({ target: { name: input.id, value } })
                }
                checked={formState[input.id] === value}
              />
              {value}
            </label>
          ))}
        </div>
      );
    default:
      return <></>;
  }
};
