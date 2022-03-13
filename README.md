Installation
------------

The module is suitable for discord.js **v12** and **v13**. Check the table below to see which version meets your needs.

discord.js | Node.JS | Module version | NPM package          | Docker image                |
---------- | ------- | -------------- | -------------------- | --------------------------- |
v13.*      | 16.6+   | v3.*           | discord-tictactoe@^3 | utarwyn/discord-tictactoe@3 |
v12.*      | 14+     | v2.*           | discord-tictactoe@^2 | utarwyn/discord-tictactoe@2 |

Running via Docker
------------

1. Make sure to have Docker installed.
2. Start Docker container based on one of our [DockerHub images][1] using an API token:\
   `docker run -e TOKEN=YOUR_TOKEN utarwyn/discord-tictactoe@3`
3. You can pass options directly with `-e OPTION_NAME=option_value` or use the option `-v $(pwd)/config/config.json:/app/config/config.json` to load an entire config file.


Running via Node.js
------------

1. Check with `node -v` that you are running appropriate Node.js version.
2. Install the project from [npm][2]:\
   `npm install discord-tictactoe@^3` or `yarn add discord-tictactoe@^3`
3. Import module into your script:
   ```javascript
   const TicTacToe = require('discord-tictactoe');
   ```
4. Check usage examples in this [wiki page][10].

