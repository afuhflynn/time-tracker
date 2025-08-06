# Espace de Co-Working – Suivi des Postes & du Temps

## 📖 Description
Ce projet est une application web de suivi de temps conçue pour les espaces de co-working, développée en **HTML**, **CSS** et **JavaScript** pur. L’utilisateur peut se connecter (check‑in), se déconnecter (check‑out), et consulter :

- Le nombre de sessions (shifts) par jour
- Le temps total travaillé chaque jour
- Un résumé quotidien avec statistiques

## 🚀 Fonctionnalités

1. **Connexion / Déconnexion**
   - Boutons "Check In" et "Check Out" avec états désactivés/enabled.
   - Protection contre les double check‑in.
2. **Suivi des sessions**
   - Gestion de plusieurs sessions par jour.
   - Enregistrement de l’heure de début, de fin et calcul de la durée.
3. **Résumé quotidien & analyses**
   - Affichage du nombre total de sessions réalisées aujourd’hui.
   - Affichage du temps total travaillé.
4. **Persistance**
   - Stockage en `localStorage` pour garder les données entre rechargements.
5. **Timer en direct**
   - Mise à jour en temps réel pendant une session active.

## 🛠️ Technologies

- **HTML5** pour la structure
- **CSS3** (Flexbox, variables CSS) pour la mise en page et le thème
- **JavaScript (ES6+)** pour la logique, les Promises et le stockage local

## ⚙️ Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/co-working-shift-tracker.git
   ```
2. Ouvrez `index.html` dans votre navigateur :
   ```bash
   cd co-working-shift-tracker
   open index.html
   ```

*Pas de dépendances externes, ni d’installation npm nécessaire.*

## 💡 Utilisation

1. Cliquez sur **Check In** pour démarrer une session.
2. Surveillez le timer en direct.
3. Cliquez sur **Check Out** pour terminer la session.
4. Consultez la section **Historique** pour voir toutes vos sessions.
5. Consultez la section **Résumé** pour les statistiques quotidiennes.

## 🤔 Questions à considérer

- Que faire si l’utilisateur oublie de se déconnecter ?
- Comment inclure l’historique des jours précédents ?
- Comment gérer les échecs de synchronisation ?
- Comment ajouter l’affichage d’une citation motivationnelle ?

## 🚧 Évolutions possibles

- Thème sombre (dark mode) avec variables CSS
- Export CSV du journal des sessions
- Graphiques en SVG pour visualiser l’évolution hebdomadaire
- Support multi‑utilisateur (profil dans `localStorage`)

## 🤝 Contribuer

Les contributions sont les bienvenues ! Veuillez :
1. Ouvrir une issue pour proposer une nouvelle fonctionnalité ou signaler un bug.
2. Faire un fork et soumettre une pull request.

## 📄 Licence
Ce projet est sous licence MIT. Voir `LICENSE` pour plus de détails.
