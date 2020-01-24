import React from "react";
import { Spinner } from "react-bootstrap";

interface ILoadingProps {
  message: string;
}

const CLASSNAME = "LoadingIndicator";
const CLASSNAME_MESSAGE = `${CLASSNAME}-message`;

const LoadingIndicator: React.FC<ILoadingProps> = ({ message }) => (
  <div className={CLASSNAME}>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    <h4 className={CLASSNAME_MESSAGE}>{message}</h4>
  </div>
);

export default LoadingIndicator;
