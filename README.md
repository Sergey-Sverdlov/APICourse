# APICourse
В данном репозитории находится полноценный проект API для взаимодействия с базой данных, содержающую информацию о различных курсах с авторизацией с помощью JWT токена, добавления, удаления, просмотр и обновления курсов.
# Цель работы
Целью работы является разработка WEB-сайта для интернет - магазина с возможностью выбора товара и оформление заказа.
# Решаемая проблема
Данный сайт упрощает пользователю покупку товара, позволяя просмотреть характеристики товара и оформить заказ.
# Основная информация о программе
* Написана с помощью быстрого, гибкого веб-фреймворка для приложений Node.js.
* Согласно ТЗ выполнена концепция MVC.
* Для взаимодействия с базой данных PostgreSQL используюеся ORM sequalize.
* Есть DTO и DAO модели сущностей.
# Роли пользователей
* Авторизация происходит с помощью JWT токена, где хранится информация о роли пользователя.
* Администратор имеет право добавлять и удалять курсы, просматривать полную информацию и обновлять.
* Зарегистрированные пользователи могут просматривать полную информацию о курсе и добавлять в избранное.
* Незарегистрированные пользователи могут зарегистрироваться и просмотреть краткую информацию о всех курсах.
# Swagger
Swagger представлен согласно правилам REST API
Просмотреть Swagger можно по ссылке:
* https://app.swaggerhub.com/apis/SVERDLOV2910/ShopCourseApi/0.0.1
# Figma дизайн
Модель в FIGMA сделана с учетом всех требований ТЗ для FIGMA
Дизайн Frontend приложения представлен по ссылке:
https://www.figma.com/file/l6dWjs5fAVTLofR2vSKG51/lab_02?type=design&node-id=0-1&mode=design&t=UxCIy8jE9E5L7HtV-0

# Функционал
* Регистрация
* Авторизация
* Добавление в избранное
* Добавление в корзину
* Просмотр всех товаров
* Оформление заказов

# Use - Case диаграмма
![USE-Case диаграмма drawio — копия](https://user-images.githubusercontent.com/61983829/201441652-304ea906-1ab4-4c08-ae5f-e5b6aa6af9cc.svg)


![ER диаграмма drawio](https://user-images.githubusercontent.com/61983829/217398088-45901295-8376-4d3b-9344-fb577149ec62.png)
