// components/Button.jsx
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="botao"
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
