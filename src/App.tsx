import { ConfigProvider } from "antd";
import "./App.scss";
import "./assets/scss/main.scss";
import AppRouter from "./routes/Router";
import { antdThemeToken } from "./config/antdTheme";

function App() {
  return (
    <ConfigProvider theme={antdThemeToken}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
