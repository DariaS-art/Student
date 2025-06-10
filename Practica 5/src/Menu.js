import React, { useState } from 'react';

function Menu() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="menu">
      {dishes.map((dish, index) => (
        <div className="card" key={index}>
          <img src={dish.image} alt={dish.name} className="dish-image" />
          <h3>{dish.name}</h3>
          <p>{dish.weight}</p>
          <button onClick={() => setSelectedDish(dish)}>Подробнее</button>
          {selectedDish === dish && (
            <div>
              <p>Цена: {dish.price}</p>
              <p>Ингредиенты: {dish.ingredients}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Menu;
const dishes = [
    {
      name: "Рисовая каша на кокосовом молоке с гранолой из амаранта",
      weight: "300 г",
      price: "330 руб",
      ingredients: "Рис, кокосовая основа, персиковое чатни, мед, гранола из амаранта (клубника, вишня, крупа амарантовая, овсяные хлопья, кокосовое масло), соль, сахар",
      image: "https://shoko.ru/upload/iblock/e9e/pcr23vo3e429jy42gv0xfblgqqqe3ghe.webp",
    },
    {
      name: "Теплый салат из запеченных овощей",
      weight: "200 г",
      price: "550 руб",
      ingredients: "Пюре морковное, фасоль стручковая, кабачки, перец болгарский, кинза, соус чимичури (лук репчатый, перец болгарский, кинза, сельдерей, чеснок, паприка, перец)",
      image: "https://shoko.ru/upload/iblock/4bd/ljpa4w0wr7zobl4gdp5j9pvkoh6gvv1f.webp",
    },
    {
      name: "Английский завтрак с яйцами пашот и колбасками",
      weight: "290 г",
      price: "550 руб",
      ingredients: "Гриль колбаски из говядины, помидоры черри, фасоль томленая, микс салат, яйцо пашот, масло укропное, тартин гречишный",
      image: "https://shoko.ru/upload/iblock/321/g2kwys32zm188ler2s44j4502en82zsz.webp",
    },
    {
        name: "Скрэмбл на гречишном тартине с камчатским крабом и авокадо",
        weight: "190 г",
        price: "790 руб",
        ingredients: "Краб, скрэмбл (яйцо, сливки), авокадо, салат микс, соус голландез с цитрусом (куркума, сахар, сливки 33%, сок апельсиновый, соль, цедра апельсина), масло укропное, тартин гречишный",
        image: "https://shoko.ru/upload/iblock/aa8/l1822774swxgez37g06n04ohjawhgshl.webp",
      },
      {
        name: "Картофельная вафля с камчатским крабом и муссом из авокадо",
        weight: "190 г",
        price: "890 руб",
        ingredients: "Краб, картофельная вафля, соус голландез с трюфелем (крем с шампиньонами и трюфелем, перец чёрный, сливки 33%, сок апельсиновый, соль), яйцо пашот, пюре из авокадо, салат микс",
        image: "https://shoko.ru/upload/iblock/3f0/dmnzwrscexmc832rs6ag7zc9us7ihmhl.webp",
      },
      {
        name: "Драник со слабосоленым лососем",
        weight: "170 г",
        price: "490 руб",
        ingredients: "Лосось слабосолёный, драники картофельные, горчица из печеных яблок (горчица зернистая, кориандр, лимон, мёд, перец маринованный, соль, яблоки), яйцо пашот, микс салат, русское песто(кинза, петрушка, соевый соус, укроп, уксус яблочный), масло укропное",
        image: "https://shoko.ru/upload/iblock/ac7/nn5jcl2bi4q3c2lg6ohspw3p04atq7hc.webp",
      },
      {
        name: "Сырники с вишневым вареньем и муссом из вареной сгущенки",
        weight: "190 г",
        price: "420 руб",
        ingredients: "Сырники (мука пшеничная, семола, сахар, сахар ванильный, соль, творог, яйцо), варенье вишневое, вареная сгущенка, крем из сливок, какао, микро-зелень базилик",
        image: "https://shoko.ru/upload/iblock/ce1/0panvkte5ani0fbzvcs16hxw6l24k7mh.webp",
      },
      {
        name: "Сэндвич с двумя сырами и цыпленком",
        weight: "200 г",
        price: "630 руб",
        ingredients: "На ароматной фокачче с прованскими травами. Бедро цыпленка, салат микс, гауда, чеддер, соус сливочный, луковый джем",
        image: "https://shoko.ru/upload/iblock/f14/pjn533o5zd8cdboo5a3zwkbpmnvekwqo.webp",
      },
      {
        name: "Сэндвич со слабосоленым лососем",
        weight: "160 г",
        price: "610 руб",
        ingredients: "На мягком гречишном тартине. Лосось слабосолёный, огурцы, салат микс, сырный крем (брынза, кремета, прованские травы), соус чимичури (кинза, лук репчатый, паприка, перец болгарский, петрушка, сельдерей, уксус винный, чеснок)",
        image: "https://shoko.ru/upload/iblock/d0c/5olxkr3q18og7yukjpsvqrgrle30pvkm.webp",
      },
      {
        name: "Ролл Цезарь",
        weight: "150 г",
        price: "430 руб",
        ingredients: "Куриное бедро запеченное, соус цезарь на основе анчоусов, айсберг, пшеничная лепешка",
        image: "https://shoko.ru/upload/iblock/152/xz20z7mifr0fl5e8krrnb9uh9xte2q2w.webp",
      },
      {
        name: "Сэндвич Цезарь",
        weight: "170 г",
        price: "390 руб",
        ingredients: "Куриное бедро, соус цезарь, пармезан, помидоры, салат микс, хлеб тостовый",
        image: "https://shoko.ru/upload/iblock/0b7/d8swjeeguk4zjlw3lxvi77s9j4xuzdbj.webp",
      },
      {
        name: "Круассан с муссом из вареной сгущенки",
        weight: "110 г",
        price: "260 руб",
        ingredients: "Сгущенка вареная, сливки. клубника, круассан классический",
        image: "https://shoko.ru/upload/iblock/0f8/ldnxw47y1xnarba8g344ly9m945ag01t.webp",
      },
      {
        name: "Айс фильтр-кофе",
        weight: "300 мл",
        price: "350 руб",
        ingredients: "Холодный классический, ароматный кофе. Заваривается классическим Drip методом",
        image: "https://shoko.ru/upload/iblock/f36/udmx0pe7htjccxvdc84ml0nuso0polmt.webp",
      },
      {
        name: "Айс латте Фисташка",
        weight: "500 мл",
        price: "350 руб",
        ingredients: "Холодный кофейный напиток с ярким вкусом фисташек, посыпается дроблеными орехами. Молочная пена, вспененное молоко, эспрессо, фисташковая паста, фисташки дробленные",
        image: "https://shoko.ru/upload/iblock/dcd/6po5ekgncc1zj47392qt1q4d91ass3pp.webp",
      },
      {
        name: "Матча-фраппе с фисташкой и сырной пеной",
        weight: "350 мл",
        price: "390 руб",
        ingredients: "Освежающий кофейный напиток на основе мороженого, японского порошкового чая с фисташковым вкусом. Мачта, мороженое пломбир, сливки, сироп фисташковый, фисташки дробленые, фирменная сырная пенка, горячий шоколад",
        image: "https://shoko.ru/upload/iblock/e03/twm8o0o8vx7ka7e3k619nsixyxgi8oaf.webp",
      },
      {
        name: "Айс классический какао",
        weight: "500 мл",
        price: "320 руб",
        ingredients: "Освежающий какао, приготовленное по фирменному рецепту из шоколада и молока",
        image: "https://shoko.ru/upload/iblock/903/w0n3p99nplnozs5j69fhx44f3z29n46j.webp",
      },
  ];