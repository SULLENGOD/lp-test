import { useForm } from "../hooks/useForm";
import { useInputs } from "../hooks/useInputs";
import DynamicInput from "../layout/DynamicInput";

const DinamycForm = () => {
  const { inputs, isLoading } = useInputs();
  const { formState, handleChange } = useForm({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <div>
        Dynamic:
        <form onSubmit={handleSubmit}>
          <DynamicInput handleChange={handleChange} inputs={inputs} formState={formState}/>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default DinamycForm;
