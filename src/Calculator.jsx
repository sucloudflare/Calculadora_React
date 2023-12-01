
import React, { useState } from "react";
import Button from "./Button";

interface CalculatorProps {}

export function Calculator(props: CalculatorProps) {
  const [display, setDisplay] = useState < string > "";

  const handleButtonClick = (value: string) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleBackspace = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Erro");
    }
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <p id="resultado">{display}</p>
      <table>
        <tbody>
          <tr>
            <td>
              <Button label="C" onClick={handleClear} />
            </td>
            <td>
              <Button label="&lt;" onClick={handleBackspace} />
            </td>
            <td>
              <Button label="/" onClick={() => handleButtonClick("/")} />
            </td>
            <td>
              <Button label="*" onClick={() => handleButtonClick("*")} />
            </td>
          </tr>
          <tr>
            <td>
              <Button label="7" onClick={() => handleButtonClick("7")} />
            </td>
            <td>
              <Button label="8" onClick={() => handleButtonClick("8")} />
            </td>
            <td>
              <Button label="9" onClick={() => handleButtonClick("9")} />
            </td>
            <td>
              <Button label="-" onClick={() => handleButtonClick("-")} />
            </td>
          </tr>
          <tr>
            <td>
              <Button label="4" onClick={() => handleButtonClick("4")} />
            </td>
            <td>
              <Button label="5" onClick={() => handleButtonClick("5")} />
            </td>
            <td>
              <Button label="6" onClick={() => handleButtonClick("6")} />
            </td>
            <td>
              <Button label="+" onClick={() => handleButtonClick("+")} />
            </td>
          </tr>
          <tr>
            <td>
              <Button label="1" onClick={() => handleButtonClick("1")} />
            </td>
            <td>
              <Button label="2" onClick={() => handleButtonClick("2")} />
            </td>
            <td>
              <Button label="3" onClick={() => handleButtonClick("3")} />
            </td>
            <td>
              <Button
                label="="
                onClick={handleCalculate}
                className="botao-igual"
                style={{ height: "106px" }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                label="0"
                onClick={() => handleButtonClick("0")}
                className="botao-0"
                style={{ width: "106px" }}
              />
            </td>
            <td>
              <Button
                label="."
                onClick={() => handleButtonClick(".")}
                className="botao-ponto"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
