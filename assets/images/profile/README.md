# Photos de profil

## Photo principale du portfolio

Déposer ici une photo professionnelle nommée **exactement** :

```text
assets/images/profile/sharon-portrait.jpg
```

Dès que ce fichier est présent et se charge correctement, le placeholder monogramme « SB »
disparaît automatiquement et la photo apparaît en fondu dans la section d’accueil.
Aucune modification du HTML n’est nécessaire.

### Recommandations

| Critère | Valeur conseillée |
|---|---|
| Cadrage | Portrait vertical, ratio **4:5** |
| Dimensions | **1200 × 1500 px** minimum |
| Format | JPEG (`.jpg`) |
| Poids | Moins de 400 Ko si possible |
| Sujet | Visage centré, épaules visibles, regard vers l’objectif |
| Décor | Arrière-plan neutre, lumière douce, sans distractions |
| Retouche | Naturelle ; éviter les filtres forts |

### Remplacer par un autre nom ou format

Modifier l’attribut `src` de cette ligne dans `index.html` :

```html
<img class="portrait__img" src="assets/images/profile/sharon-portrait.jpg" ...>
```

Conserver l’attribut `alt` à jour et des dimensions proches du ratio 4:5 pour éviter
tout décalage de mise en page.

## Photo secondaire (facultative)

Aucun second emplacement n’est affiché pour l’instant. Si une photo complémentaire est
souhaitée plus tard (par exemple dans la section « À propos »), dupliquer la structure
`<figure class="portrait" data-photo>` de `index.html`, adapter le nom du fichier
(par exemple `sharon-about.jpg`) et vérifier le rendu responsive.

## Règles à respecter

- Utiliser **uniquement une vraie photo de Sharon**, avec son accord.
- Ne jamais utiliser une image trouvée sur Internet pour la représenter.
- Ne pas publier de photo contenant des informations sensibles ou des tiers non consentants.
