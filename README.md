# Portfolio — Sharon MBUYI BADIBANGA

Portfolio personnel statique de **Sharon MBUYI BADIBANGA**, étudiante en Master en Économie
Internationale à l’Université Protestante au Congo.

Le site présente son parcours académique, ses expériences, ses responsabilités de leadership,
ses compétences, ses langues et ses coordonnées professionnelles, dans un design éditorial
sobre et professionnel.

> **Dépôt privé.** Ce projet est destiné à être hébergé dans un dépôt GitHub privé pendant sa première phase.
> Ne pas rendre le dépôt public et ne pas modifier sa visibilité sans décision explicite de Sharon.

---

## 1. Caractéristiques

- Site **one-page** en français, avec quelques éléments professionnels en anglais.
- **HTML, CSS et JavaScript uniquement** : aucune dépendance, aucune compilation, aucun compte externe.
- Typographies système : le site fonctionne **hors ligne** et se charge instantanément.
- Design responsive (mobile, tablette, ordinateur, grand écran).
- Navigation mobile plein écran accessible (élément `<dialog>` natif, fermeture au clavier).
- Animations légères, désactivées automatiquement si l’utilisateur préfère réduire les mouvements.
- Emplacement photo élégant : un monogramme « SB » s’affiche tant que la photo n’est pas fournie.
- Formulaire de contact **frontend uniquement** : il prépare un e-mail via `mailto:`.
- Références publiées avec **noms et fonctions uniquement** ; les coordonnées personnelles des
  référents ne sont volontairement pas présentes dans le site ni dans le dépôt.
- Données structurées `schema.org` (Person) et métadonnées Open Graph / Twitter.

## 2. Structure du projet

> Le dossier de travail fourni s’appelle actuellement `porfolio_de_sharon` ; le nom du dépôt
> proposé ci-dessous est `portfolio-sharon`. Renommer le dossier local n’a aucun impact sur le site.

```text
portfolio-sharon/
│
├── index.html                  # Contenu, sections et métadonnées
├── css/
│   └── style.css               # Design, responsive, animations
├── js/
│   └── script.js               # Menu, navigation active, photo, formulaire
├── assets/
│   ├── icons/
│   │   ├── favicon.svg
│   │   ├── favicon-32.png
│   │   └── apple-touch-icon.png
│   └── images/
│       ├── og-cover.png        # Aperçu lors d’un partage de lien
│       ├── profile/
│       │   └── README.md       # Mode d’emploi de la photo principale
│       └── projects/
│           └── README.md       # Emplacement prévu pour de futurs visuels
├── README.md
├── .editorconfig
├── .gitattributes
└── .gitignore
```

`Portfolio.pdf` (document source fourni par Sharon) reste sur le poste de travail mais **n’est
pas versionné** : il contient l’adresse complète et les coordonnées des référents.

## 3. Lancer le site localement

Aucune installation n’est nécessaire.

**Option A — le plus simple :** ouvrir `index.html` dans un navigateur (double-clic).

**Option B — serveur local (recommandé pour tester comme en ligne) :**

