---
title: 'Setup a Linux Valheim Dedicated server'
description: 'A guide on how to setup a Valheim Dedicated server on a Linux system, using SteamCMD.'
date: '10th January, 2026'
keywords: 'Linux,Valheim,Dedicated,Server,External,SteamCMD'
---

You've got a spare computer laying around and its got linux installed, you've just started to play Valheim with the boys, and you don't want to run the server on the same computer.

This guide assumes:

- You have a computer with linux installed.
- You're at least somewhat comfortable using the terminal.
- You're running Ubuntu (tested on 24.04).
- You have a static IP provided by your Internet Service Provider.

Let's get into it.

## Step 1: SteamCMD

SteamCMD is the offical CLI tool by Value to interact with Steam via the command line.

This makes it easy to install and update the Valheim Dedicated Server later on.

### Prerequisites

Before we can run SteamCMD, we need to do a few things.

First we have to create a new user.

```bash
sudo useradd -m steam
```

This will create a new user called steam.

We do this because of security reasons. If anything installed by SteamCMD were ever compromised, it'll only have access to the steam user. Not the whole system.

<br>

Now set a password for that new steam user.

```bash
sudo passwd steam
```

You'll be prompted to input a password, and again for password confirmation.

<br>

Before we switch over, we have to temporarily make the steam user a super user, also known as sudo.
This is because to run the next few commands we need sudo access.

So while you're still logged in as your main user, run:

```bash
sudo usermod -aG sudo steam
```

Now that the steam user is sudo, let's switch to their account:

```bash
sudo -u steam -s
```

This will prompt you to input the password of the **current** user.

<br>

Once you're switched over we can now install the required packages for SteamCMD.

```bash
sudo add-apt-repository multiverse

sudo dpkg --add-architecture i386

sudo apt update
```

It may prompt you with a "Adding component(s) 'multiverse' to all repositories."
Just continue by pressing Enter.

<br>

Once all those dependencies are install you can now _finally_ install SteamCMD:

```bash
sudo apt install steamcmd
```

Now hopefully if anything is all good you should be able to run:

```bash
steamcmd
```

And it'll launch SteamCMD.

But, you may encounter an error along the lines of:

> Command 'steamcmd' is not available in 'usr/games/steamcmd'...

Run these commands:

```bash
echo 'export PATH="$PATH:/usr/games"' >> ~/.bashrc

source ~/.bashrc
```

And now you should be able to run:

```bash
steamcmd
```

Running SteamCMD will do the initial download of updates and then say "Loading Steam API...OK" if all is well. This means we're successfully using SteamCMD!

## Step 2: Installing Valheim Dedicated Server

Now that SteamCMD is installed and running, we can finally install the goodies.

But first we need to tell steam who we are.

Luckily we don't need to login with our own accounts to download the server. Steam allows us to login anonymously.

```bash
login anonymous
```

If all is well, you can now run the following command:

```bash
app_update 896660
```

> `896660` is the Steam App ID for the Valheim Dedicated Server.

Let's get out of the SteamCMD by typing:

```bash
quit
```

And just like that, you have your own Valheim Dedicated server!

<br>

But of course you're gonna need to edit and run it.

SteamCMD by default will install the server in the following directory:

```
~/.local/share/Steam/steamapps/common/Valheim Dedicated Server
```

Let's change the server name and password.

```bash
cd ~/.local/share/Steam/steamapps/common/Valheim Dedicated Server
```

```bash
vi start_server.sh
```

1. Move down with arrow keys to the line with `./valheim_server.x86_64 -name "My server"...`
2. Press `I` to enter Insert Mode.
3. With the arrow keys move over and edit your server settings.
4. Once you're done press `Escape` to exit Insert Mode.
5. Press `:` (colon) and type `wq` to save your changes.

Here's an example of the entire edited `start_server.sh` file:

```bash
#!/bin/bash
export templdpath=$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=./linux64:$LD_LIBRARY_PATH
export SteamAppId=892970

echo "Starting server PRESS CTRL-C to exit"

# Tip: Make a local copy of this script to avoid it being overwritten by steam.
# NOTE: Minimum password length is 5 characters & Password cant be in the server name.
# NOTE: You need to make sure the ports 2456-2458 is being forwarded to your server through your local router & firewall.
./valheim_server.x86_64 -name "MyCoolServer" -port 2456 -world "CoolServer" -password "mashedpotatoes" -crossplay

export LD_LIBRARY_PATH=$templdpath
```

