import S from "./styles.module.css";

import igniteLogo from "../../assets/Logo.png";

export const Header = () => (
  <header className={S.header}>
    <img src={igniteLogo} alt="Ignite Logo" />
    <b>Ignite Feed</b>
  </header>
);
