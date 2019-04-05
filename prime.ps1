Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

refreshenv

choco install vscode

choco install yarn

choco install nodejs

refreshenv

yarn global add parcel-bundler

refreshenv

yarn

parcel index.html