```bash
cd porfolio_de_sharon
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

Avec Node.js, on peut aussi utiliser `npx serve .`. Dans VS Code, l’extension
« Live Server » fonctionne également.

> Le site n’a pas d’étape de build : les fichiers servis sont les fichiers finaux.

## 4. Remplacer les photos

### Photo principale (hero)

1. Déposer la photo dans `assets/images/profile/`.
2. La nommer **exactement** `sharon-portrait.jpg`.
3. Rafraîchir la page : le placeholder monogramme disparaît automatiquement et la photo
   apparaît en fondu, sans modifier le HTML.

Le mécanisme est décrit dans `js/script.js` (section « Photo du portrait ») et dans
`assets/images/profile/README.md`.

**Format conseillé**

- Cadrage vertical **4:5** (portrait), par exemple **1200 × 1500 px** minimum.
- Format JPEG, qualité ~80, poids idéal inférieur à 400 Ko.
- Visage centré, épaules visibles, arrière-plan neutre, lumière douce.
- Utiliser uniquement une vraie photo de Sharon (aucune image trouvée sur Internet,
  aucune photo d’illustration représentant une autre personne).

Pour utiliser un autre nom de fichier ou un autre format, modifier l’attribut `src` de
`<img class="portrait__img">` dans `index.html`.

### Autres visuels

- `assets/images/projects/` est prévu pour de futurs visuels de projets ou d’activités.
  Aucune section « Projets » n’est affichée pour l’instant, faute de contenu fourni.
- Le visuel de partage `assets/images/og-cover.png` peut être régénéré ou remplacé par une
  image au format **1200 × 630 px**.

## 5. Modifier les textes

Tout le contenu éditorial se trouve dans `index.html`, section par section. Chaque section est
précédée d’un commentaire (`<!-- ACCUEIL / HERO -->`, `<!-- EXPÉRIENCES -->`, etc.).

| Élément | Où intervenir |
|---|---|
| Nom, accroche, boutons du hero | `<section id="accueil">` |
| Présentation et positionnement bilingue | `<section id="a-propos">` |
| Diplômes et établissements | `<section id="parcours">` |
| Expériences, dates, missions | `<section id="experiences">` |
| Chef de promotion, engagements | `<section id="leadership">` |
| Compétences | `<section id="competences">` |
| Niveaux de langues | `<section id="langues">` |
| Formations | `<section id="formation">` |
| Références (noms et fonctions uniquement) | `<section id="references">` |
| Coordonnées et formulaire | `<section id="contact">` |
| Pied de page | `<footer class="site-footer">` |
| Titre, description, aperçu social | `<head>` de `index.html` |

### Coordonnées

L’adresse e-mail, le téléphone et l’URL LinkedIn apparaissent à plusieurs endroits. En cas de
changement, rechercher puis remplacer :

- `sharonbadibanga14@gmail.com`
- `+243 897 969 423` et `+243897969423` (dans les liens `tel:`)
- `https://www.linkedin.com/in/sharon-badibanga-8170a128a`

Penser également à mettre à jour le bloc de données structurées `application/ld+json` dans le
`<head>`, et l’attribut `action` du formulaire.

### Contenus volontairement incomplets

Ces éléments sont signalés dans le code par des commentaires ou une note visible :

- **Stage PNUD (juillet 2026)** : le CV ne décrit pas les missions. La carte affiche
  « Le détail des missions sera complété prochainement ». Remplacer le paragraphe
  `class="xp__pending"` par une liste de missions dès réception.
- **Poste de Directrice de la communication et gestion marketing** : l’organisation n’est pas
  précisée dans le CV. L’ajouter si elle est confirmée.
- **Formation continue** : un second atelier est mentionné dans le CV mais son intitulé est
  incomplet. Un modèle de carte commenté est disponible dans `<section id="formation">`.
- **Dates des diplômes** : elles ne figuraient pas dans les informations transmises ; elles
  n’ont donc pas été inventées.
- **Références** : ne jamais publier les téléphones ou e-mails des référents sans leur accord
  et sans décision explicite de Sharon.

## 6. Personnaliser le design

Toute la direction artistique est pilotée par les variables CSS en haut de `css/style.css` :

```css
:root {
  --ivory: #f8f4ec;        /* fond principal */
  --forest: #16332b;       /* vert profond */
  --gold: #b78c4f;         /* accent doré */
  --gold-deep: #7b5722;    /* accent lisible sur fond clair */
  --font-serif: "Palatino Linotype", ..., Georgia, serif;
  --font-sans: "Segoe UI", system-ui, ...;
}
```

Les points de rupture responsive se trouvent en fin de fichier (`560px`, `640px`, `760px`,
`900px`, `980px`, `1160px`, `1240px`). Le CSS est commenté par composant. La navigation bureau
n’apparaît qu’à partir de 1160 px afin de laisser assez d’espace aux polices système.

