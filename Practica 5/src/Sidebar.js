import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="sidebar-button">Новинки</button>
      <button className="sidebar-button">Завтраки</button>
      <button className="sidebar-button">Ланчи</button>
      <button className="sidebar-button">Ужины</button>
      <button className="sidebar-button">Напитки</button>
      <button className="sidebar-button">Десерты</button>
      <button className="sidebar-button">Выгодные предложения</button>
      <div className="sidebar-info">
           <p>Скачайте прейскурант</p>
           <p>В прейскуранте вы найдете информацию о калорийности блюд и таблицу БЖУ.</p>
         </div>
    </aside>
  );
}

export default Sidebar;