# Application Next.js - **Inspira 2.0**

Bienvenue dans le projet **Inspira 2.0** ! Ce projet est une application Next.js qui affiche des citations inspirantes et s’accompagne d’une API et d’une base de données SQLite. Ce fichier `README.md` explique comment configurer, développer, tester et mettre en production l'application, l'API, et la base de données.

---

## Structure du projet

Voici la structure principale du projet :

```
/Inspira-2.0
  |
  |-- /inspira-2.0       # Code de l'application React/Next.js
  |
  |-- /api               # Backend API PHP
  |    |-- api.php       # Point d’entrée de l’API
  |
  |-- /db                # Base de données SQLite
       |-- citations.db     # Fichier de la base de données
```

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** (version 18 ou supérieure)  
  [Installez Node.js ici](https://nodejs.org/).
- **npm** ou **yarn** (inclus avec Node.js)
- **Un serveur web** (comme Apache ou Nginx) configuré pour exécuter du PHP avec l'extension pdo_sqlite activée
  [Téléchargez XAMPP ou WAMP pour une configuration locale.](https://www.apachefriends.org/)
- **Docker** (facultatif) pour conteneuriser l'application et l'API  
  [Installez Docker ici](https://www.docker.com/get-started).

---

## Installation

### 1. Installation de l'application Next.js

1. **Clonez le dépôt** :

   ```bash
   git clone https://github.com/LeBaptouBaptiste/Inspira-2.0.git
   ```

2. **Naviguez dans le dossier de l’application** :

   ```bash
   cd Inspira-2.0/inspira-2.0
   ```

3. **Installez les dépendances** :

   Avec npm :

   ```bash
   npm install
   ```

   Avec yarn :

   ```bash
   yarn install
   ```

### 2. Installation de l'API et de la base de données

1. **Configurez un serveur web** :
   - Copiez le dossier `api` dans le répertoire accessible par votre serveur web (par exemple, le dossier `htdocs` pour XAMPP ou WAMP).

2. **Configurez la base de données** :
   - Placez le fichier `quotes.db` dans le dossier `api` ou un autre emplacement accessible.
   - Modifiez le chemin d’accès à la base de données dans `api.php` si nécessaire :

     ```php
     $db = new SQLite3('/chemin/vers/citations.db');
     ```

---

## Configuration de l’application

1. **Variables d'environnement** :
   Créez un fichier `.env.local` dans le dossier `inspira-2.0` pour y définir l'URL de l'API :

   ```env
   NEXT_PUBLIC_API_URL=http://localhost/api/api.php
   ```

2. **Vérifiez que l'API fonctionne** :
   - Rendez-vous sur [http://localhost/api/api.php](http://localhost/api/api.php). Vous devriez voir une sortie JSON contenant les citations.

---

## Lancer l’application

### En mode développement

Depuis le dossier `inspira-2.0` :

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

### En mode production (sans Docker)

1. **Créez un build de production** :

   ```bash
   npm run build
   ```

2. **Lancez l’application en mode production** :

   ```bash
   npm start
   ```

L'application sera disponible sur le port 3000.

---

## Conteneurisation avec Docker

### 1. Conteneuriser l'application React

1. **Naviguez dans le dossier de l’application** :

   ```bash
   cd Inspira-2.0/inspira-2.0
   ```

2. **Créez un fichier Dockerfile** :

   ```dockerfile
   FROM node:18

   WORKDIR /app

   COPY package*.json ./
   RUN npm install

   COPY . .

   RUN npm run build

   EXPOSE 3000

   CMD ["npm", "start"]
   ```

3. **Construisez l’image Docker** :

   ```bash
   docker build -t inspira-frontend .
   ```

4. **Lancez le conteneur** :

   ```bash
   docker run -p 3000:3000 inspira-frontend
   ```

### 2. Conteneuriser l’API

1. **Naviguez dans le dossier `api`** :

   ```bash
   cd Inspira-2.0/api
   ```

2. **Créez un fichier Dockerfile** :

   ```dockerfile
   FROM php:8.1-apache

   COPY . /var/www/html/

   RUN chown -R www-data:www-data /var/www/html

   EXPOSE 80
   ```

3. **Construisez l’image Docker** :

   ```bash
   docker build -t inspira-api .
   ```

4. **Lancez le conteneur** :

   ```bash
   docker run -p 8080:80 inspira-api
   ```

L’API sera accessible sur [http://localhost:8080/api.php](http://localhost:8080/api.php).

---

## Points à vérifier avant la mise en production

1. **Configuration réseau** : Assurez-vous que le conteneur ou le serveur peut accéder à l’API et à la base de données.
2. **Proxy inversé (facultatif)** : Configurez un proxy comme Nginx pour rediriger les requêtes vers les conteneurs ou serveurs appropriés.
3. **Sauvegardes** : Assurez-vous que la base de données SQLite est sauvegardée régulièrement.

---

**Bonne utilisation et mise en production !** 🚀

