# gripp - a social ice-breaker game FRONTEND
Finally, a digital card game for the mentally unstable generation - get a gripp. offers a truly dark experience to share with your friends, coworkers and family. They’re probably worse off than you are. 

This game is lightly inspired by Cards against humanity’s darkness with a simpler touch of a traditional truth-or-dare drinking game in the style of WRNRS &  Monday Attire games. Best of all - it’s digital, who wants to be offline in this generation? pfff, card-game people. 

The game will work in the sense that a group of people can play together IRL, but instead of deck of cards, it’s all in your phone. 

## How it works, 
This is an ice-breaker style game meant to spark conversation through statements, there are no official points to be collected. 
- The user creates a profile and logs in. 
- From the game page - the user can see their profile and start the game. 
- The game consists of cards with rendered statements, some are less or more controversial to spark conversation around the topic with focus on raising awareness of mental health challenges and struggles. 

### Aim,  
Get people to talk about how they really are, in order to get a grip of their mental health. 

## How this project was created
The project was first planned and plottet out using Notion and Figma. The project itself is built using React Native through Expo using  `expo cli` and `npx create-expo-app my-app` as well as it's own backend. The file structure was split into Screens and components (which are used to make up screens). 


### Tech used in frontend
- React Native
- React-Redux
- Navigation using @react-navigation/native
- Styled components 
- Swiper using react-native-deck-swiper

#### Tech using in backend
- The statements are rendered through our own API, created using EXPRESS and stored in the database.
- Database of choice is MongoDB
- Register credentials are encrypted and stored in the database using mongoose schemas and models. 

## Deployment
This project is currently not deployed as an app, but exported as web-build using the 
expo Netlify Cli, for easier distribution and demo. 

## Links
Backend https://github.com/Sneezan/gripp-backend
Landing Page https://github.com/Sneezan/project-gripp

## mockups
![MockUpsGripp](https://user-images.githubusercontent.com/105229808/213722549-b3ea9896-00f2-44d6-af1d-d070f91379a4.png)


