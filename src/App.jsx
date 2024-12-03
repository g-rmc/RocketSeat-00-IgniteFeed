import { Header } from "./components/Header";
import "./global.css";
import S from "./App.module.css";
import { SideBar } from "./components/Sidebar";
import { mockUser } from "./mocks";

function App() {
  return (
    <>
      <Header props={mockUser} />
      <div className={S.wrapper}>
        <SideBar />
        <main>
          <p>Post</p>
        </main>
      </div>
    </>
  );
}

export default App;
