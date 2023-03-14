import Content from "./components/Content/Content";

import Menu from "./components/Menu/Menu";
import Carousel from "./components/Carousel/Carousel";

import s from "./App.module.scss";

import "@fontsource/iosevka";

function App() {
  return (
    <div className={s.App}>
      <Menu />
      <Content />
      <Carousel />
    </div>
  );
}

export default App;
