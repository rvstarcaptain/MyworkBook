1. make repo on github
2. in vs code terminal type >>>npm install gh-pages --save -dev
pack.json>>after version 
"homepage":(github repo)http://username.github.io/reponame.
in scripts >>>
"predeploy":"npm run build"
"deploy":"gh pages d build"

terminal git remote add origin (paste repo url); >>if throw error try line 10
git remote set-url origin (repo link)
 or
git remote -v 

git add .
git commit -m "initialcommit"

npm run deploy

github >>open repo >>branches 

setting github pages 
wait for sometime till site is published......
----------------deployment done successfully-----------