Les polices sont **celles du système** afin de garantir zéro dépendance et un chargement
immédiat. Pour utiliser une police personnalisée, ajouter les fichiers dans `assets/fonts/`,
déclarer un `@font-face` dans `style.css` puis remplacer la variable `--font-serif` ou
`--font-sans`. Vérifier les licences des fichiers de police avant toute redistribution.

## 7. Formulaire de contact

Le formulaire **ne possède pas de backend**. Un gestionnaire JavaScript construit un lien
`mailto:` à partir des champs, puis ouvre le logiciel de messagerie du visiteur. Une note visible
l’explique clairement ; aucun message n’est envoyé à un serveur.

Pour connecter un service d’envoi :

1. Créer un formulaire chez un fournisseur (Formspree, Netlify Forms, service serverless interne, etc.).
2. Modifier l’attribut `action` du formulaire dans `index.html`.
3. Supprimer ou adapter le gestionnaire `submit` de `js/script.js` (section « Formulaire de contact »).
4. Ne **jamais** placer de clé secrète dans le HTML, le CSS ou le JavaScript côté client.

## 8. Accessibilité et performance

- HTML sémantique, un seul `h1`, titres hiérarchisés, lien d’évitement (« Aller au contenu principal »).
- Navigation clavier, états `:focus-visible` visibles, menu mobile fermable avec `Échap`.
- Contrastes vérifiés pour les textes courants ; informations jamais portées par la couleur seule.
- Alternatives textuelles pour l’image de portrait et les icônes décoratives masquées aux lecteurs d’écran.
- `prefers-reduced-motion` respecté.
- Aucune police distante, aucune bibliothèque, aucune image distante : le site reste très léger.
- Le portrait est chargé sans décalage de mise en page (`width` / `height` renseignés).

## 9. Dépôt GitHub privé — première mise en ligne du code

Le dépôt doit rester **privé**. Les étapes ci-dessous créent un dépôt privé et poussent le code
sans jamais publier de données sensibles.

> **Important — ne jamais publier le dossier de travail par glisser-déposer, ZIP ou FTP brut.**
> `Portfolio.pdf` (adresse complète et coordonnées des référents) et le dossier de tests local
> `.review/` ne sont pas destinés à la publication. Publier uniquement depuis le dépôt Git
> (qui les ignore), ou depuis une archive propre :
>
> ```bash
> git archive --format=zip HEAD -o portfolio-sharon.zip
> ```
>
> Vérifier ensuite que l’archive ne contient ni `Portfolio.pdf`, ni `.review/`, ni secret.

### A. Créer le dépôt (interface GitHub)

1. Se connecter au compte GitHub qui héberge le projet.
2. Aller sur <https://github.com/new>.
3. Nom proposé : `portfolio-sharon`.
4. Choisir **Private** (et non « Public »).
5. Ne pas initialiser avec README, `.gitignore` ou licence (le projet les possède déjà).
6. Cliquer sur « Create repository ».

### B. Relier le projet au dépôt distant

Le dossier fourni contient déjà un dépôt Git local avec un commit initial sur la branche `main`,
sans remote et sans aucun envoi vers GitHub. Pour le relier au dépôt privé créé ci-dessus :

```bash
git branch -M main
git remote add origin https://github.com/<votre-compte>/portfolio-sharon.git
git push -u origin main
```

Si vous repartez d’une copie sans historique Git, initialiser d’abord le dépôt local :

```bash
git init
git add .
git commit -m "Portfolio initial de Sharon MBUYI BADIBANGA"
```

Alternative avec GitHub CLI, si installé :

```bash
gh repo create portfolio-sharon --private --source=. --remote=origin --push
```

### C. Points de vigilance

- **Vérifier que le dépôt est bien privé** après sa création (Settings → General → Danger Zone).
- Ne jamais forcer la visibilité publique sans accord explicite du propriétaire du portfolio.
- Les fichiers `Portfolio.pdf`, `.review/`, `.env`, clés et secrets sont ignorés par `.gitignore`.
- Le dossier de travail ne doit contenir aucun token, mot de passe ou identifiant.
- Les coordonnées des référents ne sont pas dans le code : ne pas les ajouter sans accord.

