import { Component } from "react";
import Switch from "react-switch";

class BaseSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} onColor="#86d3ff" checkedIcon={false} uncheckedIcon={false} />
      </label>
    );
  }
}

export default BaseSwitch;