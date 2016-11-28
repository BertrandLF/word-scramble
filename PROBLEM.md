#Goal

The goal is to implement a small word puzzle game that presents the user with a mangled word and
asks her to enter the correct, unmangled word. If the word to unmangle is pizza the application may
present the word as zpaiz and the user must then enter P I Z Z A in this order for the solution to be
accepted.

#The scoring of the game is as follows:

• A full score is given only if the word was entered correctly on first guess without ever
deleting any character
• For each character that was deleted whilst entering the word -1 is subtracted from the score
• The maximally obtainable score for a word is max_score = floor(1.95^(n/3))where n
is the number of characters in the word, ^ denotes the exponential function and floor is the
round-down function which truncates a float to an integer
• The score for a word can never be negative, as such max_score >= score >= 0 always holds for
score being the actual score the user receives for solving this word
A game runs for 40 seconds, during which the user can solve as many words as she can manage.
Users are identified by their name (no need to create a registration form/password) and a global,
public highscore list should be kept in the database and be viewable in the web app.
Implementation
• Your solution must use AngularJS 1.x and should follow AngularJS best practices
• The list of possible words, a user’s scoring within a game and the highscore list must all be
loaded through a REST API. We recommend you use Firebase for the backend part but you
are free to roll your own. If you do use Firebase, use their raw REST api (see
https://www.firebase.com/docs/rest/api) instead of AngularFire! AngularFire has many weird
“gotchas” when you get started.
• Your solution should use Bootstrap 3 for styling but you may customize it as much as you
wish
• You may use any other JS/Frontend library as you see fit
• You may use bower, grunt etc. as you see fit

#Deliverables & Scoring

You should give us access to both a live demo running somewhere on the web (e.g. Github Pages) as
well as access to a git repo containing the code of the puzzle. Please make sure the git repo contains
the whole commit history, we are much more interested in how you approach the project rather
than in the end result. If you use a public git repo please don’t mention GameCtrl anywhere (code,
commit messages, readme…)

We will look at your code style, how well you follow angular best practices, how you use the libraries
you chose as well as how the UX of the game feels. To a lesser degree we will take the graphic design
and layout into account.