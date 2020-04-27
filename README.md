# _Currencey Exchange_
## _By: Celeste Field & Chisato Murakami & Joseph Pearce & Nitun Datta_
## Description

_This application will take the US currency and display it in various forms of currency from around the world. It will do so by using the API from ExchangeRate-API to gather data to display the output. This application is showing my knowledge of using API calls, parsing data, handling errors, and correclty using webpack to run my application._

## Setup


* _Clone repository from Github: https://github.com/fieldceleste/movie-api-teamweek.git_
* _Open the repository folder in the terminal_
* _Enter $ npm install - this will allow you to install all of the packages in this project._
* _Make sure you intitialize GIT, and delete the exsiting .git file by running in the terminal $rm -rf .git. 
* _Be sure to check your .gitignore folder to include the correct files to ignore for this project. 
* _Now that you have everything ready, you can run git init. 
* _Open in editor (i.e. Visual Studio Code) and create your own repo._
* _Enter $ npm run start to run your local server and display your page._
* _As well, you can create a gh-pages to diplay your site or use the live server extension on Visual Code Studio.

## Known Bugs
_No known bugs at this time_

## Technology

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _Git_
* _GitHub_
* _npm_
* _Node_
* _Jest_
* _Webpack_
* _Babel_
* _API_
* _ENV_


## Specs

|Behavior|Input|Output|
| :-----|:-----|:-----|
| It will take an amount in US currecy and display it in Euros (Version 2020)|$10.00| [€9.26]|
| It will take amount in US currecy and display it in Pounds (Version 2020) |$10.00|[£8.11]|
| It will take amount in US currecy and display it in Japanense Yen (Version 2020)|$10.00|[¥1,074.56]|
| It will take amount in US currecy and display it in Canadian dollars (Version 2020)|$10.00|[$14.11]|
| It will take amount in US currecy and display it in Mexican Peso (Version 2020) |$10.00|[$249.79]|
| If there is an error with the request, the application should report an error stating "malformed-request, your input was not valid"|
| If the query repsonse does not recognize the currency inputed, you should receive a message saying "unknown-code"|

## Legal

#### MIT License

### Copyright (c) 2020 Celeste Field

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.