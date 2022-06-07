import "./inputNotification.scss";

const InputNotification = ({ text, isValid }) => {
  return (
    <p className={isValid ? "help help_is-success" : "help help_is-danger"}>
      {text}
    </p>
  );
};

export default InputNotification;
