# Pagination & Infinite Scroll in React

[Link to associated blog post](https://rajrajhans.com/2021/04/infinite-scroll-in-react/)

This is a demo React app that simply calls the Unsplash API to get random images, 15 at a time, and displays them.

When you have to to present large number of data records in your React app, you have two options:

| Pagination                                      | Infinite Scroll                                      |
| ----------------------------------------------- | ---------------------------------------------------- |
| ![](/docs/unsplash_react_pagination_record.gif) | ![](/docs/unsplash_react_infinite_scroll_record.gif) |

## Pagination

You can either have **pagination**, which means that you'll display certain number of records on a screen on one page, and then the user has to click on a button to load the next set of data.

You can find the implementation of Pagination at [`src/PaginationApp.js`](src/PaginationApp.js).

Visit [this link](https://react-infinite-scroll-demo-hy4y6j8wt-rajrajhans.vercel.app/) for a live demo of pagination.

## Infinite Scroll

The second option is to use **infinite scroll**, which means that the user just has to scroll, and it will automatically display the next set of data as the user scrolls further down, similar to how Twitter or Facebook feeds work. It's a much better experience rather than the user having to click on a button every time they want to load next page's data.

There are two ways we can implement Infinite Scroll:

1. **Using Scroll Events Listener**: We will listen to DOM Scroll Events emitted and then see if we have reached bottom. If yes, we'll trigger the request. Pretty straight forward. Using scroll events works, but it might cause performance issues in your app because the scroll events listener code runs on the main thread.
2. **Using Intersection Observer**: This one is a relatively new approach. Intersection Observer API lets our code register a callback function that is executed whenever an element they wish to monitor enters or exits another element. This way, our webapp no longer needs to do anything on the main thread to watch for this kind of element intersection, which makes it more performant.

You can find the implementations of Infinite scroll using both Scroll Events Listener and Intersection Observer at [`src/ InfiniteScrollApp.js`](src/InfiniteScrollApp.js) and [`src/ InfiniteScrollIntersectionObserverApp.js`](src/InfiniteScrollIntersectionObserverApp.js) respectively.

Visit [this link](https://react-infinite-scroll-demo-9o91prgax-rajrajhans.vercel.app/) for a live demo of infinite scroll.

Do check out the [blog post](https://rajrajhans.com/2021/04/infinite-scroll-in-react/) for more details.

**Note**: To run the project locally, you need to create a free account and get an API key from [Unsplash](https://unsplash.com/developers) and enter it in the `.env` file. If you want to check how the JSON response from Unsplash looks like, you can find a sample at `src/sample_api_response.json`.

Cheers!
