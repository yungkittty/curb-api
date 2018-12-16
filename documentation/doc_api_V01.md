# API Documentation

### TODO:

- [ ] **SIGN-UP**  --> à besoin d'être tester (bloquant **USER**).
  
    - [x] rajouter `l'email`, ainsi que changer le `login` par `name`.
    
    - [x] enlevé la dépendance sur le model user.

    - [x] call inter-service sur `user` pour crée un utilisateur.
    

- [ ] **SIGN-IN** --> à besoin d'être tester (bloquant **USER**).

    - [x] changer le `login` par `l'email` et dans le service `authenticate.
    
    - [x] passer le token dans le header de la requête HTTP.
    
    - [ ] **microservice user**: OAUTH de twitter...
    
- [ ] **USER** --> à besoin d'être testter (bloquant **ENVIRONNEMENT**).

    - [x] rajouter le champs `email`, rajouter le champs `groups`, changer le champs `login` par `name`:

    - [x] méthode de vérification d'email valide, reponse (i.e service de mailing).

    - [x] **microservice user**: rajouter le champ `avatarUrl` dans le model user.
    
    - [x] **microservice user**: changer `create` pour accepter `l'email` et le `name` à la place du `login`.

     - [ ] **microservice user**: changer la logique pour `l'update` afin d'accepter n'importe quelle champs public de l'utilisateur pour en suite le modifier.

    - [ ] **microservice user**: faire des vérifications des paramètres des requêtes sur tous les contrôlleurs.

    - [ ] **microservice user**: stocker la photo de profil (`avatar`) de l'utilisateur, sur un chemin spécial, il y aura trois formats small (50x50), medium (60x60), big (?). `avatarUrl` doit 'pointer' sur le chemin de la photo de la taille medium, c'est en changant l'url que l'on obtient les autres size. Route pour uploader la photo.

- [ ] **GROUP**:

  - [x] créer le model du groupe.

  - [x] faire le CRUD du group, ainsi qu'une route pour obtenir une list de groupe.
  
  - [ ] faire une pagination pour la liste des group. (plus paramètre de recherche ?).

  - [ ] faire une route join pour qu'un utilisateur puisse rejoindre un groupe.

  - [ ] chemin pour l'upload et la récupération de la photo.

##### inter-service:

- [ ] **cross service**: faire des call intra-service. // pas fait partout !

- [x] **docker + déploiement**:

##### Further TODO:

- [ ] faire un service de validation d'envois d'email.

- [x] refaire la documentation du readme.

- [ ] Table de jointure `UserGroups` qui représentera l'identité d'un user dans le groupe.

**ACCOUNT MODEL**

```
id: {Uuid},
email: {String}
password: {String},
refreshToken:{String},
dateCreation: {Date}
```

**USER MODEL**

```
id: {Uuid},
accountId: {Uuid},
name: {String},
groups: [Uuid],
dateCreation: {Date},
avatarUrl: {String}
```

create -> req -> accountId + name + password. (route privé)
res -> same.

update -> req -> 
res -> same (publicFields)

read -> juste changer les publicFields (route privé)

delete -> (route privé)

+ account/delete (à réfléchir).
+ account/update

