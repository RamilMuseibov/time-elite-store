export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
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
    <main className="main-container">
      <section className="advertising-section">
        <div className="advertising-content">
          <div className="advertising-text-content">
            <div className="advertising-text">
              <span className="premium-watches">Премиальные часы</span>
              <h1 className="slogan-text">
                Время — это <span className="highlighted-text">роскошь</span>,
                которую мы дарим
              </h1>
              <p className="description-text">
                Откройте для себя эксклюзивную коллекцию швейцарских часов от
                ведущих мировых брендов. Каждые часы — это произведение
                искусства.
              </p>
            </div>
            <div className="advertising-btn">
              <button className="catalog-btn">
                Смотреть каталог
                <div className="catalog-btn-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-right-icon lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </button>
              <button className="consultation-btn">
                Записаться на консультацию
              </button>
            </div>
            <div className="advertising-info">
              <div className="model-info">
                <p className="quantity">500+</p>
                <p className="model">Моделей</p>
              </div>
              <div className="brand-info">
                <p className="quantity">50+</p>
                <p className="model">Брендов</p>
              </div>
              <div className="years-info">
                <p className="quantity">15</p>
                <p className="model">Лет на рынке</p>
              </div>
            </div>
          </div>
          <div className="advertising-image-content">
            <div className="star-image-container">
              <div className="star-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-star-icon lucide-star"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              </div>
            </div>
            <div className="watch-image-container">
              <img
                className="watch-image"
                src="https://v0-watch-store-landing-page.vercel.app/luxury-swiss-watch-on-elegant-display-stand.jpg"
                alt="Premium watchs"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="selected-models-section">
        <div className="selected-models-text-container">
          <h1 className="selected-models-title">Избранные модели</h1>
          <p className="selected-models-subtitle">
            Откройте для себя наши самые популярные и эксклюзивные часы
          </p>
        </div>
        <div className="selected-models-watch">
          <div className="selected-models-watch-card">
            <img
              className="watch-card-image"
              src="https://v0-watch-store-landing-page.vercel.app/abstract-geometric-shapes.png?height=400&width=400&query=rolex%20submariner%20luxury%20diving%20watch"
            />
            <div className="watch-card-info">
              <p className="watch-name">Omega Speedmaster</p>
              <div className="price-evaluation-container">
                <p className="watch-price">450 000 ₽</p>
                <div className="evaluation-container">
                  <div className="star-container">
                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-btn-container">
              <button className="details-btn">Подробнее</button>
            </div>
          </div>
          <div className="selected-models-watch-card">
            <img
              className="watch-card-image"
              src="https://v0-watch-store-landing-page.vercel.app/abstract-geometric-shapes.png?height=400&width=400&query=rolex%20submariner%20luxury%20diving%20watch"
            />
            <div className="watch-card-info">
              <p className="watch-name">Omega Speedmaster</p>
              <div className="price-evaluation-container">
                <p className="watch-price">450 000 ₽</p>
                <div className="evaluation-container">
                  <div className="star-container">
                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-btn-container">
              <button className="details-btn">Подробнее</button>
            </div>
          </div>
          <div className="selected-models-watch-card">
            <img
              className="watch-card-image"
              src="https://v0-watch-store-landing-page.vercel.app/abstract-geometric-shapes.png?height=400&width=400&query=rolex%20submariner%20luxury%20diving%20watch"
            />
            <div className="watch-card-info">
              <p className="watch-name">Omega Speedmaster</p>
              <div className="price-evaluation-container">
                <p className="watch-price">450 000 ₽</p>
                <div className="evaluation-container">
                  <div className="star-container">
                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>

                    <svg
                      className="star-evaluation-image"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-btn-container">
              <button className="details-btn">Подробнее</button>
            </div>
          </div>
        </div>
      </section>
      <section className="choosing-us-section">
        <h1 className="choosing-us-title">Почему выбирают нас</h1>
        <div className="choosing-us-card-container">
          <div className="choosing-us-card">
            <div className="choosing-us-card-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00393a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-icon lucide-shield"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            </div>
            <h1 className="choosing-us-card-title">Гарантия подлинности</h1>
            <p className="choosing-us-card-subtitle">
              Все часы сертифицированы и имеют официальную гарантию
              производителя
            </p>
          </div>
          <div className="choosing-us-card">
            <div className="choosing-us-card-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00393a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-truck-icon lucide-truck"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </div>
            <h1 className="choosing-us-card-title">Бесплатная доставка</h1>
            <p className="choosing-us-card-subtitle">
              Доставляем по всей России в защищенной упаковке с трекингом
            </p>
          </div>
          <div className="choosing-us-card">
            <div className="choosing-us-card-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00393a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-clock4-icon lucide-clock-4"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h1 className="choosing-us-card-title">Сервисное обслуживание</h1>
            <p className="choosing-us-card-subtitle">
              Профессиональный ремонт и обслуживание в нашем сервисном центре
            </p>
          </div>
        </div>
      </section>
      <section className="online-consultation-section">
        <div className="online-consultation-container">
          <h1 className="online-consultation-title">
            Готовы найти свои идеальные часы?
          </h1>
          <p className="online-consultation-sibtitle">
            Посетите наш шоу-рум или закажите онлайн-консультацию с экспертом
          </p>
          <div className="online-consultation-btn-container">
            <button className="showroom-btn">Посетить шоу-рум</button>
            <button className="online-consultation-btn">
              Онлайн-консультация
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main-info">
          <div className="logo-storname-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          <p className="footer-discription">
            Премиальные швейцарские часы для истинных ценителей времени и стиля.
          </p>
        </div>
        <div className="footer-catalog">
          <h4 className="footer-catalog-title">Каталог</h4>
          <div className="footer-catalog-container">
            <a href="#" className="footer-catalog-link">
              Мужские часы
            </a>
            <a href="#" className="footer-catalog-link">
              Женские часы
            </a>
            <a href="#" className="footer-catalog-link">
              Спортивные часы
            </a>
            <a href="#" className="footer-catalog-link">
              Классические часы
            </a>
          </div>
        </div>
        <div className="footer-brands">
          <h4 className="footer-brands-title">Бренды</h4>
          <div className="footer-brands-container">
            <a href="#" className="footer-brands-link">
              Rolex
            </a>
            <a href="#" className="footer-brands-link">
              Omega
            </a>
            <a href="#" className="footer-brands-link">
              Patek Phillippe
            </a>
            <a href="#" className="footer-brands-link">
              Все бренды
            </a>
          </div>
        </div>
        <div className="footer-contacts">
          <h4 className="footer-contacts-title">Контакты</h4>
          <div className="footer-contacts-container">
            <p className="footer-contacts-number">+7 (495) 123-45-67</p>
            <p className="footer-contacts-email">info@timeelite.ru</p>
            <p className="footer-contacts-address">Москва, ул. Тверская, 15</p>
            <p className="footer-contacts-working">Пн-Вс: 10:00-21:00</p>
          </div>
        </div>
      </div>
      <div className="footer-all-rights">
        <p className="all-rights">© 2025 TimeElite. Все права защищены.</p>
      </div>
    </footer>
  );
}
