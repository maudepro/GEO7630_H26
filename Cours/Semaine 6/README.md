# 📚 GEO 7630 — Cours 6  
## Intégration et visualisation avancée avec ArcGIS Pro et ArcGIS Online


## 🗓️ Date
**17 février 2026**

## Contenu du cours

### ** Présentation générale**
-  [Cours 6 ](https://docs.google.com/presentation/d/13qnreV4sO-9vdG7gUpyKuHb5WpESaW05Egtb2IGbpkw/edit?usp=sharing)

# GEO7630 — Cours 6 : ArcGIS Online (UQAM)

Portail : https://uqam.maps.arcgis.com/

## Intention du cours
Apprendre à utiliser ArcGIS Pro/Online comme une plateforme complète de diffusion :

- explorer l’interface et les “objets” (données, services, webmaps, apps)
- appliquer la sémiologie graphique dans un contexte web interactif
- produire des services cartographiques (propres, réutilisables, performants)
- comprendre les bases d’administration et de gouvernance (partage, groupes, rôles, traçabilité)

### À la fin de ce cours, les étudiantes et étudiants seront capables de :

1. Comprendre la chaîne **données → service → carte web → application** dans ArcGIS Online (AGOL).
2. Distinguer **couche (Feature Layer), vue (View), carte web (WebMap) et application** (et comprendre les dépendances entre ces objets).
3. Appliquer une **sémiologie graphique adaptée au web** : message cartographique, variables visuelles, échelles, agrégation, étiquettes et popups.
4. Produire et publier des **services cartographiques** exploitables et stables (schéma, champs, performance, mise à jour).
5. Mettre en place des principes de **gouvernance** : organisation du contenu, partage (privé/groupe/org/public), gestion des accès et traçabilité minimale.

---

## 🧭 Logique du cours

Le cours est structuré autour d’un **cycle de mise en produit du géospatial dans le web** :

1. Explorer l’écosystème AGOL (interface, objets, dépendances)
2. Préparer et publier une couche comme **service** (contrat, stabilité)
3. Construire une **WebMap** (sémiologie, popups, filtres, échelles)
4. Diffuser via des **applications** (ex. tableaux de bord / pages web)
5. Gouverner : contenu, groupes, partage, vues, rôles
6. Choisir le bon niveau de “produit” selon le besoin (carte simple vs app, vue vs couche, partage restreint vs large)

---

## Partie A — Cartographier l’interface (exploration guidée)
> Objectif : ne plus naviguer “au hasard”. Vous devez comprendre où vivent les choses.

### A1. Les 5 endroits à connaître
- **Contenu** : vos items (données, couches, cartes, apps)
- **Carte (Map Viewer)** : construire une WebMap (style, popups, filtres)
- **Catalogue / Living Atlas** : données prêtes à l’emploi
- **Groupes** : gouvernance et diffusion (qui voit quoi ?)
- **Organisation / Paramètres** (si accès) : rôles, sécurité, politiques

**Mini-exercice (5 minutes)**
Trouvez un item dans votre contenu et répondez :
- De quel type est-il ? (couche, table, webmap, app…)
- Qui peut le voir ? (privé / organisation / groupes / public)
- Qu’est-ce qui dépend de lui ? (apps, webmaps, vues…)

---

## Partie B — Sémiologie graphique dans ArcGIS Online (web)
> Objectif : faire des choix de représentation qui servent une intention.

### B1. Rappel : une variable visuelle = une question
- Taille : “plus / moins”
- Couleur (graduée) : “intensité”
- Couleur (catégories) : “type”
- Transparence / contour / hiérarchie : “qui doit dominer ?”
- Agrégation / clustering : “comment je gère la densité ?”

### B2. Ateliers Map Viewer (checklist)
Dans votre WebMap :
1. **Style**
   - Choisir un rendu principal (1 message, pas 3 messages)
   - Limiter à 1–2 variables visuelles max (sinon illisible)
2. **Étiquettes**
   - Si vous mettez des labels : à quel zoom ? sur quels champs ? pourquoi ?
3. **Popups**
   - Titre lisible
   - Champs pertinents seulement
   - Format des nombres / unités
4. **Filtres**
   - Un filtre simple qui aide l’exploration (ex. top 10, seuil, catégorie)

**Mini-exercice (sémiologie)**
Écrivez 2 versions de votre carte :
- Version 1 : “compréhension rapide” (grand public)
- Version 2 : “diagnostic” (analyste)
Qu’est-ce qui change ? (style / popup / filtres / échelles)

---

## Partie C — Production de services cartographiques (le “contrat”)
> Objectif : publier des couches réutilisables et stables.

### C1. Les objets (à ne pas confondre)
- **Données** (fichier, table) → source
- **Hosted Feature Layer** → service (consultable, éditable, requêtable)
- **View (Feature Layer View)** → même données, autre “contrat” (filtre, champs, partage)
- **WebMap** → mise en scène cartographique (style + interactions)
- **Apps** → expérience (dashboard, story, experience builder, etc.)

### C2. Contrat minimal d’un bon service
Avant de publier (ou juste après), documentez :
- **Clé/identifiant** stable (si possible)
- **Schéma** : noms de champs stables + types cohérents
- **Permissions** : qui peut lire / éditer
- **Performance** : champs inutiles supprimés, géométrie raisonnable
- **Mise à jour** : fréquence + méthode (overwrite, append, update)

---

## Partie D — Admin & gouvernance (AGOL comme plateforme)
> Objectif : comprendre la différence entre “je publie” et “je gouverne”.

### D1. Partage : règle simple
- **Privé** par défaut
- **Groupe** pour collaborer (classe / équipe)
- **Organisation** si tout le monde UQAM doit voir
- **Public** seulement si vous assumez la responsabilité (données + message + risques)

### D2. Groupes = produit de gouvernance
Créez/identifiez un groupe “GEO7630_H26” (ou équivalent) et testez :
- Partager une couche au groupe
- Partager une webmap au groupe
- Vérifier la visibilité depuis un autre compte (si possible)

### D3. Vues (Views) = gouvernance fine
Créez une **vue** de votre couche pour :
- masquer des champs
- filtrer des entités
- partager à un public différent

**Mini-exercice (gouvernance)**
Vous devez publier la même couche pour deux publics :
- Public A : classe (tous les champs)
- Public B : démonstration publique (champs minimaux)
Quelle stratégie : 1 couche + 2 vues, ou 2 couches séparées ? Justifiez.

---

## Critères d’évaluation implicites (ce que je regarde)
- Votre WebMap “raconte” quelque chose sans explication orale
- Votre service est stable : champs propres, pas de bricolage post-publication
- Vos choix de partage sont intentionnels (pas accidentels)
- Vous pouvez expliquer la chaîne : données → service → webmap → app

---
