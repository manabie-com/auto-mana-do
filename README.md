
## Welcome to Manabie coding challenge

*Hello!*
*We're excited that you're interested in joining the Manabie. Below are the requirements and explanations for the challenge.*

### Notes: 
- Our challenge is TODO app based on create-react-app, cypress, cucumber and gherkin.
- All provided codes are in this repository. Please fork, complete your challenge, and create a PR for us.
- We judge your challenge:
    - Easy to understand.
    - Well organized.
    - Test cases.
- Dont worry if you cant complete the challenge in time. Just do your best in a mindful way.
- If you can't fully complete the challenge , please note the completed features.
- Very pleasure if you leave comment your idea at change
    
### Requirements
Write test cases for:
  - Create a new TODO item
  - Edit existing TODO
  - Remove TODO
  - Remove all TODO

### How to run this code
- Run ```yarn``` or ```npm install``` if this is the first time you clone this repo (`master` branch).

- Make sure that the development server is running on http://localhost:3000
  - You can do this by running `npm run start`

- Once the application is running you can then start cypress with commands below:
  - `yarn run cy:headless` - this will run features in Electron headlessly i.e., in command line only.
  - `yarn run cy:browser` - this will run features in Electron by opening it up. This also allows to inspect feature steps and debug.
  - `yarn run cy:open` - this will open cypress dashboard easy for you can keep track your test running.

Last updated: 2021/09/02
