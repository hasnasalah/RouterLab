# React Blog with Auth and Protected Routes
## Overview

This is a simple React blog application:
* Displaying a list of blog posts
* Viewing single post details
* Authentication using React Context
* Protected admin route
* React Router for routing between pages.

## Features
* Blog Page
    Lists all blog posts with clickable titles.
* Post Detail Page (/posts/:slug)
    Shows the title and content of a single post.
* Authentication
   Login and logout functionality using AuthContext.
* NavBar dynamically shows Login, Logout, or Admin links.
   Protected Admin Route (/admin)
   Only accessible to logged-in users.
   Redirects unauthenticated users to /login.
   