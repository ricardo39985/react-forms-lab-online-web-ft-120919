import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsRemaining: this.props.maxChars,
      input: ''
    };
  }

  handleTweet = (e) => {
    this.setState({
      charsRemaining: this.props.maxChars - e.target.value.length,
      input: e.target.value
    })
  };

  render() {
    return (
      <div>
        <strong>Your message:<br/>{this.state.input}</strong><br/>

        <input
          onChange={this.handleTweet}
          type="text"
          name="message"
          id="message"
          value={this.state.input}
        />
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
