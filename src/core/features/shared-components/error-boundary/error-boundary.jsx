import React from "react";

import "./error-boundary.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const { title, message, children } = this.props;
    const { errorInfo } = this.state;

    if (errorInfo) {
      return (
        <div className="error-boundary">
          <h2> {title} </h2>
          <p> {message} </p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
