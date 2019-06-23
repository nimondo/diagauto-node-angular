# Angular: DIAGAUTO PROJECT

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Intro](#intro)
- [Requirements](#requirement)
- [Instruction](#instruction)
- [Files](#file)

## Intro
La compagnie FIEDLER AMS souhaiterait se doter d’un système de pointage pour
contrôler les heures de présence effectives de ses employés.
1. Le système fonctionnera avec une tablette et sera connecté à une base de données.
2. Les employés cliqueront sur leur nom sur la tablette à leur arrivée puis à leur départ
du lieu de travail.
3. Les heures d’arrivée et heures de départ seront enregistrées dans la base données.
4. Le système devra aussi permettre au service comptabilité de FIEDLER AMS de
savoir le nombre total d’heures de présence de n’importe quel employé au cours du
mois.
5. Votre tâche est de créer un prototype dudit système incluant une interface web.

## Requirements
Postgresql
node js
angular 

## Instructions
Le projet est constitue de deux dossiers l'un pour le frontend. utilisant le framework angular. Le projet compilé se trouve dans dist. Par contre le dossier src presente les components et autres ayant servis pour le developpement. 
Pour le frontend on a une interface de connexion point d'entree. Ensuite la page d'émargement. Une interface pour la creation des nouveaux utilisateurs et enfin une autre pour receoir le total d'heures. Il ya une couche d'autoristaion pour la creation des utilsateurs et voir le nombre d'heures. Il faut le droit admin ou d'apres le sql le role 2.

Le dossier concernant le backend presente le travail fait sous node js.
le port utilise est le 3000. Il sous Postgresql donc il faut creer un utilisateur et base de donnée 'diagauto'. Vous pourrez importer le fichier pgsql ou l'utiliser pour creer les tables users et checklist.
Les données envoyes au serveur sont format json.
le fichier index.js liste les routes et le queries servira de modele pour la base de donnees.

##  file 

 --run node index.js. the app listen on port 3000 on backend
 
 -- run index.html on the frontend/dist/diagauto
 
[(Back to TOP)](#table-of-contents)