## 10. Transfert ultérieur vers le compte GitHub de Sharon

Deux méthodes, sans dépendance au compte actuel.

### Méthode 1 — Transfert direct du dépôt

1. Sharon crée son compte GitHub.
2. Sur le dépôt actuel : **Settings → General → Transfer ownership**.
3. Saisir le nom d’utilisateur GitHub de Sharon et confirmer.
4. Le dépôt (et son historique) est transféré ; l’ancien compte perd l’accès. Sharon peut
   ensuite l’ajouter comme collaborateur si nécessaire.
5. Vérifier que le dépôt reste **privé** après le transfert.

### Méthode 2 — Nouveau dépôt chez Sharon

1. Sharon crée un dépôt **privé** vide, par exemple `portfolio-sharon`.
2. Depuis le dossier du projet, sur le poste de travail :

```bash
git remote remove origin
git remote add origin https://github.com/<compte-de-sharon>/portfolio-sharon.git
git push -u origin main
```

3. Supprimer ensuite l’ancien dépôt (ou le conserver privé) selon la préférence du propriétaire.

Après transfert, mettre à jour le README si nécessaire et vérifier les liens de contact.
Aucune URL de votre compte personnel ne doit être codée dans le site.

## 11. Déploiement (phase ultérieure)

Le dépôt restant privé pendant la première phase, GitHub Pages n’est pas disponible sur les
comptes gratuits pour un dépôt privé. Options possibles plus tard :

- **Netlify**, **Vercel** ou **Cloudflare Pages** connectés au dépôt privé ;
- GitHub Pages après décision explicite de rendre le site public (ou avec une offre adaptée).

Aucune commande de build n’est nécessaire. Publier **depuis le dépôt Git** (ou depuis une archive
propre), jamais le dossier de travail brut : configurer le fournisseur d’hébergement sur la racine
du dépôt, sans y joindre le PDF source ni les fichiers de test locaux.
Après déploiement :

1. Remplacer `og:image` et éventuellement ajouter `og:url` avec des URL **absolues**.
2. Ajouter éventuellement une balise `canonical` et vérifier le sitemap.
3. Tester le formulaire de contact et les liens `mailto:` / `tel:` sur mobile.

## 12. Informations à demander à Sharon avant la version finale

- [ ] Photo(s) professionnelle(s) : portrait vertical 4:5, haute résolution.
- [ ] Missions détaillées du stage PNUD (juillet 2026).
- [ ] Organisation du poste de Directrice communication & marketing, et statut actuel du poste.
- [ ] Intitulé complet de la seconde formation continue, et autres formations suivies.
- [ ] Années des diplômes (baccalauréat, licence) et dates du Master, si elle souhaite les afficher.
- [ ] Confirmer l’URL exacte du profil LinkedIn (elle a été fournie par le propriétaire du
      portfolio mais n’apparaît pas dans le PDF source).
- [ ] Détails sur « World Bank Group DRC online delegates » et les conférences philosophiques
      (année, rôle) — facultatifs.
- [ ] Décision sur l’affichage des coordonnées des référents (avec leur accord) et de l’adresse
      complète. Par défaut, rien de privé n’est publié.
- [ ] Autres réseaux professionnels (X, ResearchGate, etc.) — aucun lien inventé.
- [ ] Souhaite-t-elle une version anglaise complète du site ?
- [ ] Souhaite-t-elle afficher « Couturière » et « Tricoteuse » (présents dans le CV) dans les
      compétences ? Cette version reste centrée sur le profil économique.
- [ ] Nom de domaine ou choix d’hébergement pour la mise en ligne publique.

## 13. Propriété et confidentialité

Projet personnel de **Sharon MBUYI BADIBANGA**. Tous droits réservés. Aucune licence de
réutilisation n’est accordée sans son accord. Les informations contenues dans le CV source
(adresse complète, coordonnées des référents) ne doivent pas être publiées sans décision
explicite de leur propriétaire. Avant tout partage du dossier à un tiers, supprimer le PDF
source et le dossier `.review/` (non versionnés).
