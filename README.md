# Bulker: веб-версия известной настольной игры

![Логотип Bulker](./docs/img/bulker_300.png)

## Содержание

* [Введение](#введение)
* [Развёртывание](#развёртывание)

## Введение

В данное время проектируется базовая версия (программа мессенджера) с инфраструктурой и API, которые войдут далее в проект настольной игры.

## Развёртывание

Для сборки проекта в качестве контейнеров:
```bash
$ docker-compose build
```
После сборки (с учётом того, что изменений в проект внесено не было) сервер и клиент можно поднять через следующую команду:
```bash
$ docker-compose up
```
* Клиент обслуживает на localhost по порту 5600.
* Сервер слушает запросы на localhost по порту 5000.