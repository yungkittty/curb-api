# API Documentation

### TODO:

changer la route sign-up/create/sign-in

- [ ] **USER**

  - [ ] **model user**: rajouter le champs `email`, rajouter le champs `subscribedGroupIds`, changer le champs `login` par `name`:

  - [ ] **model user**: méthode de vérificationd d'email valide, reponse (i.e service de mailing).

    ```
      id: {Uuid},
      + email: {String}
      + name: {String}, // - anciement login: {String},
      + subscribedGroupIds: {Array},
      password: {String},
      refreshToken:{String},
      dateCreation: {Date},
      avatarUrl: {String},

    ```

    - [ ] **microservice sign-in**: changer le `login` par `l'email` et dans le service `authenticate` aussi.

    - [ ] **microservice sign-up**: rajouter `l'email`, ainsi que changer le `login` par `name`.

    - [ ] **microservice user**: rajouter le champ `avatarUrl` dans le model user.

    - [ ] **microservice user**: OAUTH de twitter...

  - [ ] **microservice user**: changer `create` pour accepter `l'email` et le `name` à la place du `login`.

  - [ ] **microservice user**: changer la logique pour `l'update` afin d'accepter n'importe quelle champs public de l'utilisateur pour en suite le modifier.

  - [ ] **microservice user**: faire des vérifications des paramètres des requêtes sur tous les contrôlleurs.

  - [ ] **microservice user**: stocker la photo de profil (`avatar`) de l'utilisateur, sur un chemin spécial, il y aura trois formats small (50x50), medium (60x60), big (?). `avatarUrl` doit 'pointer' sur le chemin de la photo de la taille medium, c'est en changant l'url que l'on obtient les autres size. Route pour uploader la photo.

- [ ] **GROUP**:

  - [ ] créer le model du groupe :

  ```
  {
    id: {Uuid},
    name: {String},
    public: {Bool},
    creatorId: {String}
    dateCreation: {String},
    avatarUrl: {String},
    users: [Users],
    contents: [Contents]
  }
  ```

  ```
  Users:
  {

  }
  ```

  ```
  Contents:
  {

  }
  ```

  [ ] faire le CRUD du group, ainsi qu'une route pour obtenir une list de groupe.

  [ ] faire une route join pour qu'un utilisateur puisse rejoindre un groupe.

  [ ] chemin pour l'upload et la récupération de la photo.

##### inter-service:

- [ ] **cross service**: faire un call depuis `users ~ update` sur `sign-up validate`.

- [ ] **docker + déploiement**:

##### Further TODO:

- [ ] faire un service de validation d'envois d'email.

- [ ] refaire la documentation après toutes les tâches réaliser.
