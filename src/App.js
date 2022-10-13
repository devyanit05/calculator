import React, { useState } from 'react';
import './styles.css'


function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);

  function add(e) {
    e.preventDefault();
    setRes(parseInt(num1) + parseInt(num2));

  }

  function substract(e) {
    e.preventDefault();
    setRes(parseInt(num1) - parseInt(num2));
  }

  function multiply(e) {
    e.preventDefault();
    setRes(parseInt(num1) * parseInt(num2));
  }

  function divide(e) {
    e.preventDefault();
    setRes(parseInt(num1) + parseInt(num2));
  }

  const handleChange1 = (e) => {
    setNum1(e.target.value);
  }

  const handleChange2 = (e) => {
    setNum2(e.target.value);
  }

  return (
    <form className='container'>
      <h1>Calculator</h1>
      <article>
        <label>
          Num 1:
          <input type="Number" name="num1" value={num1} onChange={handleChange1} />
        </label>
        <label>
          Num 2:
          <input type="Number" name="num2" value={num2} onChange={handleChange2} />
        </label>
      </article>
      <div>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
        <button onClick={multiply}>x</button>
        <button onClick={divide}>/</button>
      </div>
      <h2>Ans: {res}</h2>
    </form>
  );
}

export default App;
