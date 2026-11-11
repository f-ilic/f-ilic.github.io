---
layout: post
title: Remapping keys
permalink: /keyboard
subheading: System wide key remapping on Linux and MacOS
venue: Nerd Alert
teaser: misc/keyboard/keyboard.jpg
date: 2020-01-01
---


Text navigation without having to constantly move my hands off keyboard to the mouse is important to me.
To achieve this we will remap the capslock key to do something useful, i.e. an additional modifier key.
My particular goal is to set up capslock as a modifier key so **j,k,l,i** + **capslock** act as though **left,down,right, up** were pressed. Same for **Home, End, Backspace, Delete, Return**, with some other keys in the same area. 

A gist that you can just download and run, which will put everything where it should be is here: <a href="https://gist.github.com/f-ilic/5d14f13f2b6d7237eac255cbd9498466">My Keyboard Remapping Gist </a>.
The following post, is just going to explain how to go about remapping on the keycode level in Linux, and a userspace solution in MacOs that uses a Lua engine to expose parts of the system API.



## Linux 

There are multiple ways to go around setting caps as a modifier.
Your options are:
* **Define a new keyboard xkb layout.** <-  *What this post describes*
* let your Desktop Environment handle it
    * *Keyboard > Layout > Options > Key to choose 3rd level* (in Gnome / KDE as of 2022)
* set it manually with the command ```setxkbmap -option "lv3:caps_switch"```.


If you want to familiarize yourself even more with xkb I suggest:
* <a href="https://wiki.archlinux.org/index.php/X_keyboard_extension">Arch Wiki xkb</a>
* <a href="https://medium.com/@damko/a-simple-humble-but-comprehensive-guide-to-xkb-for-linux-6f1ad5e13450">Medium Post</a>

Long story short; A xkb layout defines what key-code is registered when you press a key. 
The file that defines that layout is in my case ```/usr/share/X11/xkb/symbols/us```.

<span style="color:red">**CAUTION!**</span>
**If the layout file is malformed your keyboard won't work!** <br>
This means that before you start editing the file make sure that: 
* you have a on-screen keyboard or
* have a bootable usb stick, to perform emergecy edits of the file

<br>
The xkb file contains entries that look like this:

```{[Key, Key + Shift, Key + level3 modifier, Key + level3 modifier + Shift]}```

If you already set capslock to act as the level3 modifier, you only need to insert the desired functionality into the corresponding entries.
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

To apply the changes either log off and in, or run `setxkbmap -layout us` in a terminal.

Some sleep issues exist that results in the key repeat rate being set back to default; the fix is easy:

```
# Set the repeat on for the remapped keys in /usr/share/X11/xkb/
xset r 65 # space 

xset r 30 # u
xset r 31 # i
xset r 32 # o

xset r 43 # h
xset r 44 # j
xset r 45 # k
xset r 46 # l
xset r 47 # ;
```

Set the repeat rate script as a startup script, so that it is triggered on login.

## MacOS

If you're using MacOS, one way to do the same it is to use <a href="https://www.hammerspoon.org/">Hammerspoon</a>. Hammerspoon is a program that exposes the system API to a lua scripting engine, in which you can then catch keypresses and send other sigals instead.

The following script should get you started.
Put this in your  `~/.hammerspoon/init.lua`
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

remap({'alt'}, 'o', pressFn({'ctrl'}, 'e'))
remap({'alt'}, 'u', pressFn({'ctrl'}, 'a'))
remap({'alt', 'shift'}, 'o', pressFn({'ctrl shift'}, 'e'))
remap({'alt', 'shift'}, 'u', pressFn({'ctrl shift'}, 'a'))

-- remap({'alt', 'cmd'}, 'l', pressFn({'cmd'},'right'))
-- remap({'alt', 'cmd'}, 'j',  pressFn({'cmd'},'left'))
-- remap({'alt', 'cmd', 'shift'}, 'l', pressFn({'shift', 'cmd'}, 'right'))
-- remap({'alt', 'cmd' ,'shift'}, 'j',  pressFn({'shift', 'cmd'}, 'left'))

remap({'alt', 'cmd'}, 'i', pressFn('pageup'))
remap({'alt', 'cmd'}, 'k', pressFn('pagedown'))
remap({'alt', 'cmd', 'shift'}, 'i', pressFn({'shift'}, 'pageup'))
remap({'alt', 'cmd', 'shift'}, 'k', pressFn({'shift'}, 'pagedown'))

remap({'alt'}, 'h', pressFn('delete'))
remap({'alt'}, ';', pressFn('forwarddelete'))

remap({'alt', 'cmd'}, ';', pressFn({'cmd'}, 'delete'))
remap({'alt'}, 'space', pressFn('return'))
```

MacOS allows you to rebind `capslock` to any other modifier key in the keyboard settings. I personally set it to `alt`, but its not necessary to do.

*Note*: In macOS home/end/PgUp/PgDown does not behave like in Linux and Windows. Much of that functionality revolves around the `cmd` modifier key.
However MacOS uses the emacs keystrokes `ctrl + a`, or `ctrl + e` for home/end. So we just bind the appropriate keys to these keystrokes.