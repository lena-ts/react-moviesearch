import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonItem from './RadioButtonItem';

class RadioButton extends React.Component {
  state = {
    active: this.props.defaultValue || null,
    useValue: false,
  };

  handleChange = code => {
    this.setState(() => ({
      active: code,
      useValue: false,
    }));
    this.props.dispatchAction ? this.props.dispatchAction(code) : null;
  };

  componentDidMount() {
    this.setState(() => ({
      useValue: true,
    }));
  }

  getValue = () => {
    return this.state.useValue ? this.props.value : this.state.active;
  };

  render() {
    const { title, options } = this.props;
    const opts = options.map(opt => (
      <RadioButtonItem
        key={opt.code}
        code={opt.code}
        text={opt.text}
        handleChange={this.handleChange}
        isActive={
          this.state.useValue
            ? this.props.value === opt.code
            : this.state.active === opt.code
        }
      />
    ));
    return (
      <div className="switcher">
        <span>{title}</span>
        {opts}
      </div>
    );
  }
}

RadioButton.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  dispatchAction: PropTypes.func,
  value: PropTypes.string,
};

export default RadioButton;
