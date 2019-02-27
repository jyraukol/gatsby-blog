---
layout: post
title:  "Git From the Command Line"
date:   '2019-02-11T05:40:20.357Z'
categories: Git tools CLI
---
I've been using Git more and more from the command line instead of a graphical user interface. Here are some thoughts.

The usual pros and cons of the CLI vs GUI debate are present here.
There's a bit of a learning curve, but once you can type those commands from muscle memory (or alias them!), command line is faster.
There are no icons to click and no flashy animations to wait for.

While you are working "closer" to Git, you get a deeper understanding of how everything works.
There is no graphical abstraction layer on top of Git.
All the commands will stay the same and there are no UI updates that move things around or change the visual cues or naming.

Plus it's a nice confidence boost having the knowledge that you can work with your tools without the GUI if need be.

Just by learning a few commands you can handle most of your Git daily needs. 
If you want a nice a graphical view of your repo or are having a hard time rebasing from the command line, just fire up the GUI.

I still use SourceTree once in a while. I find it easier to look at if I need an overview of a large repo with lots of branches and commits. 
## Surviving on the command line
Here are the commands that I need the most.

### git checkout
For checking out a branch most of the time. If you want to create a new branch and checkout it immediately, you can combine these to
```
git checkout -b <new-branch>
```
If you need to reset unstaged working copy changes to a file, checkout can do that
```
git checkout -- <file>
```
### git reset
Removes changes from the staging area.
Working copy changes are not removed.
If you want to totally reset and discard all your local changes
```
git reset --hard
```
### git status
Shows you the status of the repo.
What changes you have staged/unstaged, files not yet tracked by Git and whether you are behind/ahead of origin.
You'll be using status a lot.
Status will also hint at commands you might want to use, so you can use status as a guide.

### git add
Add changes to the staging area for commiting.
Add everything
```
git add .
```
Add a folder
```
git add foldername
```
Add every .java file
```
git add *.java
```
### git diff
Shows the diff of changes not yet in the staging area.
To compare changes in the staging area, you can run
```
git diff --cached
```
### git commit
Commit your staged changes.
Usually I just commit with
```
git commit -m "commit message"
```
You could also do
```
git commit -am "commit message"
```
Which also adds every unstaged change to commit.

You can add new changes to the previous commit by staging them and running
```
git commit --amend
```
### git log
Shows you the commit history.
You can do many cool things with log, like search commits by author, different files, use a pattern for commit messages...
But usually I just git log, or maybe
```
git log --oneline
```
Which condenses each commit to one line.
### git branch
List all the branches.

You could also create new branches, but usually I just `checkout -b` them.
### git merge
Merge another branch to your current branch.
### git pull
Fetch and merge current branch from origin.
### git push
Push the current branch to origin.

