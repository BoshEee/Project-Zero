# Web Storage - DOM Storage

Web storage, also known as DOM storage (Document Object Model Storage), provides web apps with methods and protocols for storing client-side data.

It's similar to cookies but with a greatly enhanced capacity and nothing stored in the HTTP request header.

Web Storage is standardized by the World Wide Web Consortium (W3C)and WHATWG.All major browsers support it.

# Web Storage Types

There are two main web storage types behaving similarly to cookies and session cookies respectively :

## Local Storage

The Web Storage API is a set of mechanisms that enable browsers to store key/value pairs. It is designed to be much more intuitive than using cookies.

The key/value pairs represent storage objects, which are similar to objects except they remain intact during page loads, and are always strings. You can access these values like an object or using the getItem() method.

### localStorage in JavaScript

localStorage is a property that allows JavaScript sites and apps to save key/value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.

    localStorage can only store strings.

## Session Storage

The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.

## The Difference Between sessionStorage and localStorage

The Web Storage API consists of two mechanisms: sessionStorage and localStorage. Both sessionStorage and localStorage maintain a separate storage area for each available origin for the duration of the page session.

The main difference between sessionStorage and localStorage is that sessionStorage only maintains a storage area while the browser is open (including when the page reloads or restores) while localStorage continues to store data after the browser is closed. In other words, whereas data stored in sessionStorage is cleared when the page is closed, data stored in localStorage does not expire.

## Why would you use cookies vs local/session storage?

# Usefull Links

- [How to use localStorage](https://blog.logrocket.com/localstorage-javascript-complete-guide/#webstorageapi)
- [How To Use Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- [How To Use Cookies](https://www.w3schools.com/js/js_cookies.asp)

###### tags: `Researches` `Local Storage` `Js` `Web Storage`
