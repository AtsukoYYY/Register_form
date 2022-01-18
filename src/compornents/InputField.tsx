import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

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
  const ClickRegister = () => {
    if (inputUserName.length <= 0) {
      setSuccessAlertFlag(false);
      setErrorAlertFlag(true);
      return;
    }
    if (inputEmail.length <= 0) {
      setSuccessAlertFlag(false);
      setErrorAlertFlag(true);
      return;
    }
    if (inputPassword.length <= 0) {
      setSuccessAlertFlag(false);
      setErrorAlertFlag(true);
      return;
    }
    if (inputPasswordConfirm.length <= 0) {
      setSuccessAlertFlag(false);
      setErrorAlertFlag(true);
      return;
    }
    if (inputPassword !== inputPasswordConfirm) {
      setSuccessAlertFlag(false);
      setErrorAlertFlag(true);
      return;
    }
    setSuccessAlertFlag(true);
    setErrorAlertFlag(false);
  };
  return (
    <div className="App">
      {successAlertFlag && <Alert severity="success"> success </Alert>}
      {errorAlertFlag && <Alert severity="error"> error </Alert>}
      <div>
        <TextField
          sx={{ m: 1, marginTop: 2 }}
          id="outlined-basic"
          label="user name"
          value={inputUserName}
          onChange={handleChangeUserName}
        />
      </div>
      <div>
        <TextField
          sx={{ m: 1 }}
          id="outlined-basic"
          label="email"
          value={inputEmail}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <TextField
          sx={{ m: 1 }}
          id="outlined-basic"
          label="password"
          type="password"
          value={inputPassword}
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <TextField
          sx={{ m: 1 }}
          id="outlined-basic"
          label="password confirm "
          type="password"
          value={inputPasswordConfirm}
          onChange={handleChangePasswordConfirm}
        />
      </div>
      <Button onClick={ClickRegister} sx={{ m: 1 }} variant="contained">
        Register
      </Button>
    </div>
  );
};

export default InputField;
