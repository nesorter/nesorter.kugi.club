import Content from "./components/Content/Content";

import s from "./App.module.scss";

import "@fontsource/iosevka";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className={s.App}>
      <Menu />
      <Content />
    </div>
  );
}

export default App;
