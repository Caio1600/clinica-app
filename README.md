# Como rodar o Projeto com Expo Go no Windows

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (instalado via npm ou yarn)
- Aplicativo [Expo Go](https://expo.dev/client) instalado no seu celular (Android/iOS)

## Passos para rodar o projeto

### 1. Instalar o Expo CLI
Abra o terminal e execute:
```sh
npm install -g expo-cli
```

### 2. clonar projeto 

clonar um repositório
```sh
git clone https://github.com/Caio1600/clinica-app.git
cd clinica-app
npm install
```

### 3. Iniciar o servidor de desenvolvimento
Execute:
```sh
npx expo start --tunnel
```
isso vai gerar o qrcode

### 4. Rodar no dispositivo móvel
1. Conecte seu celular e o PC à mesma rede Wi-Fi.
2. Abra o aplicativo Expo Go no celular.
3. Escaneie o QR Code exibido no terminal ou no Expo Developer Tools.
