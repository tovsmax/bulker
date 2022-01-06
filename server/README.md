# Basic REST API Server

## Содержание

* [Введение](#введение)
* [Контракт](#контракт)
* [Отладка](#отладка)
* [Структура](#структура)

## Введение

На данном этапе разработки (скажем так, самом начальном и полном ошибок) я решил написать базовый сервер, где была бы базовая реализация REST API.

Используется стандарт языка **C# 9**. Проект должен быть совместим с **.NET 5.0** и выше.

Сервер доступен в `localhost` по портам 5000 (HTTP) и 5001 (HTTPS).

## Контракт

```yaml
/Players:
    get:
        description: 'Get list of players'
        responses:
            content:
                players:
                    -
                        id:
                            type: string
                            format: guid
                        name:
                            type: string
                        createdDate:
                            type: string
                            format: date


    post:
        description: 'Creates a new player record'
        requestBody:
            required: true
            content:
                name:
                    type: string
        responses:
            '200':
                description: OK
                content:
                    method: 'GET /Players/{id}'


/Players/{id}:
    get:
        description: 'Returns player object by id'
        responses:
            '200':
                description: OK
                content:
                    player:
                        id:
                            type: string
                            format: guid
                        name:
                            type: string
                        createdDate:
                            type: string
                            format: date
            '404':
                description: Not found

    put:
        description: 'Updates the existing player record'
        requestBody:
            required: true
            content:
                name:
                    type: string
        responses:
            '200':
                description: OK
            '404':
                description: Not found

    delete:
        description: 'Deletes the existing player record'
        responses:
            '200':
                description: OK
            '404':
                description: Not found
```

## Отладка

После компиляции сервера необходимо запустить отладку приложения.
После этого перейти по одной из нижележащих ссылок, чтобы протестировать RESTful запросы:
```
http://localhost:5000/swagger/
https://localhost:5001/swagger/
```
Предварительно может потребоваться исполнить эту команду (браузеры по умолчанию не доверяют сертификатам запускаемого сервера):
```bash
$ dotnet dev-certs https --trust
```

## Структура

* **`Entities`**
 * Объекты с некоторыми полями данными.
* **`DTO`**
 * Обёртки объектов. Нужны для безопасной передачи свойств объектов согласно REST API.
* **`Controllers`**
 * Конвертирует REST-запросы в обращения к БД, при необходимости возвращает DTO.
* **`Repositories`**
 * Определяется интерфейс БД и его реализация. На данный момент реализована не сохраняемая БД.
* **`Properties`**
 * Стандартные настройки для исполнения. Возможно, работают только с Visual Studio Code. (shrug)