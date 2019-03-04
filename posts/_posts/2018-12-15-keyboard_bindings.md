---
layout: post
title: Remapping keys
permalink: /posts/keyboard
subheading: Keyboard trickery and fast navigation
---

Text navigation without having to constantly move my hands off keyboard to the mouse is important to me, and should also be important to you <a href="https://en.wikipedia.org/wiki/Repetitive_strain_injury">(RSI)</a>.
To achieve this I'll show you how to remap your capslock key to do something useful for a change.
Editors such as vi/vim are good in that regard, but I want a more universal approach that works with every program.

The goal is to set up capslock as a modifier key so **j,k,l,i** + **capslock** act as though **left,down,right, up** were pressed. This is because that's the natural resting position of my right hand on the home row. There's also **Home, End, Backspace, Delete, Return** which I remapped in a way that they are reachable without needing to move your hands off the home row.

# Linux 
---
There are multiple ways to go around setting caps as a modifier.
The two easiest are to either to
* let your Desktop Environment handle it
    * In Linux Mint (Cinnamon) it's **Keyboard > Layout > Options > Key to choose 3rd level** (in Gnome and KDE it's the same)
* set it manually with the command ```setxkbmap -option "lv3:caps_switch"```.


If you want to familiarize yourself even more with xkb I suggest:
* <a href="https://wiki.archlinux.org/index.php/X_keyboard_extension">Arch Wiki xkb</a>
* <a href="https://medium.com/@damko/a-simple-humble-but-comprehensive-guide-to-xkb-for-linux-6f1ad5e13450">Medium Post</a>

Long story short; A xkb layout defines what symbol is registered when you press a key. 
The file that defines that layout is in my case ```/usr/share/X11/xkb/symbols/us```.

**Be careful editing this file; if its malformed your keyboard won't work!**
This means that before you start editing the file make sure that: 
* you have a on-screen keyboard or
* have a bootable usb stick, to perform emergecy edits of the file


The xkb file contains entries that look like this:

```{[Key, Key + Shift, Key + level3 modifier, Key + level3 modifier + Shift]}```


We already set capslock to act as the level3 modifier, and now only need to insert the desired functionality into the corresponding entries.
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

If this is something that sounds desirable to you, download my xkb layout and play around with it!

<a class="boxed" href="{{ site.url }}/posts/keyboard/us.txt">My xkb config</a>

# MacOS
---

If you're using MacOS, one way to do the same it is to rebind the capslock key to alt in the system settings and use <a href="https://www.hammerspoon.org/">Hammerspoon</a>. Hammerspoon is a program that exposes the system API to a lua scripting engine, in which you can then catch keypresses and send other sigals instead.

The following script should get you started:

<a class="boxed" href="{{ site.url }}/posts/keyboard/hammerspoon_cfg.txt">Hammerspoon config</a>



# Windows
---

On windows there's <a href="https://www.autohotkey.com/">AutoHotkey</a> that can be used to achieve similar results.
I have heard good things about it but haven't used it yet.