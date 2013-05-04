# Idea Cloud

Idea Cloud is a simple and intuitive collaborative idea management tool.


## Vision

Headline: __To support the creation of ideas in a tweet like form__

This is essentially a "concept" capture application. The application will restrict the number of characters each idea can take to 140 (?) characters. The application will also capture who created it, their avatar, date created and optionally, a further description of the idea. Users can give an idea a "thumbs up" or "thumbs down" and provide a threaded commentary on any ideas. The application will show each User a count of the number of Users currently logged in, and also show a sample of the Users avatars. If a new idea is created when a User is currently logged-in then they will be shon it immediately and be given the opportunity to give it a "thumbs up".

It will be possible to search all the ideas and by default the application will show the most common words out of all the ideas created, with the idea that this statistical view of the ideas might show how popular an ideas actually is.

## Presentation

The application will be themed around the idea of "clouds" of ideas. This will extend to cover the entry of ideas, their individual presentation and a "wurdle" of the most common terms. Logged in Users will be presented in their own small clouds (balloons?). Search results and the details of an idea will be shown in a more practical view, but still following the theme of clouds. When a User is typing then this will be communicated to other logged in Users via a pictorial thought bubble/cloud metaphor. A subtle animation of most of these elemements will be present throughout the application and animated transitions between the elements will be commonplace.

## Technology

The application will be constructed using HTML5, D3, JQuery, Transit, Underscore, Backbone, Moment, CSS3, Node JS, Express, Socket IO and Elastic Search.

Node will be used with Express to present a set of simple REST interfaces to the client. The client will be a single page web application.

## Concepts

### User

Represents a User in the system. A User is an authenticated individual, who logically has an "account". The system does not support or require the concept of an "account" however, as it is not necessary. A User object looks like the following:

- User Id
- User Name
- Avatar Image URL
- Date created
- Password
	
	Not used initially.

### Active User

This is the current User who is using the application. Any ideas that are created are storeed as this User.

### Watcher

A Watcher is a User who is watching other Users. Each Active User will have a set of Watchers who can see what Ideas they might be creating. A User can actively become a Watcher by choosing which other Users she wants to Watch.

### Idea

An Idea forms the basic currency in the application. An Idea has the following fields:

- User Id
- User Name
- Idea Id
- Idea Short Text
- Idea Long Text
- Date created
- Total Positive Votes
- Total Negative Votes

Ideas are stored in Elastic Search and are fully searchable.

### Current Idea

The Currenty Idea is the Idea that is being written by the Active User. Alternatively it is the Current Idea that the Active User is looking at. An Idea can only be modified by the User that created it in the first place.

### Idea Votes

Users can vote on an Idea as many times as they like. A Vote takes the form of a Positive or Negative Vote and can incude a Vote Reason.

The Vote data structure looks like the following:

- Idea Id
- Vote Id
- User Id
- Score

	This can be either 1 or -1 initially.
- Reason
	
	This is text that can be supplied by the Active User to justify their Vote.

Votes and Ideas are kept separate for simplicity.

### Search

Search represents the syntax that can be used to search against Elastic. Initially this will be the basic Elastic search syntax.

### Search Result

A Search Result is a JSON collection that is returned directly from Elastic when searching Ideas. The applicaiton will also use Elastic to generate the top N most popular words and populate them in a Wurdle.

## Page Structure

Idea Cloud is developed as a single fat Web Application. The application has the following functionality.

### Nav Bar

### Top Terms

### Search Box

### Search Results

### Current Idea (read-only)

### Current Idea (editing)

### Watchers


