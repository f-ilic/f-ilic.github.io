---
layout: post
title: Remapping keys
permalink: /posts/keyboard
subheading: Keyboard trickery and fast navigation
---

Keyboard only text navigation without having to constantly move your hands off to the mouse is important to me.
To achieve this I'll show you how to remap your capslock key to do something useful for a change.
Editors such as vi/vim are good in that regard, but I want a more universal approach that works with every program.

The goal is to set up capslock as a the modifier key so **j,k,l,i** + **capslock** act as **left,down,right, up**.

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
My modifications looks like this:
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

<span class="boxed"><a href="us.txt">My whole xkb layout</a></span>

# MacOS
---

If you're using MacOS, one way to do the same it is to rebind the capslock key to alt in the system settings and use <a href="https://www.hammerspoon.org/">Hammerspoon</a>. Hammerspoon is a program that exposes the system API to a lua scripting engine, in which you can then catch keypresses and send other sigals instead.

The following script should get you started: 

```
local function pressFn(mods, key)
	if key == nil then
		key = mods
		mods = {}
	end

	return function() hs.eventtap.keyStroke(mods, key, 1000) end
end

local function remap(mods, key, pressFn)
	hs.hotkey.bind(mods, key, pressFn, nil, pressFn)	
end

remap({'alt'}, 'j', pressFn('left'))
remap({'alt'}, 'k', pressFn('down'))
remap({'alt'}, 'i', pressFn('up'))
remap({'alt'}, 'l', pressFn('right'))
remap({'alt', 'shift'}, 'j', pressFn({'shift'}, 'left'))
remap({'alt', 'shift'}, 'k', pressFn({'shift'}, 'down'))
remap({'alt', 'shift'}, 'i', pressFn({'shift'}, 'up'))
remap({'alt', 'shift'}, 'l', pressFn({'shift'}, 'right'))

remap({'alt'}, 'o', pressFn('end'))
remap({'alt'}, 'u', pressFn('home'))
remap({'alt', 'shift'}, 'o', pressFn({'shift'}, 'end'))
remap({'alt', 'shift'}, 'u', pressFn({'shift'}, 'home'))

remap({'alt', 'cmd'}, 'l', pressFn({'cmd'},'right'))
remap({'alt', 'cmd'}, 'j',  pressFn({'cmd'},'left'))
remap({'alt', 'cmd', 'shift'}, 'l', pressFn({'shift', 'cmd'}, 'right'))
remap({'alt', 'cmd' ,'shift'}, 'j',  pressFn({'shift', 'cmd'}, 'left'))

remap({'alt', 'cmd'}, 'i', pressFn('pageup'))
remap({'alt', 'cmd'}, 'k', pressFn('pagedown'))
remap({'alt', 'cmd', 'shift'}, 'i', pressFn({'shift'}, 'pageup'))
remap({'alt', 'cmd', 'shift'}, 'k', pressFn({'shift'}, 'pagedown'))

remap({'alt'}, 'h', pressFn('delete'))
remap({'alt'}, ';', pressFn('forwarddelete'))

remap({'alt', 'cmd'}, ';', pressFn({'cmd'}, 'delete'))

remap({'alt'}, 'space', pressFn('return'))
```


# Windows
---

On windows there's <a href="https://www.autohotkey.com/">AutoHotkey</a> that can be used to achieve similar results.
I have heard good things about it but haven't used it yet.