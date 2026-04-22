# Assignment WT - Web for Data Science

## Project Name

Steam Games Archive App

## Objective

Create a functional, visually engaging, and _interactive_ data visualization web application that consumes the API you built in the previous assignment. The application must authenticate users via OAuth and be publicly accessible.

_Describe your application in a few sentences: what does it do, what dataset does it visualize, and what insights does it provide?_

- The application visualizes the data from the [_API_](https://gitlab.lnu.se/1dv027/student/jk224vx/exercises/steam-api) which uses 15.000 steam games. The application enables users to manually check games, developers and genres by themselves and each resources has related links to other resources.
- The user can navigate to /games and click on a specific game and will receive information about that game and if the game has any developers and genres listed, the user can navigate to the developer(s) and genre(s) and get more information about those resources.

- Users can also navigate to /dashboard to see a PieChart, BarChart and two tables with data that I thought would be most interesting.
- PieChart visualizes the number of games that's present in the dataset and how much they cost in a set of ranges between 0-10, 10-30, over 30 and games that are free or if the price is not announced(prices in dollars).
- BarChart visualizes the number of games that has players owning them, the ranges under 50K, 50-200K, 200K-1M, over 1M and no owners or not announced in the dataset.
- The tables are showing the number of genres present in the dataset and how many games have the specific genre and number of developers in the dataset and how many games they have created. The developer table is using isolated pagination (not url based pagination) to navigation through if the user want to look for a specific developer. Pagination was not used in the genre table because it's only 27 genres (28 if you count one I created myself) and would create unnecessary overhead.

## Deployed Application

_Provide the link to your publicly accessible application:_

[_Link to public URL_](https://cu2107.camp.lnu.se/)

## Requirements

See [all requirements in Issues](../../issues/). Close issues as you implement them. Create additional issues for any custom functionality.

### Functional Requirements

| Requirement                                                                        | Issue                  | Status               |
| ---------------------------------------------------------------------------------- | ---------------------- | -------------------- |
| API Integration — the app consumes your WT1 API                                    | [#14](../../issues/14) | :white_large_square: |
| OAuth Authentication — users log in via OAuth 2.0                                  | [#15](../../issues/15) | :white_large_square: |
| Interactive data visualization with aggregation/adaptation for 10 000+ data points | [#11](../../issues/11) | :white_large_square: |
| Efficient loading — pagination, lazy loading, loading indicators                   | [#13](../../issues/13) | :white_large_square: |

### Non-Functional Requirements

| Requirement                                   | Issue                | Status               |
| --------------------------------------------- | -------------------- | -------------------- |
| Clear and well-structured code                | [#1](../../issues/1) | :white_large_square: |
| Code reuse                                    | [#2](../../issues/2) | :white_large_square: |
| Dependency management and scripts             | [#3](../../issues/3) | :white_large_square: |
| Source code documentation                     | [#4](../../issues/4) | :white_large_square: |
| Coding standard                               | [#5](../../issues/5) | :white_large_square: |
| Examiner can follow the creation process      | [#6](../../issues/6) | :white_large_square: |
| Publicly accessible over the internet         | [#7](../../issues/7) | :white_large_square: |
| Keys and tokens handled correctly             | [#8](../../issues/8) | :white_large_square: |
| Complete assignment report with correct links | [#9](../../issues/9) | :white_large_square: |

### VG — AI/ML Feature (optional)

For a VG grade, integrate **one** AI/ML feature into the application. Pick one below or propose your own of similar scope. See the [VG issue](../../issues/12) for full details and acceptance criteria.

| Option                                                        | Status               |
| ------------------------------------------------------------- | -------------------- |
| Semantic Search — natural language queries matched by meaning | :white_large_square: |
| Content-Based Recommendations — "items similar to this one"   | :white_large_square: |
| Sentiment Analysis — analyze and visualize text sentiment     | :white_large_square: |
| Text Summarization / Generation — LLM-powered summaries       | :white_large_square: |
| Clustering & Grouping — auto-group similar items visually     | :white_large_square: |
| RAG — natural language Q&A grounded in your dataset           | :white_large_square: |
| Other: _describe_                                             | :white_large_square: |

_Describe your chosen AI/ML feature and how it integrates with your application:_

## Core Technologies Used

| Layer             | Options                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| **Visualization** | D3.js, Chart.js, Plotly, or similar                                     |
| **Front-end**     | React, Vue, Next.js, Nuxt, or similar                                   |
| **Styling**       | Tailwind CSS, Bootstrap, Material UI, shadcn/ui, Ant Design, or similar |

_List the technologies you chose and briefly explain why:_

- For the application I used Nuxt.js as the main framework using TypeScript as language.
- TailwindCSS for styling.
- Vue for the html pages.

## How to Use

_Explain how to interact with your visualization (controls, filters, etc.). Screenshots/gifs are encouraged._

![[Dashboard Image](public/images/dashboard.png)]

- dashboard.png shows the main visualization of the application. You can hover above the PieChart or BarChart for more readable data than just checking at the actual chart. For example, hovering above the PieChart shows the amount of games that cost X-dollars and the percentage of the pie that the price range covers. BarChart is showing only the number of games that has X-amount of players owning the game.

![[All Games Image](public/images/allgames.png)]

- allgames.png shows all the games that is in the 15.000 steam dataset, only showing 20 results per page for performance. Using pagination with **Next** and **Previous** buttons in the bottom to navigate through the list of games.

![[Specific Game Image](public/images/specificgame.png)]

- specificgame.png shows a specific game and it's related data. Developers and Genres are clickable links so the user can navigate further into the application to get specific data. For instance, the user might be intrested in what the Developer **Accolade, Inc.** has created more than the game Redline, the user can click on the name and get a list of games that the developer has created and navigate to each game from there.

## Acknowledgements

_Resources, attributions, or shoutouts._
