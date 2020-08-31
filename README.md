# Splasher

Simple unsplash clone with favorite image feature

## How to run

### Development

1. Add `.env` file or export these environment variables on your machine

```
REACT_APP_UNSPLASH_API_KEY=${your key here}
```

2. Run `yarn start` to run development server with hot reloading

### Production

1. Add `.env` file or export these environment variables on the server

```
REACT_APP_UNSPLASH_API_KEY=${your key here}
```

2. Build project by running `yarn build`

3. Serve static files directly from `build` folder

## QnA

> Do you have any strong rationale for why you chose specific development technologies for
> this project that you would like to share with the team?

- I chose to work with ReactJS, since it is one of the most used frameworks. So, it is easier to work with react instead of say if I used any other old framework.

- I used ant-design framework and guidelines for a clean UI.

- I used a react hooks only approach instead of using redux since it would have made it complex.

- I used formik and Yup for easy form handling.

- I used @sifrr/storage for using localstorage, because of it's cross browser compatibility.

> Do you have any strong rationale for why you made specific design decisions (software
> architecture design) over alternatives?

I implemented localstorage based favorite storing system instead of going with a backend. Because,

- I would have needed a authentication system, which would have made the user flow complicated.
- It would have created two application that needed to be deployed
- easier to manage and maintain in MVP phase

> Do you have any strong rationale for why you made specific implementation decisions over
> alternatives?

I have implemented independent reusable components

- no deplicate code
- reusable code
- separation of concerns
- Simple dependency chart of components
  eg. images masonry component is used in home page as well as favorites page

## TODO

- Create backend system with authentication and saving user's favorites in DB.
- Use SSR for better cross browser compatibility (mini browsers)
- Write tests
- Add a zoom in photo view when you click on any image
- Add user profile view in our website instead of linking unsplash

## Browser compatibility

\> 92% of all users globally

- chrome 49+
- edge 12+
- firefox 45+
- Safari 9+