As you can see in the comments of the `start_server.sh` file it recommends us to copy this file and rename it, just incase of a steam update.

Let's do that.

```bash
cp start_server.sh run_server.sh
```

Now that our server is edited and copied, we can quickly check if it works by running:

```bash
./run_server.sh
```

This may take a while depending on your PC. But once this is done, you should see a message along the lines of:

> Session "MyCoolServer" with join code [code] and IP [your ip] is active with 0 player(s)

Cool, now let's close the server with `CTRL` + `C`

## Step 3: Portforwarding

Now for the dreaded part of this guide. **Portforwarding**....

All routers are different with different user interfaces and terminology, so I can't really tell you exactly what to look for. But generally you should be able to look at the back of your router and search on YouTube: "[your router model] port forwarding"

But once you find your setting, we need to forward the following ports:

UDP `2456-2568`

If your router doesn't allow for specifing a port range, you'll have to manually forward each port:

- UDP `2456`
- UDP `2457`
- UDP `2458`

## Step 4: Open ports on Linux

Now that our router has the ports open, we need to tell linux to also open those ports.

Simply run the following command:

```bash
sudo ufw allow 2456:2458/udp
```

And that will allow connections of those ports to be made to your linux server.

## Step 5: Revoking sudo access

Just quickly before we revoke sudo access, let's make sure that the `screen` package is installed:

```bash
sudo apt install screen
```

This will be used later one to persist terminal sessions.

<br>

Now that we've done all that we need to, we can now revoke the super user access we gave the steam user.

Exit out of the steam user account with:

```bash
exit
```

Now type:

```bash
sudo deluser steam sudo
```

This may look like you're going to delete the steam account, but it won't. Trust me.

Now log back into the steam account.

```bash
sudo -u steam -s
```

## Step 6: Starting a persistent server session

Let's go back to our Valheim server with:

```bash
cd ~/.local/share/Steam/steamapps/common/Valheim Dedicated Server
```

If we were to run the `run_server.sh` file directly, wait for the server to load and then close the terminal, the server would then forcefully close.

This is bad because... well... your server isn't running and forcefully closing the server may cause issues with your world later on.

So before we do that, let's start a screen session. Screen is the linux package we installed before that allows for persistent terminal sessions even after closing the terminal.

```bash
screen -S valheim_server
```

You should now see a "blank" terminal. This is great, it means you have a screen session running with the name of `valheim_server`

<br>

So now we can run:

```bash
./run_server.sh
```

And once we're happy with the server we can press `CTRL` + `A` then `CTRL` + `D` to detach the screen session.

To reattach to the screen session we can just run:

```bash
screen -r
```

But if you have more than 1 screen session running at once, we can target the name of the session:

```bash
screen -r valheim_server
```

## We're done

Now that you've got your server up and running, here's a few things to note:

### Updating your server

When you need to update your server, use `steamcmd`, login, and run:

```bash
app_update 896660
```

If there's an update, steam will update your server.

But be sure to stop your server first with with reattaching to your screen session and pressing `CTRL` + `C`.

### World files

You may be looking through the server files trying to find the world files, and just can't seem to find them.

This is because the world files are stored in a different location.

Your world files are located at:

```
~/.config/unity3d/IronGate/Valheim/worlds_local
```

### Steam only

If you and your friends are only playing on steam, I suggest removing the `-crossplay` flag in your `run_server.sh` file.

This will disable PlayFab and potentially fix weird lagging issues.

### Modded server

I highly suggest using a mod manager, such as R2ModMan.

1. Install your mods to your client.
2. Open your profile in your file explorer.
3. Copy all the files and folders (excluding `_state` folder) to a USB and paste them in your server directory. Or transfer via FTP.
4. Edit `start_server_bepinex.sh` launch flags to match your old `run_server.sh`.
5. Run `./start_server_bepinex.sh`
