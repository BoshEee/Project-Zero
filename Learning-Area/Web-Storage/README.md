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
 To answer that you should ask yourself another question, 
 in your app, **who needs this data — the client or the server?**

 **Many** secure websites employ cookies to validate their users’ identities after they’ve logged in to prevent them from having to re-enter their credentials on every page. Another use for cookies is to customize or adjust user experience based on limited browsing history on the site.
 
 **There are two types of cookies:** 
 

 **Session cookies** do not containan expiration date. Instead, they are stored only as long as the browser or tab is open. As soon as the browser is closed, they are permanently lost. This type of cookie might be used to store a banking user’s credentials while they are navigating within their bank’s website since their information would be forgotten as soon as the tab is closed.
 
**Persistent cookies** do have an expiration date. These cookies are stored on the user’s disk until the expiration date and then permanently deleted. They can be used for other activities such as recording a user’s habits while on a particular website in order to customize their experience every time they visit.
 

**Pros**

* Legacy support (it's been around forever)
* Persistent data
* Expiration dates

**Cons**

* Each domain stores all its cookies in a single string, which can make parsing data difficult
* Data is unencrypted, which becomes an issue because though small in size, cookies are sent with every HTTP request Limited size (4KB)
* SQL injection can be performed from a cookie


### Conclusion

While these storage options have their positives and negatives, they both have applications in modern web development. Cookies are smaller and send server information back with every HTTP request, while LocalStorage is larger and can hold information on the client side.
When you make your next application, think about these various uses and decide which type of storage is right for you.

 Repo Link => https://github.com/BoshEee/Project-Zero/tree/main/Learning-Area/Web-Storage


# Usefull Links

- [How to use localStorage](https://blog.logrocket.com/localstorage-javascript-complete-guide/#webstorageapi)
- [How To Use Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- [How To Use Cookies](https://www.w3schools.com/js/js_cookies.asp)

###### tags: `Researches` `Local Storage` `Js` `Web Storage`
