# DevHub
DevHub is a proxy hub, mostly meant to be a fast one stop shop for a high speed proxy and tons of games. All of this was possible because of [Dynamic](https://github.com/NebulaServices/Dynamic)!

_Live Website: https://devhub.dariandev.com/_

# How does it work?
Using [Dynamic](https://github.com/NebulaServices/Dynamic), you can proxy sites through a [Bare Server](https://github.com/tomphttp/bare-server-node). Most of DevHub is frontend, the only part of backend is the TOMPHTTP Bare Server.

# Dependencies
These are the dependencies you will need, This includes **[Node.js](https://nodejs.org/), [NPM](https://www.npmjs.com/), And [Git](https://git-scm.com/).**

_This installation is based on Ubuntu 20.04, Please look at other ways for you to install these if you are on another platform of linux._
```sh
# Basic update
sudo apt update

# Installing NodeJS 20.x
# Type "Node -v" before installing this, Having multiple installations can lead to problems.
# https://github.com/nodesource/distributions#debinstall
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

# Installing NPM
sudo apt install npm

# Installing GIT
sudo apt install git-all
```

# DevHub Installation
First, We need to create a folder. The location doesn't matter, This is just the default location.
Next, Just install the main files.
```sh
curl -Lo DevHub.zip https://github.com/TheDevs-Lab/DevHub/releases/latest/download/DevHub.zip
tar -xzvf DevHub.zip
```

You can also install using git, which is suggested
```sh
git clone https://github.com/TheDevs-Lab/DevHub.git
```

Now you've setup DevHub!
Run ```sh
node.js index.js``` or ```npm start``` to start DevHub. You may modify the port in ``index.js`` 

# Support
You may get support by joining our [discord](https://dariandev.com/discord)!

# Credits
[Darian](https://github.com/justDarian) - Owner/Main Dev
[Zack](https://github.com/komouri) - Project Manager
[GreenWorld](https://github.com/GreenyDEV) - Contributor
[Russell2259](https://github.com/Russell2259) - Contributor
[Dynamic](https://github.com/NebulaServices/Dynamic) - Proxy

# License

DevHub® Copyright © 2023

[GNU Public License](https://github.com/TheDevs-Lab/DevHub/blob/main/LICENSE.md)
