## Тестовое задание - Стажер frontend-разработчик Vue 

## Как запустить проект

1. Склонировать репозиторий

```bash
git clone https://github.com/Ram1s17/mts-digital-task.git
```

2. Установка зависимостей

```bash
npm install
```

3. Для запуска в режиме разработки выполнить

```bash
npm run dev
```

## Описание

Cверстан адаптивный mobile first макет с брейкпоинтами 320, 480, 768, 1000+.

Функционал:
1.	Данные для галереи берутся по API - https://rickandmortyapi.com/documentation/#rest (для данного задания используется запрос https://rickandmortyapi.com/api/character)
2.	Реализована пагинация. При клике по элементам пагинации происходит корректная постраничная навигация с подгрузкой соответствующих данных из API.
3.	Реализована возможность перейти к интересующей странице пагинации при загрузке сайта, указав нужный параметр в URL (`/?page=12`).


Приложение разработано на Vue 3 с Composition API и Vue Router.