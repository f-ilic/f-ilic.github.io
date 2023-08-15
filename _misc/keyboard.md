---
layout: post
title: Remapping keys
permalink: /misc/keyboard
subheading: System wide key remapping on Linux and MacOS
---

Text navigation without having to constantly move my hands off keyboard to the mouse is important to me.
To achieve this I'll show you how to remap your capslock key to do something useful, i.e. an additional modifier key.

The goal is to set up capslock as a modifier key so **j,k,l,i** + **capslock** act as though **left,down,right, up** were pressed. Same for **Home, End, Backspace, Delete, Return**, with some other keys in the same area. 

# Linux 
---
There are multiple ways to go around setting caps as a modifier.
Your options are:
* let your Desktop Environment handle it
    * *Keyboard > Layout > Options > Key to choose 3rd level* (in Gnome / KDE as of 2022)
* set it manually with the command ```setxkbmap -option "lv3:caps_switch"```.
* Define a new keyboard xkb layout. <-  **What this post describes**


If you want to familiarize yourself even more with xkb I suggest:
* <a href="https://wiki.archlinux.org/index.php/X_keyboard_extension">Arch Wiki xkb</a>
* <a href="https://medium.com/@damko/a-simple-humble-but-comprehensive-guide-to-xkb-for-linux-6f1ad5e13450">Medium Post</a>

Long story short; A xkb layout defines what symbol is registered when you press a key. 
The file that defines that layout is in my case ```/usr/share/X11/xkb/symbols/us```.

<span style="color:red">**CAUTION!**</span>
**If the layout file is malformed your keyboard won't work!** <br>
This means that before you start editing the file make sure that: 
* you have a on-screen keyboard or
* have a bootable usb stick, to perform emergecy edits of the file

<br>
The xkb file contains entries that look like this:

```{[Key, Key + Shift, Key + level3 modifier, Key + level3 modifier + Shift]}```

If you already set capslock to act as the level3 modifier, and now only need to insert the desired functionality into the corresponding entries.
```
key <AD07> {[u,U,Home,Home]};
key <AD08> {[i,I,Up,Up]};
key <AD09> {[o,O,End,End]};
key <AC06> {[h,H,BackSpace, BackSpace]};
key <AC07> {[j,J,Left,Left]};
key <AC08> {[k,K,Down,Down]};
key <AC09> {[l,L,Right,Right]};
key <AC10> {[semicolon,colon,Delete,Delete]};
key <SPCE> {[space,space,Return,nobreakspace]};
```


**TLDR:**
If you just want the complete package to copy: <a href="https://gist.github.com/f-ilic/5d14f13f2b6d7237eac255cbd9498466">Keyboard Remapping Gist </a>

# MacOS
---

If you're using MacOS, one way to do the same it is to rebind the capslock key to a modifier key with <a href="https://www.hammerspoon.org/">Hammerspoon</a>. Hammerspoon is a program that exposes the system API to a lua scripting engine, in which you can then catch keypresses and send other sigals instead.

The following script should get you started:
<a class="boxed" href="/posts/keyboard/hammerspoon_cfg.txt">Hammerspoon config</a>


*Note*: In macOS home/end/PgUp/PgDown does not behave like in Linux and Windows. Much of that functionality revolves around the `cmd` modifier key.
However MacOS uses the emacs keystrokes `ctrl + a`, or `ctrl + e` for home/end. So we just bind the appropriate keys to these keystrokes.