Hello there. If you couldn’t be bothered playing around with my project at trello-clone.com, no worries. I have prepared a quick rundown of the entire app Before I begin, some details about the app: it is a full-stack clone of the task management tool, Trello. I have used React + Redux for the frontend and Node, Express, MongoDB for the backend. Happy reading :)

### Home Page
 
Welcome to the Trello Clone web app. We start with the home page (which looks just like the original Trello homepage). Proceed to either the signup or login page.

![homepage](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/trello-home.png)

### Authentication

You can choose to sign up with your Google accounts. If not, go to the Signup page, create an account by simply entering your desired username & password.

I have used Passport + Express Session along with MongoDB as the store for managing the entire authentication process. Pro Tip - third party cookies do not work in incognito. Had me almost pulling my hair out trying to figure out why Passport wasn’t working even though I was doing everything right.

![signup](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/signup.png)


### Workspace

Once you have logged in (and if you are a new user), you’ll be directed to the “Create Your Workspace” page. Every new user must create a workspace before proceeding further. Don’t blame me, blame the Trello devs.

![workspace](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/create-first-workspace.png)


### Boards

Now, you can proceed to create your first board. Boards are collections of cards (think tasks) organized under lists. Click on the “Create a board” button, select your choice of background color for the board (so cool) & click on Create.

![create a board gif](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/create-board.gif)



In the below screenshot, you can see all the boards in a workspace listed. I guess I could have been a bit more creative with the board names.

![list of boards](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/list-of-boards.png)


I couldn’t work too much on the design/look of the workspace & board. Till the time I got to creating these components, I had taken a keen interest in backend features.

### Lists

Once you create a board, you will be redirected to the just-created board. Here, you can start by creating lists.

In case you are confused, the flow looks like:


Workspace => Boards => Lists => Cards

You can create as many lists as you want to and they will be stacked in a single row.

Also, you can create as many cards as you want in each list. 

Think of each list as a bucket of tasks. 

P.S Did you notice the background? It is what you selected when creating a board. But the (empty)  left sidebar & header sections have a slightly darker shade. You are absolutely correct if you guessed that I used hsla() to make it. Nothing too interesting though. 

P.P.S The original Trello app offers the ability to drag & drop cards between & across lists. While I did try to implement that using React DnD, it became too much of a challenge to update drag & drop changes in the database. If you know an easy way to do this, reach out to me at devgurbir@gmail.com.

![listst](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/lists.png)

### Cards

I spent the majority of my time on developing cards. They have so many “micro-features” and I have tried to implement as many as I could. I will list down a few here and display them in the GIF too.

Change title
Add/change description
Add labels to the card
Create a custom label with text
Enable color-blind friendly mode. A quite simple tweak but something which can add so much value
Checklists
Add items to each checklist
Mark items to complete/incomplete This updates the progress bar as well.
Delete checklist
Add a cover

![card demo gif](https://github.com/devgurbir/trello-clone-solo/blob/demo-images/card.gif)

Sorry for the quality, I blame the tool that I used to make this GIF.

This is all that I have managed and something I’m really proud of. I will also list some features that I did work on, some I was able to complete but some I couldn’t, mainly due to a lack of time:

### Cluster module

I read the Node.js Beyond The Basics by Samer Buna and got to know about scalability in Node. An interesting thought crossed my mind. Which app could use with some scalability optimizations? Obviously, my Trello clone which has a huge 1 visit per day - me. 

Well, I imported the cluster module and quickly set it up to fork as many worker processes as CPU cores. I used the Apache Benchmarking tool to run some tests to see if it actually improved any metrics. Guess what, it didn’t. It actually slightly worsened them (concurrent users, number of requests served etc). No idea why that happened - do let me know if you have any experience with this. Meanwhile, I’ll continue my journey into Node.

### Redis

I had just learned Redis and wanted to implement it somewhere. So what did I decide? I decided to build a simple rate limiter (which isn’t really needed in the app but I have to over engineer it, right?

Now, I did code it using ioredis, a Redis client for Node.js. However, I never got around to pushing it live. Maybe, I’ll do it someday… or maybe, I’ll work on a side project. 

### AWS

Each card has an option to attach files to it. While I’m no expert, I had heard of AWS S3. I read a few tutorials about it, created my S3 bucket and tried to code it out. It didn’t work - got an CORS error that I wasn’t able to fix even after using the correct CORS config.

Even though I failed here, it did inspire me to learn more about AWS.

That is all from my side. I hope you liked my project and if you would like to discuss anything with me, reach out to me at devgurbir@gmail.com. I’m also looking for a job in case you have something for me. 
 


















