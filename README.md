# README

## Навигация

1. [Архитектура](#архитектура)
2. [Технологии](#технологии)
3. [TODO](#todo)
4. [Установка и Запуск](#установка-и-запуск)
5. [Ссылка на проект](#ссылка-на-проект)

## Архитектура

Проект организован следующим образом:
- **app**: Основные файлы приложения, включая глобальные стили и макет.
- **components**: Папка, содержащая все компоненты приложения. Включает в себя:
  - `button`
  - `dignities`
  - `faq`
  - `footer`
  - `header`
  - `help`
  - `hero`
  - `prices`
  - `services`
  - `slider-nav`
  - `steps-slider`
  - `title-badge`
  - `whyus`
- **constants**: Папка с файлом `index.ts`, содержащим константы.
- **context**: Папка с файлом `slider-context.tsx`, содержащим контекст для слайдера.
- **public**: Публичные файлы, такие как шрифты и изображения.

## Технологии

В проекте используются следующие технологии:
- **Next.js 14.2.5**: Фреймворк для React-приложений.
- **React 18**: Библиотека для создания пользовательских интерфейсов.
- **TypeScript 5**: Язык программирования с поддержкой статической типизации.
- **Sass 1.77.8**: Препроцессор CSS для написания стилей.
- **SwiperJS 11.1.9**: Библиотека для создания слайдеров.

## TODO

Формы, которые нужно доделать (можно найти в проекте cmnd + F - TODO):
1. Форма обратной связи.
2. Регистрационная форма.
3. Форма входа.
4. Форма подписки на новости.

## Установка и Запуск

### Предварительные требования

Для запуска проекта необходимо иметь установленный Node.js и npm (или yarn).

### Установка зависимостей

```bash
npm install
```
или
```bash
yarn install
```

### Запуск проекта в режиме разработки

```bash
npm run dev
```
или
```bash
yarn dev
```

### Сборка проекта

```bash
npm run build
```
или
```bash
yarn build
```

### Запуск собранного проекта

```bash
npm start
```

### Команды для проверки линтинга

```bash
npm run lint
```
или
```bash
yarn lint
```

## Ссылка на проект

Проект доступен по [ссылке](https://landing-henna-delta.vercel.app/).