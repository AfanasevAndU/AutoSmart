import React, { Component } from 'react';
import './TechnicalGuide.css';
import { Link } from 'react-router-dom';

export default class TechnicalGuide extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Как проверить юридическую часть автомобиля</h1>
        </header>

        <article>
          <section>
            <h2>Проверьте ваш автомобиль через сайт госуслуги</h2>
            <p>
            Можно использовать VIN или госномер, серию и номер СТС — на выбор. Вы получите информацию о технических данных авто, истории регистрационных действий, нахождении в розыске или залоге и о наличии ограничений
            </p>
          </section>

          <section>
            <p>
            С помощью других сервисов можно узнать дополнительную информацию. Так, на сайте ФССП можно узнать о непогашенной задолженности
            </p>
          </section>

          <section>
            <p>
            <a href="https://www.gosuslugi.ru/help/faq/registrate_transport/800568" target="_blank" rel="noopener noreferrer">
            <button>Госуслуги</button>
            </a>
            </p>
          </section>
          

          <footer>
            <div className='button-container'>
                <Link to="/Blog">
                    <button>Назад</button>
                </Link>
            </div>
          </footer>
        </article>
      </div>
    );
  }
}
