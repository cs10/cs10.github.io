---
title: CS10 SIGCSE 2016 Presentations
layout: page
---

# SIGCSE 2016

## Using Chat For Fun and Profit

### Abstract
> This lightning talk describes the idea of “chat ops” applied to the classroom. Chat Ops is a (growing) industry practice which uses instant messaging (such as IRC, or Slack) to automate common development or monitoring tasks, such as maintaining and deploying a website. Instead of deploying a site, we use the process of ChatOps to help run large classes, and even individual class sections by automating tasks that are tedious or error prone. We’ve extended a bot framework, Hubot, with the tools that we need. We can automate releasing student scores, updating student’s access to assignments, or handling in-class check offs with just a line of plain text, much faster than through a LMS. Chat messages also have the benefit that they are loggable and show everyone on the staff what’s going on and why. We’d like to show why augmenting traditional email systems with chat messages can help improve communication and save time, but can also be an enjoyable way to build a community.


### Links
* Hubot: [github.com/github/hubot](https://github.com/github/hubot)
* Alonzo (or Bot): [github.com/cs10/Alonzo](https://github.com/cs10/Alonzo)
	* Use this as a starter with a lot of custom setup.
* Group Mentions: [github.com/cycomachead/hubot-group-alias](https://github.com/cycomachead/hubot-group-alias)
	* Use this for "@mentions" to send message to groups of staff.
* Piazza Integrations: [github.com/cycomachead/hubot-piazza](https://github.com/cycomachead/hubot-piazza)
	* Currently makes it easy to just grab posts and give a quick preview.
* Google Drive Integrations: [github.com/aaaschmitt/hubot-googledrive-search](https://github.com/aaaschmitt/hubot-googledrive-search)
	* Search Google Drive and allow pulling data from forms and other sources.
* Generic Canvas Integrations: [github.com/cycomachead/hubot-canvas](https://github.com/cycomachead/hubot-canvas)
	* _Warning:_ This doesn't do much yet!
	* It wil provide:
		* some basic functionality for getting assignment stats
		* Easy interface for augmenting API calls.
* Canvas LMS API: [github.com/cs10/node-canvas-lms](https://github.com/cs10/node-canvas-lms)
	* Use this for implementing custom Canvas extensions.

##### Reference Projects:
* Hubot: [https://github.com/github/hubot/](https://github.com/github/hubot/)
* Hubot-Hipchat [https://github.com/hipchat/hubot-hipchat](https://github.com/hipchat/hubot-hipchat)
* Hubot-Slack [https://github.com/slackhq/hubot-slack](https://github.com/slackhq/hubot-slack)

### Slides:
#### [View Slides][slides]

<iframe
	src="//slides.com/michaelball/chat-edu-sigcse/embed"
	width="576" height="420" scrolling="no" frameborder="0"
	webkitallowfullscreen mozallowfullscreen allowfullscreen>
</iframe>

[slides]: https://slides.com/michaelball/chat-edu-sigcse