import { useRef } from "react";

const Form = (props) => {
  const inputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const dataToSend = inputRef.current.value;
    props.fetchHandler(dataToSend);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor='id'>Project ID:</label>
      <input
        type='text'
        name='id'
        id='id'
        ref={inputRef}
        placeholder='for random leave empty'
      ></input>
      <button>Fetch!</button>
    </form>
  );
};

export default Form;
