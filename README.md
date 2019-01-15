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

## UTILISER DOCKER

**installer docker et docker-compose**

`docker-compose up --build` pour build et en suite `docker-compose up ` pour run si vous arrêter les containes.
`docker kill $(docker ps -q)` pour kill les containers.

## ROUTES

##### LEGEND

:lock: : Routes where user need to be authenticate, request will need to pass the token in the request.

:no_entry_sign: Private API routes.

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
password: {String},
refreshToken:{String},
dateCreation: {Date},
avatarUrl: {String}

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

#### avatarUrl {GET} : To get the avatar of an user

`{URL}/{name}_{size}.extension`

\${SIZE} : small(50x50), medium(60x60), large (320x320) (default: medium).

### GROUPS

#### Model

```
id: {Uuid},
name: {String},
public: oneOf('public', 'private'),
dateCreation: {String},
avatarUrl: {String},
users: [String],
medias: [String],
mediaTypes: ['localisation', 'text', 'image','video']

```

#### /groups {POST} :lock:

##### parameter:

```
{
  creatorId: {Uuid},
  name: {String},
  public: {String}
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

#### /groups/ {GET}

##### params: 

| Name | Required | Default | Description |
|:---:|:---:|:---:|:---:|
| page   | optional | 1 | will ask for the requested page |
| count    | optional | 5 | number of elements for the page |
| creatorId    | optional |       | filter on creator |
| userId    | optional | | filter on userId |

##### response: success: 200 | failure: 400

```
{
 "groups": [String]
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

#### /groups/:groupId/:guestId {GET} ~ Invitation  :lock:

:warning: Absence de 'hook' (server side event/websocket...) entre back/front => l'invitation peut être que physique (i.e QR code) :warning:

#### response: success: 200 | failure: 400 | 403 | 500

```
 {
  token: {String}
 }
```

#### /groups/join/:groupId/ {POST} ~ JOIN :lock:

Ne marchera pas pour les groupes privés.

##### response: success: 200 | failure: 400 | 403 | 403 | 500

#### /groups/join {POST} ~ JOIN :lock:

##### parameter

```
 {
  token: {String}
 }
```

##### response: success: 200 | failure: 400 | 403 | 50

#### /groups/medias/:groupId/:mediaId {POST} ~ POST MEDIA :no_entry_sign:

##### response: success: 200 | failure: 400

#### /groups/permissions/:groupId/:userId {GET} ~ GROUP PERMISSIONS :no_entry_sign:

##### response: success: 200 | failure: 400 | 500

```
{
  creator: Boolean,
  write: Boolean,
  read: Boolean
}
```

#### avatarUrl {GET} : To get the avatar of a group

`{URL}/{name}_{size}.extension`

\${SIZE} : small(50x50), medium(60x60), large (320x320) (default: medium).

#### /avatar/:groupId {POST} : To update the avatarUrl for media :no_entry_sign:

##### paramerter:

```
{
 avatarUrl: {String] 
}
```

##### response: success: 200 | failure: 400 | 500


### MEDIA / CONTENTS

#### AVATAR

#### /media/avatar/group/:groupId/ {POST} :lock: 

:warning: (creatorId)

##### response: success: 200 | failure: 400 | 403 | 500

#### /media/avatar/user/:userId/ {POST} :lock:

##### response: success: 200 | failure: 400 | 403 | 500

:construction:
