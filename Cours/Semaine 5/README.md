# 📚 GEO 7630 — Cours 5  
## Intégration et visualisation des données 3D

## 🗓️ Date
**10 février 2026**

## Contenu du cours

### ** Présentation générale**
-  [Cours 5 ](https://docs.google.com/presentation/d/12IdXlANBZY3_ty7H13HFU8SaxVu_eqXEEz0BenfhqEc/edit?usp=sharing)

## 🎯 Objectifs du cours

À la fin de ce cours, les étudiantes et étudiants seront capables de :

1. Comprendre les **différentes façons de reconstruire le réel en 3D** (LiDAR, photogrammétrie, méthodes émergentes).
2. Distinguer **nuage de points, mesh, représentation volumétrique et jumeau numérique**.
3. Identifier le **bon niveau de réalité** selon le besoin (analyse, visualisation, décision).
4. Intégrer des données 3D hétérogènes dans un **flux SIG cohérent**.
5. Mettre en pratique l’**intégration 3D avec FME** (nettoyage, fusion, modélisation).

---

## 🧭 Logique du cours

Le cours est structuré autour d’un **cycle de transformation du réel** :

1. Capturer le réel  
2. Structurer le réel (intégration)  
3. Du nuage au mesh  
4. Représenter et diffuser  
5. Indoor et jumeaux numériques  
6. Choisir le bon niveau de réalité  

---

## 📋 Contenu du cours

### 1. Rétrospective — semaine 4
- Retour sur les données raster et matricielles.
- Lien entre surface, continuité et représentation du réel.

---

### 2. Capturer le réel : LiDAR et photogrammétrie

#### Données LiDAR
- Plateformes : aéroporté, terrestre, mobile, marin, spatial.
- Usages : topographie, urbanisme, environnement, transport, archéologie.
- Formats : LAS, LAZ, E57, ZLAS.
- Attributs : XYZ, intensité, retours, classification.

#### Photogrammétrie : reconstruire le réel
- Approche basée sur l’image.
- Reconstruction par corrélation visuelle (Structure from Motion).
- Production de surfaces continues et texturées.
- Finalité : perception, lisibilité, immersion (vs mesure directe).

Pipeline conceptuel :
- Nuage clairsemé  
- Nuage dense  
- Mesh  
- Texture  

Outils présentés :
- ArcGIS Drone2Map  
- RealityCapture  
- Agisoft Metashape  
- OpenDroneMap  
- DJI Terra  

---

### 3. Du nuage au mesh : statuts des objets 3D

- Nuage de points ≠ surface.
- Le mesh comme **objet intermédiaire critique**.
- Différence entre :
  - géométrie mesurable,
  - géométrie visualisable,
  - représentation volumétrique (NeRF, Gaussian Splatting).

---

### 4. Indoor et jumeaux numériques

- Indoor ≠ BIM ≠ SIG.
- Notions de niveaux, graphes et usages.
- Typologie des jumeaux :
  - jumeau statique,
  - jumeau virtuel,
  - jumeau numérique opérationnel.
- Introduction au **jumeau numérique géospatial**.

Question structurante :
> À partir de quand une 3D devient-elle un jumeau numérique ?

---

### 5. Intégration des données 3D (axe SIG)

#### Méthodes
- Fusion multi-sources.
- Alignement par ICP (Iterative Closest Point).

#### Modélisation de surface
- TIN.
- Grilles.
- Triangulation de Delaunay.
- Interpolation (Kriging).

#### Nettoyage et structuration avec FME
- PointCloudThinner.
- PointCloudCombiner.
- ComponentSetter.
- SurfaceModeller.
- SurfaceDrapper.

---

### 6. Visualisation des données 3D

- Nuages de points (altitude, classification, couleurs vraies).
- Profils en transect.
- Modèles de canopée (MNC).
- Visualisation des bâtiments.
- Liens avec BIM, urbanisme et planification.

---

### 7. Défis et tendances

#### Défis
- Volumétrie.
- Qualité et exactitude.
- Coûts.
- Intégration SIG.
- Vie privée.

#### Tendances
- IA pour la classification et la segmentation.
- Automatisation des chaînes 3D.
- Visualisation temps réel.
- Réalité augmentée.
- Convergence SIG / 3D / IA.

---

## 🧪 Laboratoire

### Thème
**Intégration de nuages de points, vecteurs et rasters**

Étapes :
1. Importation et nettoyage de données LiDAR.
2. Fusion de nuages de points.
3. Création de modèles de surface avec FME.
4. Visualisation 3D intégrée.


---

## ❓ Questions et échanges
- Défis d’intégration 3D.
- Choix du bon niveau de réalité.
- Frontière entre visualisation et jumeau numérique.

---

**🚀 Suite du cours : vers la 3D web, les scènes et la diffusion.**
