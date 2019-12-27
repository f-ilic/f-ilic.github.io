There is a nested git repo thing going on here.
The base directory is the location of the source code.

There are two branches: ```master``` and ```sources```.
switch to ```sources``` when you are developing.


Inside this directory:
```
bundle exec jekyll build
```
This generates the ```_site/``` directory which is the whole static website.

This ```_site/``` directory also contains the master branch of this git repo.
Push that if you are satisfied with how everything looks.

To test locally run the command 
```
bundle exec jekyll serve
```
