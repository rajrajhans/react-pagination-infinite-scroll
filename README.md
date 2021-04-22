# Infinite Scroll in React

[Link to associated blog post](https://rajrajhans.com/2021/04/infinite-scroll-in-react/)

This is a demo React app that simply calls the Unsplash API to get random images, 10 at a time, and displays them.

When you have to to present large number of data records in your React app, you have two options:

## Pagination

You can either have **pagination**, which means that you'll display certain number of records on a screen on one page, and then the user has to click on a button to load the next set of data.

The `pagination` branch of this repo contains the implementation which uses pagination.

## Infinite Scroll

The second option is to use **infinite scroll**, which means that the user just has to scroll, and it will automatically display the next set of data as the user scrolls further down, similar to how Twitter or Facebook feeds work. It's a much better experience rather than the user having to click on a button every time they want to load next page's data.

The `master` branch contains the implementation for the same using infinite scroll.

Do check out the [blog post](https://rajrajhans.com/2021/04/infinite-scroll-in-react/) for more details.

**Note**: To run the project locally, you need to create a free account and get an API key from [Unsplash](https://unsplash.com/developers) and enter it in the `.env` file.

Cheers!
