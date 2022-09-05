# Task RS Lang

"RS Lang" – an application for learning english words, including an textbook with a database of words to study, mini-games for repeating them, a statistics page for tracking individual progress.

Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/rs-lang/rslang.md <br/>
Deploy: PASTE LINK <br/>
Backend: https://react-rslang-back.herokuapp.com
![image](https://user-images.githubusercontent.com/81522781/187300410-8eef69b0-ea47-405b-9cac-f66575e9a9c1.png)

## Application Structure
- Authorization page
- The main page of the application
- Statistics page
- A dictionary with word level tabs and a "Hard Words" tab
- Minigames AudioChallenge, Scrint

## Source data
Collection "4000 essential English words". The collection contains 3600 frequently used English words, the study of which you need to organize. The words in the collection are sorted from simpler and more famous to more complex. The first 400 most frequently used words were not included in the collection. It is believed that this is the basic stock of an adult left over from school / university or previous attempts to learn a language. The words are divided into groups of 20 words. The whole collection is divided into six parts of 600 words each

## Technologies that we used

-  ***React*** <br/>
1. The main advantage of the chosen technology is the ability to create encapsulated components with their own state, and then combine them into complex user interfaces. This was a decisive factor when choosing a technology for team development
2. React creates a cache structure in memory, which allows you to calculate the difference between the previous and current interface states for optimal updating of the browser DOM 
3. Another advantage of React — TypeScript XML (TSX) is the extension of TypeScript syntax, which allows you to use HTML-like syntax to describe the structure of the interface

-  ***React Hooks*** 
1. It's easier to share state logic (custom hooks)
2. No need to remember about 'this'
3. Simplification of the logic associated with the lifecycle


- ***TypeScript***
1. Strict typing
2. More OOP features: access modifiers, interfaces, abstract classes, etc.
3. Clearer and more readable code
4. Minimizing possible errors
  

- ***Material UI*** - to create components with ready-made styles
- ***Styled-components*** - to simplify working with styles
- ***Plotly*** - to visualize data and plot statistics
- ***Postman*** - checking server requests
- ***Netlify*** - automatic assembly and deployment of the current state of the development branch
- ***Eslint / Prettier*** -  for a single code style of the whole team + exclusion of some errors
- ***react-router-dom*** - to organize navigation (including in the browser) between pages
- ***Trello*** - it was used to distribute tasks and track the process of their implementation by all participants, in order to meet deadlines and avoid duplication
- ***Telegram*** - for regular calls and collective discussion of the tasks set, the difficulties of their fulfillment and the results obtained

## Code quality control
To ensure quality control, software tools (linter, prettier) and the division of development into different branches using the Git version control system were used. The main, working application is located in the develop branch, to which the development participants make a pull Request. Rule for PR verification: mandatory verification by a team lead and one project participant.

## Creators
### Team 21
- Andrej Amelyanovitsch -  Authorization page, minigame AudioChallenge
- Anastasia Polivoda - Textbook, Statistics page
- Lizaveta Petrova - Mainpage, minigame Sprint

