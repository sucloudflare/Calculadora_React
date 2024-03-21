import React, { useState } from 'react';
import './Calculator.css'; // Estilização opcional

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  // Função para atualizar o display
  const updateDisplay = (value) => {
    if (display === '0' || display === 'Error') {
      setDisplay(value.toString());
    } else {
      setDisplay(display + value);
    }
  };

  // Função para manipular números
  const handleNumberClick = (num) => {
    if (display.length < 12) { // Limita o tamanho do display
      updateDisplay(num);
      setCurrentValue(currentValue + num);
    }
  };

  // Função para manipular operadores
  const handleOperatorClick = (op) => {
    // Se houver um operador já definido e um valor atual, calcular o resultado
    if (operator && currentValue !== '') {
      calculateResult();
    }
    setPreviousValue(display);
    setCurrentValue('');
    setOperator(op);
  };

  // Função para calcular resultado
  const calculateResult = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case '-':
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case '*':
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case '/':
        if (currentValue !== '0') {
          result = parseFloat(previousValue) / parseFloat(currentValue);
        } else {
          result = 'Error'; // Divisão por zero
        }
        break;
      default:
        return;
    }
    setDisplay(result.toString().slice(0, 12)); // Limita o tamanho do resultado no display
    setCurrentValue(result.toString());
    setOperator('');
  };

  // Função para limpar o display
  const clearDisplay = () => {
    setDisplay('0');
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => clearDisplay()}>C</button>
        <button className="orange-button" onClick={() => calculateResult()}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
