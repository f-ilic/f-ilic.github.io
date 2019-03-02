---
layout: post
title: Remapping keys
permalink: /posts/keyboard
subheading: Keyboard trickery and fast navigation
---

Keyboard only navigation without having to constantly move your hands off to the mouse is important to me.
To achieve this I'll show you how to remap your capslock key to do something useful for a change.

It will act as a modifier key so that when it's pressed in combination with **j,k,l,i** it will move the mouse curosor **left,down,right, up**.

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
My modifications looks like this:
```
xkb_symbols "basic" {
    
    ...

    key <AD07> {[u,U,Home,Home]};
    key <AD08> {[i,I,Up,Up]};
    key <AD09> {[o,O,End,End]};
    key <AC06> {[h,H,BackSpace, BackSpace]};
    key <AC07> {[j,J,Left,Left]};
    key <AC08> {[k,K,Down,Down]};
    key <AC09> {[l,L,Right,Right]};
    key <AC10> {[semicolon,colon,Delete,Delete]};
    key <SPCE> {[space,space,Return,nobreakspace]};
};
```
