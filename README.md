# Redux
## Необходимо реализовать приложение состоящее из роутов:
1. “/“ - login
2. “/tweets” - страница с твитами (не доступна без авторизации) 
3. “/profile“ - страница с произвольным текстом (доступна без авторизации)§

## “/”
Форма входа (/) принимает “фейковые” данные:
username: admin
password: 12345

Если введены другие данные, то показывать сообщение:
Имя пользователя или пароль введены не верно

Если введены корректные данные, то перебрасывать на страницу /profile

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.

## “/profile”
Любая текстовая информация

## “/tweets”
Содержит список твитов
Если пользователь кликает на страницу “tweets” и он не “авторизован” — перекидывать на страницу “/” форму логина
Каждый твит представляет собой
```flow
{
	id: unique String || number,
	name: String,
	Author: String,
	Date: String,
	text: String,
}
```
Лэйаут твитов позволяет добавить новый твит, новый твит добавлять в конец массива. После клика на кнопку добавления нового твита пользователь видит форму твита. Все поля на ней required. Автор подставляется из профиля, дата берется как текущая. Если поля не заполнены вывести нотификацию: “Заполните все поля”. Если форма добавления твита валидна, то нужно добавить этот твит в массив и закрыть форму добавления.

Для каждого твита доступно два контрола:
1. Удаление твита
2. Toggle на показ скрытие текста твита

## Дизайн
[Дизайн](https://docs.google.com/presentation/d/1V78Rf280Q-k3H6ttYXLAYCsxOPMkTHSy8r8UCCaj_nk/edit?usp=sharing) - дизайн представлен в общем виде. Размеры и цвета брать из него не обязательно.
ссылк на общий коцепт приложения. 
 
## App
Все необходимое есть в папке app:
Доставлены зависимости
react-router-dom
react-redux
redux
styled-components

Как пользоваться:
app/README.md
