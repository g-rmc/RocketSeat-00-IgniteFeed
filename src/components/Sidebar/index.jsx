import { PencilLine } from "phosphor-react";

import S from "./style.module.css";

export const SideBar = ({ name, title }) => {
  return (
    <aside className={S.sidebar}>
      <img src="https://picsum.photos/300/100" alt="Cover image" />

      <div className={S.profile}>
        <img src="https://github.com/g-rmc.png" alt="Profile image" />
        <strong>{name || "Nome"}</strong>
        <span>{title || "Título"}</span>
      </div>

      <footer className={S.footer}>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
