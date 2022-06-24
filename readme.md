## Структура проекта

- src/index.html - Основной шаблон
- src/index.js - Подключение основного контроллера (логики проекта) стилей проекта.
- src/css/ - Стили проекта 
- src/model/ - Данные проекта.

- src/mainController.js - Основная логика проекта, связь модулей с моделью (данными) и между собой, инициализация начального состояния проекта. Подключает модели данных и контроллеры модулей.
- src/controller/ - Контроллеры модулей. Подключают визаулизацию, используются в основном контроллере. Название скрипта === Название модуля.
- src/view/ - Визуализация модуля. Название скрипта === Название модуля.

## Разработка модуля modulName

1. Создаём визаулизацию для модуля: src/view/modulName.js (экспортируем методы, возвращающие созданные DOM элементы)
2. Создаём логику модуля: src/controller/modulName.js, подключаем в него визаулизацию, снабжаем созданные визуализацией DOM - элементы обработчиками. Для доступа к изменению данных или вызова методов др. модулей используем mainController
3. !точка конфликтов! ./mainController Импортируем контроллер модуля. Добавляем основную логику проекта, используя методы котроллеров модулей и методы доступа/изменения данных модели. 