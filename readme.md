
# 📝 Projet JavaScript avec Tailwind CSS

Ce projet est une collection de **4 exercices** simples visant à pratiquer JavaScript tout en utilisant **Tailwind CSS** pour le style.

---

## 📁 Structure du projet

```
📂 TrucTestJS
├── index.html
├── 📂js
│   ├── exo1.js
│   ├── exo2.js
│   ├── exo3.js
│   ├── exo4.js
│   ├── exo5.js
│   └── revealExercice.js
├── 📂public
│   └── 📂img
│       ├── DuckBreadSteal.jpg
│       └── halfLifeError.png
├── readme.md
├── 📂style
│   ├── 📂scss
│   │   ├── style.css
│   │   ├── style.css.map
│   │   └── style.scss
│   └── 📂tailwind
│       ├── output.css
│       └── output.css.map
└── tailwind.config.js
```

---

## 🛠️ Installation

1. Clone le dépôt :
   ```bash
   git clone https://github.com/Bili-and-sheep/TrucTestJS.git
   cd TrucTestJS
   ```

2. Installe les dépendances :
   ```bash
   npm install
   ```

3. Compile le CSS Tailwind :
   ```bash
   npx tailwindcss -i ./style.css -o ./src/output.css --watch
   ```


---

## 📚 Exercices

### 🔢 Exercice 1 : Chiffre Pair ou Impair
**Description** : Cet exercice demande à l'utilisateur d'entrer un chiffre, puis indique si ce dernier est pair ou impair.


- **Objectif principal** : Pratiquer les conditions en JavaScript.


---

### 🕹️ Exercice 2 : Calcul de l'âge
**Description** : L'utilisateur entre son année de naissance, et l'application calcule et affiche son âge.


- **Objectif principal** : Travailler avec les entrées utilisateur et les calculs de date.


---

### 🎨 Exercice 3 : Calcul de surface en m²
**Description** : L'utilisateur entre la largeur et la longueur d'une pièce, et le programme calcule sa surface en m².


- **Objectif principal** : Manipuler les entrées multiples et effectuer des calculs.


---

### ⏲️ Exercice 4 : Le Juste Prix
**Description** : Un nombre aléatoire est généré, et l'utilisateur doit deviner ce nombre en recevant des indications ("plus" ou "moins").


- **Objectif principal** : Travailler avec des boucles et des événements en JavaScript.
- **Bonus** : Ajouter une limite de tentatives et un message personnalisé si le joueur échoue.

---

## 📦 Dépendances

- **Tailwind CSS** : Utilisé pour styliser les exercices.
- **JavaScript** : Langage principal pour les fonctionnalités des exercices.

---

## 🚀 Démarrage rapide

1. Ouvre le fichier `index.html` dans ton navigateur.
2. Explore les exercices via les liens présents sur la page d'accueil.

---

## 🤝 Contribution

1. Fork le projet.
2. Crée une branche pour tes modifications :
   ```bash
   git checkout -b ma-nouvelle-fonctionnalite
   ```
3. Commit tes changements :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Push la branche :
   ```bash
   git push origin ma-nouvelle-fonctionnalite
   ```
5. Ouvre une **Pull Request**.

---

## 📝 License

Ce projet est sous [licence MIT](LICENSE).

---

🎉 **Amuse-toi bien avec ce projet et bonne pratique !**
