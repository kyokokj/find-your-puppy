# README

- DOG APP is ...
  I'm interested in how I can save pets from abandoned in my country, Japan. While I was working as a software developer in Japan, I was looking after abondaned dogs and cats on weekends as a volunteer as well. No matter how hard volunteers try to help them, too mamy pets were coming to shelters every single day. I guess that's because there is no strict law to protect animals nor punish bad breeders who produce lots of animals as product and abandone them. This is an app to save dog with managing dog's information and limit the number of puppies ;)

- What I learnt ...
  Main purpose of this project is studying React so I didn't develop server side so much.
  There are a couple ways to use React with Rails, like using gem, and I've chosen a way developing server side and client side separately by rails API.
  - The difference between components in React
    - Container Component ... has data and give them from parent to child
    - Presentational Component ... Only display sth they've got, like button / modal
  - client side routing using axios
    axios is a lightweight HTTP client based on the XMLHttpRequests service. It is similar to the Fetch API and is used to perform HTTP requests

* System information
  - Ruby v2.5.7
  - Ruby on Rails v6.1.4
  - db
  - installed gem 'rack-cors' to admit
  - CSS in JS using Material UI & styled-components

- directry structures in client side
  - ./frontend
    - src
      - apis
        connect to api-rails
      - components
        Presentational Component
      - containers
        Level1, Container Component, conduct data
      - reducers
        having data like cupsel
      - urls
        define url here like route.rb in rails

**Process**

- create an app
  > $ rails new find-your-puppy --api
  > $ cd find-your-puppy
- build server sides
- create migrations and models
  > $ rails g migration CreateBreeders
- create model
  > $ rails g model xxx
- create controller
  > $ rails g controller xxx
- build client sides with React
  > $ npx create-react-app frontend
  > You can start client side with this command
  > $ npm start
  > Would you like to run the app on another port instead? › (Y/n) y
- install React Router

  > $ npm install react-router-dom

-
