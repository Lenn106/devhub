<!-- <div align="center">
  <a href="https://devhub.dariandev.com/">
    <img src="devhub-logo.png" alt="DevHub Logo" width="200">
  </a>
</div> -->

# DevHub
DevHub is a proxy hub, mostly meant to be a fast one stop shop for a high speed proxy and tons of games. All of this was possible because of  [Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet)!

<div align="center">
  <a href="https://devhub.dariandev.com/">🔥 Live Website: https://devhub.dariandev.com/</a>
</div>

# How does it work?
Using [Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet), you can proxy sites through a [Bare Server](https://github.com/tomphttp/bare-server-node). Most of DevHub is frontend, the only part of backend is the TOMPHTTP Bare Server.

## Prerequisites
Equip yourself with the essential tools:
- **[Node.js](https://nodejs.org/)**
- **[NPM](https://www.npmjs.com/)**
- **[Git](https://git-scm.com/)**

⚠️ These installation steps are tailored for Ubuntu 20.04. If you're on a different Linux platform, explore alternative installation methods.
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
First, create a folder (location is flexible).
Next, Just install the core files.
```sh
curl -Lo DevHub.zip https://github.com/TheDevs-Lab/DevHub/releases/latest/download/DevHub.zip
tar -xzvf DevHub.zip
```

You can also install using git, which is suggested
```sh
git clone https://github.com/justDarian/DevHub.git
```

Now you've setup DevHub!
Run ```sh
node.js index.js``` or ```npm start``` to start DevHub. You may modify the port in ``index.js`` 

# Get Support
You may get support by joining our [discord](https://dariandev.com/discord)!

# Credits
[Darian](https://github.com/justDarian) - Owner/Developer

[Zack](https://github.com/komouri) - Project Manager

[Russell2259](https://github.com/Russell2259) - Ultraviolet Support

[Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet) - Proxy

# License

DevHub® Copyright © 2023

📜[GNU Public License](https://github.com/justDarian/DevHub/blob/main/LICENSE.md)
