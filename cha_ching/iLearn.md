#Gotchas:


- So when you clone from github using https, you still gotta convert it to ssh and then push.
easiest way to do this is : $ git remote set-url origin ssh://git@github.com/username/repo-name.git
if working on EC2 instance, gotta move ssh keys, then
$git config --global user.name "<name>"
$git config --global user.email <email>


- always update the .gitignore file. it helps to remove irritating temp files that can bloat up the code.
simply edite the .gitignore file in the base repository there.
`#` is the character used for comments there.
`\#` is the escape character thingy.
used this to remove old files that were previously tracked:
`git ls-files --ignored --exclude-standard | xargs git rm --cached
`
