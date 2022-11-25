# How To set Permanent Aliases in Windows

alias are easy way to do long command short, in Unix there are .bashrc file where we can set alias but in Windows I did not find such thing straight forward, so here is the approach to do so.

## approach 1

usually we can open command prompt ( <kbd>win key + R</kbd> ) and type _cmd_ and set alias using `doskey`, for eg.

> doskey ll=dir

and now when run `ll` it will list all files of that folder

which works good but problem in this approach is

1. we have to set every alias separately
2. these alias are temporary and only for the active session, as soon as we close the command prompt

## approach 2

To overcome both of the above mentioned problem, following are are steps to set permanent and multiple alias

1. first run below command in your command prompt `echo %USERPROFILE%` , output of above is the base path , in my case it is **C:/Users/User**

2. now create a new file name _alias_ on this location, you can name anything with .txt extension also

3. now open this file in notepad or editor and add your daily use alias in it and save the file, mine are as below

   ```sh
   cat=type $*
   ..=cd..
   ls=dir $*
   gs=git status
   gp=git push
   gb=git branch
   nrs=npm run start
   dev=cd /d D:\Developer
   rct=cd /d D:\Developer\react-project
   ```

   Note:

   - you need to add _/d_ if you create an alias to navigate to any directory
   - path separator is forward slash _\\_
   - there is no space around _=_ while creating alias

4. now open run <kbd>win key + R</kbd> and type `regedit` to open registry
5. navigate to **Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor** File
6. right click to this file and select New >> String Value and rename it to _Autorun_ and save it.
7. now double click on this newly created _Autorun_ key, a window open where you have to put below value in value data field (the address will be full path of your alias file)

```txt
DOSKEY /MACROFILE="C:\Users\User\alias"
```

8. close the regedit and command prompt for once.

Now try your alias and thank me later. :)

let me know if it was helpful or something incorrect while you try, I would be happy to help

Cheers.
