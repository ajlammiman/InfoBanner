Set-ExecutionPolicy AllSigned

((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

refreshenv

choco install yarn

refreshenv

yarn global add parcel-bundler

refreshenv

yarn

parcel index.html