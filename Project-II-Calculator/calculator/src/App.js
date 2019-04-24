import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
        <ButtonContainer className="clearBtn">
          <ActionButton className="clearText" text="clear" />
          <NumberButton bgColor="redBtn" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="grayBtn" text="7" />
          <NumberButton bgColor="grayBtn" text="8" />
          <NumberButton bgColor="grayBtn" text="9" />
          <NumberButton bgColor="redBtn" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="grayBtn" text="4" />
          <NumberButton bgColor="grayBtn" text="5" />
          <NumberButton bgColor="grayBtn" text="6" />
          <NumberButton bgColor="redBtn" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="grayBtn" text="1" />
          <NumberButton bgColor="grayBtn" text="2" />
          <NumberButton bgColor="grayBtn" text="3" />
          <NumberButton bgColor="redBtn" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="clearText" text="0" />
          <NumberButton bgColor="redBtn" text="=" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;

