# Curb API

API de Curb.

# Running

Pour lancer le projet rapidement, assurez-vous d'avoir Docker d'installé.

```bash
git clone https://github.com/yungkittty/curb-api
docker-compose up # ajouter -d pour lancer en background
```

Les différents micro-services se lancent en fonction des ports mappés dans le fichier `docker-compose.yml`.

Pour lancer un service spécifiquement:

```bash
git clone https://github.com/yungkittty/curb-api
cd curb-ms-name
yarn
yarn dev
```

Le service est alors disponible sur `http://localhost:3000`.

# Architecture des microservices

```
├─── node_modules
├─── src
│   └─── app.js
├─── test
│   └─── app.test.js
├─── .env
├─── Dockerfile
├─── package.json
├─── server.js
```

Un dossier `.curb-ms-blank` est disponible contenant le minimum vital pour commencer un nouveau service. Il suffit de le copier dans un nouveau sous-dossier, changer le nom du service dans le fichier `.env` et c'est parti.

Il ne faut pas oublier d'ajouter le service dans le fichier `docker-compose.yml` pour le lancer avec les autres.

## ROUTES

##### LEGEND

:lock: : Routes where user need to be authenticate, request will need to pass the token in the request.

### ACCOUNT

:warning: As for all the routes that need a authentificated user, a token need to be provided in the Authorization request header as follow :

`Authorization: 'Bearer ' + userToken;`

#### Model

```
 {
  id: {Uuid},
  email: {String},
  password: {String},
  refreshToken: {String}
 }
```


#### /account/sign-up {POST}

```
{
  email: {String},
  password: {String},
  name: {String}
}
```
##### response: success: 200 | failure: 400 | 500

#### /account/sign-in {POST}

##### parameter:

```
{
  email: {String},
  password: {String},
}
```

##### response: success: 200 | failure: 400

```
{
  id: {Uuid},
  token: {String},
  refreshToken: {String}
}
```

#### /account/sign-out {POST} :lock:

##### response: success: 200 | failure: 400 | 401

#### /account/refresh {POST}

#### header: Authorization: 'Bearer ' + token

##### parameter:

```
{
  refreshToken: {String}
}
```

##### response: success: 200 | failure: 400 | 500

```
{
  token: {String},
  refreshToken: {String},
  id: {Uuid}
}
```

#### /account/validate {POST} :lock:

route to validate the user's token

#### header: Authorization: 'Bearer ' + token

##### response: success: 200 | failure: 403

```
{
  id: {Uuid}
}
```

#### /account/:id {PATCH} :lock:

update the account.

##### parameter:

```
{
  email: {String},
  password: {String}
}
```
##### response: success: 200 | failure: 400 | 403

#### /account/:id {DELETE} :lock:

##### response: success: 200 | failure: 400 | 403

### USERS

#### Model

```
id: {Uuid},
email: {String},
name: {String},
groups: [Uuid],
password: {String},
refreshToken:{String},
dateCreation: {Date},
avatarUrl: {String}

```

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

#### /users/:id {GET} ~ read

##### response: success: 200 | failure: 400

```
{
  ...user: {Object} // see model
}
```

#### /users/:id {PATCH} ~ update :lock:

##### parameter:

```
{
 <any: userFields> // see model
}
```

##### response: success: 200 | failure: 400 | 401

#### /users/:id {DELETE} ~ delete :lock:

##### response: success: 200 | failure: 400 | 401

#### /users/:id/avatar {POST} :lock:

- Upload de l'avatar de l'utilisateur

##### parameter:

```
{
  avatar: {}
}
```

##### response: success: 200 | failure: 400 | 401

#### avatarUrl {GET}

`http://IP:PORT/users/:id/avatar/image_${SIZE}.extension`

\${SIZE} : small (50x50), medium(60x60), large (default: medium).

##### parameter:

##### response: success: 200 | failure: 400

### GROUPS

#### Model

```
id: {Uuid},
name: {String},
public: {Bool},
dateCreation: {String},
avatarUrl: {String},
users: [Users],
contentList: [Contents]

```

#### /groups {POST} :lock:

##### parameter:

```
{
  creatorId: {Uuid},
  name: {String},
  public: {Bool}
}
```

##### response: success: 200 | failure: 400 | 401

```
{
 id: {Uuid}
}
```

#### /groups/:id {GET}

##### response: success: 200 | failure: 400

```
{
 ...group: {Object} // see model
}
```

#### /groups/:id {PATCH} :lock:

:warning: (creatorId)

##### parameter:

```
{
 <any: groupFields> // see model
}
```

##### response: success: 200 | failure: 400 | 401

#### /groups/:id {DELETE} :lock:

:warning: (creatorId)

##### response: success: 200 | failure: 400 | 401

#### /groups/:id/avatar {POST} :lock:

:warning: (creatorId)

- Upload de l'avatar du group

##### parameter:

```
{
  avatar: {String}
}
```

##### response: success: 200 | failure: 400 | 401

#### avatarUrl {GET}

`http://IP:PORT/groups/:id/avatar/image_${SIZE}.extension`

\${SIZE} : small(50x50), medium(60x60), large(default: medium).

#### /groups/:groupId/:userId {GET} ~ JOIN :lock:

##### response: success: 200 | failure: 400 | 401

#### /groups/:contentId

:construction:

##### parameter:

##### response: success: 200 | failure: 400

:construction:

### MEDIA / CONTENTS
