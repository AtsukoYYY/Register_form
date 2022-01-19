import "./styles.css";
import InputFiled from "./compornents/InputField";
import Paper from "@mui/material/Paper";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <Paper sx={{ m: "auto", width: "320px" }} elevation={0}>
          <InputFiled />
        </Paper>
      </div>
    </div>
  );
}
