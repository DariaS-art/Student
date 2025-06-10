import React, { useState } from 'react';


function Main({ addToCart }) {
  const [expandedProductId, setExpandedProductId] = useState(null);

  const products = [
    { id: 1, name: 'ХУДИ / KAGUYA BLOSSOM (SR)', price: '13490₽', image: 'https://nikifilini.com/wp-content/uploads/2025/02/KAGUYA_BLOSSOM_13.02.25_1-1080x1438.jpg', description: 'Теплая, удобная толстовка из высококачественного хлопка - футер начёс 320 гр (70/30% хб/пэ), что добавляет объем изделию. Вместительный основной карман скрывает несколько маленьких кармашков для мелочи, ключей или телефона. Свободный крой и качественный материал позволят вам оставаться активным даже в прохладную погоду. Графика выполнена в технологии DTF. Принт толстовки с персонажем из аниме Наруто.' },
    { id: 2, name: 'ВЫШИТЫЙ ХУДИ / SHINIGAMI', price: '14749₽', image: 'https://nikifilini.com/wp-content/uploads/2021/07/SHINIGAMI_28.02.25_1-1080x1438.jpg', description: 'Вышитый худи из высококачественного хлопка с флисовым подкладом. В просторном основном кармане скрывается несколько небольших карманов для хранения мелочи, ключей или телефона. Свободный крой и качественный материал позволят оставаться активным даже в прохладную погоду. В вышивке использованы светонакоптельные нити. Длительность и интенсивность свечения напрямую зависит от продолжительности и силы воздействия источника света.' },
    { 
      id: 3, 
      name: 'ХУДИ | GURREN LAGANN (R)', 
      price: '12650₽', 
      image: 'https://nikifilini.com/wp-content/uploads/2025/04/GL-back-1-700x932.jpg', 
      description: 'Теплая и мягкая к телу толстовка из высококачественного плотного хлопка. Просторный основной карман скрывает внутри несколько небольших карманов для мелочи, ключей или телефона. Свободный крой позволит оставаться активным даже в прохладную погоду.' 
    },
    { 
      id: 4, 
      name: 'ХУДИ | STRONGEST (SR)', 
      price: '14390₽', 
      image: 'https://nikifilini.com/wp-content/uploads/2024/11/HOODIE-STRONGEST-_SR_-pered.webp', 
      description: 'Теплая, удобная толстовка из высококачественного хлопка. Ткань — "Футер начёс", это добавляет объема изделию. Вместительный основной карман скрывает несколько маленьких кармашков для мелочи, ключей или телефона. Свободный крой и качественный материал позволят вам оставаться активным даже в прохладную погоду. Холсты на худи выполнены цифровой печатью, графика выполнена DTF.' 
    },
    { 
      id: 5, 
      name: 'ХУДИ / STRONGEST (R)', 
      price: '12650₽', 
      image: 'https://nikifilini.com/wp-content/uploads/2024/11/gojo_violet_front.webp', 
      description: 'Теплая, удобная толстовка из высококачественного хлопка. Ткань — "Футер начёс", это добавляет объема изделию. Вместительный основной карман скрывает несколько маленьких кармашков для мелочи, ключей или телефона. Свободный крой и качественный материал позволят вам оставаться активным даже в прохладную погоду. Холсты на худи выполнены цифровой печатью, графика выполнена DTF.' 
    },
    { 
      id: 6, 
      name: 'ДЖИНСОВЫЙ БОМБЕР | KAGUYA ITO (R)', 
      price: '22990₽', 
      image: 'https://nikifilini.com/wp-content/uploads/2024/11/DENIM-BOMBER-JACKET-_-KAGUYA-ITO-pered-2-1080x1438.jpg', 
      description: 'Легкий бомбер из джинсовой ткани классического силуэта с отложным воротником, эластичными трикотажными подвязами на манжетах и по нижнему краю. Бомбер оснащен прорезными карманами с двух сторон. Застегивается на фирменных кнопках.' 
    },
    { 
      id: 7, 
      name: 'ВЫШИТЫЙ ХУДИ / REVENGE CHERRY BLOSSOM (UR)', 
      price: '29990', 
      image: 'https://nikifilini.com/wp-content/uploads/2024/11/REVENGE-CHERRY-BLOSSOM-pered.webp', 
      description: 'Теплый и приятный к телу худи из высококачественного хлопка с флисовым подкладом. В просторном основном кармане скрывается несколько небольших карманов для хранения мелочи, ключей или телефона. Принт REVENGE CHERRY BLOSSOM. Это почти полностью вышитый худи, суммарное количество стежков которой составляет более 500 000 штук. Ранг - UR.' 
    },
    { 
      id: 8, 
      name: 'ДЖИНСОВЫЙ БОМБЕР / GOT (UR)', 
      price: '29990₽', 
      image: 'https://nikifilini.com/wp-content/uploads/2024/11/2024-11-13-18.52.06.jpg', 
      description: 'Легкий бомбер из джинсовой ткани классического силуэта с отложным воротником, эластичными трикотажными подвязами на манжетах и по нижнему краю. Бомбер оснащен прорезными карманами с двух сторон. Застегивается на фирменных кнопках. Принт выполнен плёнкой с эффектом золотого металлика.' 
    },
    { 
      id: 9, 
      name: 'ЗИП-ХУДИ / STRONGEST', 
      price: '14790₽', 
      image: 'https://nikifilini.com/wp-content/uploads/2024/08/Litso-strongest-1080x1438.jpg', 
      description: 'Мягко прилегающая к телу зип-худи создан из высококачественного хлопка. Вместительный основной карман скрывает внутри несколько маленьких карманов для хранения мелочи, ключей или телефона. Свободный крой позволит вам оставаться активным даже в прохладную погоду.' 
    },
  ];

  const toggleDescription = (id) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Список товаров</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name} 
                style={{ height: '380px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button onClick={() => toggleDescription(product.id)} className="btn btn-primary me-2">
                  {expandedProductId === product.id ? 'Скрыть' : 'Подробнее'}
                </button>
                {expandedProductId === product.id && <p className="mt-2">{product.description}</p>}
                <button onClick={() => addToCart(product)} className="btn btn-success">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;