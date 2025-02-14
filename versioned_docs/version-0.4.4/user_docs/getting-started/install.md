---
sidebar_position: 2
---

# Installation

## 1. Install KCL

### From the Binary Releases

Each release of KCL includes various OSes and architectures. These binary versions can be manually downloaded and installed from [Github](https://github.com/KusionStack/KCLVM/releases/) and add `{install-location}/kclvm/bin` to the environment PATH.

```bash
export PATH=$PATH:{install-location}/kclvm/bin
```

### Using script to install the latest release

#### MacOS

Install the latest darwin KCL to /usr/local/kclvm

```bash
curl -fsSL https://kcl-lang.io/script/install.sh | /bin/bash
```

#### Linux

Install the latest linux KCL to /usr/local/kclvm

```bash
wget -q https://kcl-lang.io/script/install.sh -O - | /bin/bash
```

#### Windows

Install the latest windows KCL to $Env:SystemDrive\kclvm and add this directory to User PATH environment variable.

```bash
powershell -Command "iwr -useb https://kcl-lang.io/script/install.ps1 | iex"
```

### From Python3

Install `kcl` through the `python3` and `pip` (`python3` requires 3.7.3+).

```bash
python3 -m pip install kclvm --user
```

Add an alias for the kcl command (optional).

```bash
alias kcl='python3 -m kclvm'
```

### From Go

Install `kcl` through the `Go` command (`Go` requires 1.17+).

```bash
go install kusionstack.io/kclvm-go/cmds/kcl-go@main
```

Add an alias for the kcl command (optional).

```bash
alias kcl='kcl-go kcl'
```

### From Docker

+ Command

```bash
docker run --rm -p 8080:8080 -it kusionstack/kclvm
```

+ Update image

```bash
docker pull kusionstack/kclvm
```

## 2. Install the KCL VS Code Extension

To improve the KCL development on VS Code, there are VS Code
 extensions for both VS Code Web IDE and VS Code.

The [VS Code Web IDE](https://vscode.dev) can be reached through the browser, and you can search and install the [KCL for vscode.dev](https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-web-extension) in the VS Code Extension tab. And here's the syntax highlighting view you'll get:

![](/img/docs/user_docs/getting-started/install/ide-vscode.png)

The KCL extension for the local VS Code IDE provides more rich language support for the KCL language such as highlighting, auto-completion, quick info hover and code navigation, etc. Although the extension is not a must-required part of KCL, it is recommended to install it to improve coding efficiency.

## Next step

+ [KCL Quick Start](/docs/user_docs/getting-started/kcl-quick-start)
