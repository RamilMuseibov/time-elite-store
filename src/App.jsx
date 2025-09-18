export default function App() {
  return (
    <div className="app-container">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="storename-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock-icon lucide-clock"
          >
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span>TimeElite</span>
        </div>
        <nav className="nav-container">
          <a href="#" className="nav-container-link">
            Каталог
          </a>
          <a href="#" className="nav-container-link">
            Бренды
          </a>
          <a href="#" className="nav-container-link">
            О нас
          </a>
          <a href="#" className="nav-container-link">
            Контакты
          </a>
        </nav>
        <button className="btn-login">Войти</button>
      </div>
    </header>
  );
}

function Main() {
  <div className="main-container">
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>;
}
