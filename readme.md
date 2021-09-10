
# Installation

## 1 - Commandes
**Run** : `npm init -y `<br>
**Run** : `npm install -D tailwindcss postcss-cli autoprefixer`<br>
**Run** : `npx tailwindcss init -p`

## 2 - Créer dossier et fichiers
public => index.html<br>
src => tailwind.css

## 3 - Dans tailwind.css
**Ajouter** 
```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {

}

@layer components {

}
```

## 3 - Build
**Ajouter** dans le package.json : script => ``"build": "postcss -w src/tailwind.css -o public/style.css"``<br>
**Run** : ``npm run build``

## 4 - Extension
**Installer** : *Tailwind CSS IntelliSense*<br>

## 5 - Purge
**Ajouter** dans tailwind.config.js : purge => `./public/index.html` et `./public/main.js` s'il y a un fichier.js<br>
**Run** : 
**methode 1**`$env:NODE_ENV="production"`<br>
**methode 2** 
    **Ajouter** dans le package.json : script => ``"prod": "NODE_ENV=production postcss -w src/tailwind.css -o public/style.css"``<br>
    **Run** : ``npm run prod``<br>

**Run** : `npm run build`

Ajouter @tilwind rule pour éviter le bug
https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker

## 6 - Theme
**Ajouter**dans le tailwind.css votre theme exp: => `@import url(https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&display=swap);`<br>
**Ajouter**dans tailwind.config.js: le nom de la class avec ces proprietés avec les modif souhaité: 'class': [proprietés,..,..] comme suit:<br>
````
=theme: {
    extend: {
      fontFamily: {
        'WorkSans': ['"Work Sans"'],
        'sans':['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      }
    },
  },<br>

````
**Run** : `npm run build` <br>

**vous aurez dans le fichier style.css** la class: font-WorkSans qui sera crée et la class font-sans qui sera modifier  et au top du fichier `@import url(https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&display=swap);`
# Docplanner-group
