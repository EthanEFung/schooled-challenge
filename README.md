# schooled-challenge
#Coding Challenge
## Objective
* Create an application to manage and track performance of a school

### Criteria
* Create a relational database using a RDMS and an ORM
	* Here are a few tables to keep in mind:
		* Schools
		* Admin
		* Teachers
		* Students
		* Classes
		* Topics
		* Quizzes
* Using a framework of your choosing, create an interface where:
	* As an admin:
		* I can view the performance of all my teachers (general average of quizzes for a given 		class)
	* As a teacher:
		* I can create and delete classes, topics, and quizzes
		* I can view all my classes
		* I can view all my students associated with a class
		* I can add and remove students from my class
		* I can view the performance of each student in a class
		* I can view the performance of each student given a topic of a class
	* As a student:
		* I can add and remove classes with a code provided from a teacher
		* I can view my own performance for a class
		* I can view my own performance for a topic
		* I can view my own performance for a quiz
* Create an API to serve up the relevant information
* Have a well thought out architecture.
	* To start, have a separte repo for your UI and your API
* Deploy on AWS EC2
* Socket.io real time chat service
* employ a noSQL db for the messages to get some NoSQL <-> SQL communication

## Wireframe
Stick to this general layout!

![Landing Page](https://ibb.co/ibZi2m)

![Home Page](https://ibb.co/mBH32m)

![Selected Student View](https://ibb.co/b0F1oR)

## Required Dependencies
1. SQL database
2. Raw SQL
3. Node/Express
3. Deploy
4. Mem Cache - Redis
5. Socket.IO
6. split up services
