import { useState } from "react";
import { calculateMean, calculateMedian } from "../utils/utils";
import DatasetResults from "./DatasetResults";

function InputForm() {
  const [numbers, setNumbers] = useState([]);
  const [dataset, setDataset] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);
    console.log(median);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setNumbers(input.split(","));
  };

  console.log(numbers);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numbers">enter a series of numbers</label>
        <input
          type="text"
          id="numbers"
          name="numbers"
          onChange={handleChange}
        ></input>
        <input type="submit" value="calculate"></input>
      </form>

      <DatasetResults dataset={dataset} />
    </>
  );
}

export default InputForm;
