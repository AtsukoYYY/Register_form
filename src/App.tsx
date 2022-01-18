import "./styles.css";
import InputFiled from "./compornents/InputField";
import Paper from "@mui/material/Paper";

export default function App() {
  return (
    <div className="App">
      <Paper elevation={0}>
        <h2>Create New Account</h2>
      </Paper>
      <Paper sx={{ m: "auto", width: "280px" }} elevation={3}>
        <InputFiled />
      </Paper>
    </div>
  );
}
