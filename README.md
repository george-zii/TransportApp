# TransportApp
Мобильное приложение позваляет отслеживать ТС (транспортные средства) на карте и просматривать информацию о них. Приложение разрабатывалось на macOS приимущественно под ios. 

## Содержание
- [Технологии](#технологии)
- [Использование](#использование)
- [To do](#to-do)
- [Разработчик](#разработчик)
- [Источники](#источники)

## Технологии
- [TypeScript](https://www.typescriptlang.org/)
- [Expo + Expo Routing](https://docs.expo.dev/)
- [TanStack Query v5](https://tanstack.com/query/latest/docs/react/overview) и [TanStack Store v0](https://tanstack.com/store/latest/docs/overview)
- [YandexMapsAPI](https://yandex.ru/dev/jsapi30/doc/ru/quickstart)
- ...

## Использование 
Для установки и запуска приложения необходим [NodeJS](https://nodejs.org/) v20+.

Вы можете кланировать репозиторий с помошью консольной команды:
```sh
$ git clone https://github.com/george-zii/TransportApp.git
```
Затем в папке репозитония для запуска сборщика Metro выполните команду
```sh
$ npx expo start
```
И в отдельно окне терминала необходимо запустить [json-server](https://github.com/typicode/json-server#getting-started)
p.s. может потребоваться установка пакета
```sh
$ npx json-server --watch server/db.json --port 3000
```
Так же может потребоваться сборка зависимостей, в прокете использовался Yarn
```sh
$ Yarn
```

##To do
- [ ] Разобрать с работой с сетью в Android приложении (Android отказывается слать запросы на localhost, возможно проблема в http, есть предпологаемое решение, реализую в ближайшее время)

## Разработчик
Зибровский Георгий - mobile developer - zibrovski.g@gmail.com

## Источники
Все источники используемые в проекте можно найти в разделе [Технологии](#технологии)
