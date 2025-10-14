export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
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
  return (
    <div className="main-container">
      <section className="advertising-section">
        <div className="advertising-container">
          <div className="advertising-content">
            <div className="text-content">
              <span className="premium-watches">Премиальные часы</span>
              <h1 className="slogan-text">
                Время - это <span className="highlighted-text">роскошь</span>,
                которую мы дарим
              </h1>
              <p className="description-text">
                Откройте для себя эксклюзивную коллекцию швейцарских часов от
                ведущих мировых брендов. Каждые часы — это произведение
                искусства.
              </p>
            </div>
            <div className="image-content">
              <img
                className="watch-image"
                src="https://v0-watch-store-landing-page.vercel.app/luxury-swiss-watch-on-elegant-display-stand.jpg"
                alt="Premium watchs"
              />
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
