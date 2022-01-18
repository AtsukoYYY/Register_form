import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import "../styles.css";

const InputField = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserName(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };
  const handleChangePasswordConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputPasswordConfirm(event.target.value);
  };
  const [successAlertFlag, setSuccessAlertFlag] = useState(false);
  const [errorAlertFlag, setErrorAlertFlag] = useState(false);

  const [isNullUserName, setIsNullUserName] = useState(false);
  const [isNullEmail, setIsNullEmail] = useState(false);
  const [isNullPassword, setIsNullPassword] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  let isError = false;

  const ClickRegister = () => {
    isError = false;
    if (inputUserName.length <= 0) {
      setIsNullUserName(true);
      isError = true;
    }
    if (inputEmail.length <= 0) {
      setIsNullEmail(true);
      isError = true;
    }
    if (inputPassword.length <= 0) {
      setIsNullPassword(true);
      isError = true;
    }
    if (inputPassword !== inputPasswordConfirm) {
      setIsWrongPassword(true);
      isError = true;
    }
    if (isError === true) {
      setSuccessAlertFlag(false);
      setErrorAlertFlag(true);
    }
    if (isError === false) {
      setSuccessAlertFlag(true);
      setErrorAlertFlag(false);
      setIsNullUserName(false);
      setIsNullEmail(false);
      setIsNullPassword(false);
      setIsWrongPassword(false);
    }
  };
  return (
    <div className="App">
      {successAlertFlag && <Alert severity="success"> success </Alert>}
      {errorAlertFlag && <Alert severity="error"> error </Alert>}
      <div>
        <Paper elevation={0}>
          <h2>Create New Account</h2>
        </Paper>
        <TextField
          error={isNullUserName}
          sx={{ m: 1, marginTop: 2 }}
          id="outlined-basic"
          label="user name"
          value={inputUserName}
          onChange={handleChangeUserName}
        />
        {isNullUserName && (
          <p className="helperText">Please input at least 1 character</p>
        )}
      </div>
      <div>
        <TextField
          error={isNullEmail}
          sx={{ m: 1 }}
          id="outlined-basic"
          label="email"
          value={inputEmail}
          onChange={handleChangeEmail}
        />
        {isNullEmail && <p className="helperText">Please input your Email</p>}
      </div>
      <div>
        <TextField
          error={isNullPassword}
          sx={{ m: 1 }}
          id="outlined-basic"
          label="password"
          type="password"
          value={inputPassword}
          onChange={handleChangePassword}
        />
        {isNullPassword && (
          <p className="helperText">Please input at least 1 character</p>
        )}
      </div>
      <div>
        <TextField
          error={isWrongPassword}
          sx={{ m: 1 }}
          id="outlined-basic"
          label="password confirm "
          type="password"
          value={inputPasswordConfirm}
          onChange={handleChangePasswordConfirm}
        />
        {isWrongPassword && (
          <p className="helperText">Please confirm your password</p>
        )}
      </div>
      <Button onClick={ClickRegister} sx={{ m: 2 }} variant="contained">
        Register
      </Button>
    </div>
  );
};

export default InputField;
