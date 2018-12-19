# API Documentation

### TODO:

- [x] **SIGN-UP**  --> à besoin d'être tester (bloquant **USER**).
  
    - [x] rajouter `l'email`, ainsi que changer le `login` par `name`.
    
    - [x] enlevé la dépendance sur le model user.

    - [x] call inter-service sur `user` pour crée un utilisateur.
    

- [X] **SIGN-IN** --> à besoin d'être tester (bloquant **USER**).

    - [x] changer le `login` par `l'email` et dans le service `authenticate.
    
    - [x] passer le token dans le header de la requête HTTP.
    
    - [ ] **microservice user**: OAUTH de twitter...
    
- [X] **USER** --> à besoin d'être testter (bloquant **ENVIRONNEMENT**).

    - [x] rajouter le champs `email`, rajouter le champs `groups`, changer le champs `login` par `name`:

    - [x] méthode de vérification d'email valide, reponse (i.e service de mailing).

    - [x] **microservice user**: rajouter le champ `avatarUrl` dans le model user.
    
    - [x] **microservice user**: changer `create` pour accepter `l'email` et le `name` à la place du `login`.

    - [X] **microservice user**: changer la logique pour `l'update` afin d'accepter n'importe quelle champs public de l'utilisateur pour en suite le modifier.

    - [X] **microservice user**: faire des vérifications des paramètres des requêtes sur tous les contrôlleurs.

    - [ ] **microservice user**: stocker la photo de profil (`avatar`) de l'utilisateur, sur un chemin spécial, il y aura trois formats small (50x50), medium (60x60), big (?). `avatarUrl` doit 'pointer' sur le chemin de la photo de la taille medium, c'est en changant l'url que l'on obtient les autres size. Route pour uploader la photo.

- [ ] **GROUP**:

  - [x] créer le model du groupe.

  - [x] faire le CRUD du group, ainsi qu'une route pour obtenir une list de groupe.
  
  - [ ] faire une pagination pour la liste des group. (plus paramètre de recherche ?).

  - [ ] faire une route join pour qu'un utilisateur puisse rejoindre un groupe.

  - [ ] chemin pour l'upload et la récupération de la photo.

##### inter-service:

- [X] **cross service**: faire des call intra-service.

- [x] **docker + déploiement**:

##### Further TODO:

- [ ] faire un service de validation d'envois d'email.

- [x] refaire la documentation du readme.

- [ ] Table de jointure `UserGroups` qui représentera l'identité d'un user dans le groupe.

##### NEW:

  - [ ] **MICRO SERVICE AVATAR**:
      
    - [ ] POST route /avatar/upload/groups/:groupId.
      ```
        {
          name: {String} (filename + extension},
          image: {Buffer} (choix de la personne qui fait le service)
        }
      ```
    - [ ] POST route /avatar/upload/users/:userId.
    
      ```
        {
          name: {String} (filename + extension},
          image: {Buffer} (choix de la personne qui fait le service)
        }
      ```
     
     Ces urls correspondront au champs avatarUrl respectivement dans Groups et Users.
    - [ ] GET route /avatar/groups/:{size}/{filename}.{extension}.
    - [ ] GET route /avatar/users/:{size}/{filename}.{extension}.
      - retourne que l'image.
      - {size}: large || medium || small.
      - {filename}: groupId || userId.
      - {extension}: Image standard format (.png, .jpeg...).


**AVATAR MODEL**
```
  {
    image: {Buffer},
    dateCreation: {Date},
    name: {String} // name i.e: groupId || userId
    ... ?
  }
```

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
name: {String},
groups: [Uuid],
dateCreation: {Date},
avatarUrl: {String},
```

### routes à passer en privée: 

#### les routes du microserivices avatar

#### /users {POST} ~ create

##### parameter:

```
{
  email: {String},
  name: {String},
  password: {String},
}
```

##### response: success: 200 | failure: 400

```
{
  id: {Uuid}
}
```

#### /users/:id {DELETE} ~ delete :lock:

##### response: success: 200 | failure: 400 | 401




