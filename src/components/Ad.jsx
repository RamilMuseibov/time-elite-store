import React from "react";
import WatchIcon from "../icons/WatchIcon";
import ShieldIcon from "../icons/ShieldIcon";
import AdCard from "./AdCard";
import TruckIcons from "../icons/TruckIcon";

export default function Ad() {
  return (
    <section className="choosing-us-section">
      <h1 className="choosing-us-title">Почему выбирают нас</h1>
      <div className="choosing-us-card-container">
        <AdCard title="Гарантия подлинности" icon={<ShieldIcon />}>
          Все часы сертифицированы и имеют официальную гарантию производителя
        </AdCard>
        <AdCard title="Бесплатная доставка" icon={<TruckIcons />}>
          Доставляем по всей России в защищенной упаковке с трекингом
        </AdCard>
        <AdCard
          title="Сервисное обслуживание"
          icon={<WatchIcon size="32" stroke="#00393a" />}
        >
          Профессиональный ремонт и обслуживание в нашем сервисном центре
        </AdCard>
      </div>
    </section>
  );
}
