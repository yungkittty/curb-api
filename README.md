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

`docker-compose up --build` pour build et en suite `docker-compose up` pour run si vous arrêter les containes.
`docker kill $(docker ps -q)` pour kill les containers.

## ADDITIONAL ERROR TAG

Additional error tag will be found in the body response when the request failed as it:

```
 {
  service: "serviceName",
  code: "TAG",
  from: "serviceName",
  info: "..."
 }
```

_from_ attribute is added when the error is coming from another service than the initial one.  
_info_ attribute is added when the Tag correspond to DATABASE_ERROR or UNDEFINED as an additional information.

### DEFAULT TAG

_TAG: HTTP STATUS_

```
 BAD_PARAMETER: 400,
 DATABASE_ERROR: 500,
 UNDEFINED: 500
```

### ACCOUNTS

```
 ACCOUNTS_BAD_PARAMETER: 400,
 ACCOUNTS_BAD_EMAIL_FORMAT: 400,
 ACCOUNTS_DUPLICATE_EMAIL: 400,
 ACCOUNTS_NOT_FOUND: 400,
 ACCOUNTS_ALREADY_EXIST: 400,
 ACCOUNTS_TOKEN_AHEAD_OF_TIME: 400,
 ACCOUNTS_BAD_REFRESH_TOKEN: 400,
 ACCOUNTS_INVALID_PASSWORD: 400,
 ACCOUNTS_CODE_DIFFERENT: 400,
 ACCOUNTS_CODE_UNAVAILABLE: 400,
 ACCOUNTS_INVALID_CODE: 403,
 ACCOUNTS_INVALID_TOKEN: 403,
 ACCOUNTS_TOKEN_NOT_EXPIRED: 403,(on route /account/refresh when the token is still available)
 ACCOUNTS_TOKEN_EXPIRED: 403,
 ACCOUNTS_NOT_ACTIVATE: 403,
 ACCOUNTS_ALREADY_ACTIVE: 500,
 ACCOUNTS_DATABASE_ERROR: 500
```

### USERS

```
 USERS_BAD_PARAMETER: 400,
 USERS_DUPLICATE_NAME: 400,
 USERS_NOT_FOUND: 400,
 USERS_MISSING_NAME: 400,
 USERS_ALREADY_EXIST: 400,
 USERS_DATABASE_ERROR: 500
```

### GROUPS

```
 GROUPS_BAD_PARAMETER: 400,
 GROUPS_BAD_STATUS: 400,
 GROUPS_BAD_MEDIATYPES: 400,
 GROUPS_TOKEN_AHEAD_OF_TIME: 400,
 GROUPS_DUPLICATE_NAME: 400,
 GROUPS_MISSING_CREATOR_ID: 400,
 GROUPS_MISSING_GROUP_NAME: 400,
 GROUPS_MISSING_STATUS: 400,
 GROUPS_ALREADY_EXIST: 400,
 GROUPS_NOT_FOUND: 400,
 GROUPS_INVALID_TOKEN: 403,
 GROUPS_TOKEN_EXPIRED: 403,
 GROUPS_USER_ALREADY_JOIN: 403,
 GROUPS_USER_NOT_CREATOR: 403,
 GROUPS_USER_NOT_IN_GROUP: 403,
 GROUPS_FORBIDEN_JOIN: 403,
 GROUPS_FORBIDEN_READ: 403,
 GROUPS_FORBIDEN_UNJOIN: 403,
 GROUPS_DATABASE_ERROR: 500
```

### EMAILING

```
 EMAILING_BAD_PARAMETER: 400,
 EMAILING_ALREADY_ACTIVE: 400,
 EMAILING_DATABASE_ERROR: 500
```

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
  refreshToken: {String},
  active: {Boolean}
 }
```

#### /accounts/sign-up {POST} |ACCOUNT CREATE|

```
{
  email: {String},
  password: {String},
  name: {String}
}
```

##### response: success: 200 | failure: 400 | 500

```
  {
    id: {String}
  }
```

#### /accounts/sign-in {POST} |CONNEXION|

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
  id: {Uuid}
}
```

#### /accounts/me {GET}

##### response: success: 200 | failure: 400

```
{
  id: {Uuid}
}
```

#### /accounts/sign-out {POST} :lock: |LOGOUT|

##### response: success: 200 | failure: 400 | 401

#### /accounts/refresh {POST} |REFRESH|

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

#### /accounts/validate {POST} :lock: |VALIDATE|

route to validate the user's token

#### header: Authorization: 'Bearer ' + token

##### response: success: 200 | failure: 403

```
{
  id: {Uuid}
}
```

#### /accounts/:id {PATCH} :lock: |ACCOUNT UPDATE|

update the account.

##### parameter:

```
{
  email: {String},
  password: {String}
}
```

##### response: success: 200 | failure: 400 | 403

#### /accounts/:id {GET} :lock: |ACCOUNT READ|

##### response: success: 200 | failure: 400

#### /accounts/email {POST} :lock: |ACCOUNT READ BY EMAIL|

##### parameters:

body

```
 {
  email: {String}
 {
```

##### response: success: 200 | failure: 400

```
 {
  ...accounts (PublicFields)
 {
```

#### /accounts/:id {DELETE} :lock: |ACCOUNT DELETE|

##### response: success: 200 | failure: 400 | 403

#### /accounts/code-verification/:id {POST} :no_entry_sign:

##### params:

body:

```
{
 code: {String}
}
```

##### response: sucess: 200 | failure: 400 | 500

#### /accounts/code-password/:id {POST} :no_entry_sign:

##### params:

body:

```
{
 code: {String}
}
```

##### response: sucess: 200 | failure: 400 | 500

#### /accounts/activate/:id {POST}

##### params:

body :
`code: {String}`

##### response: sucess: 200 | failure: 400 | 500

#### /accounts/reset-password/ {POST}

##### params:

body :

```
{
 code: {String},
 password: {String},
 email: {String}
}
```

##### response: sucess: 200 | failure: 400 | 500

##### /accounts/validate-code-password/ {POST}

##### params:

body :

```
{
 code: {String},
 email: {String}
}
```

##### response: sucess: 200 | failure: 400 | 500

#### /account/:id {POST}

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

#### /users/:id {GET} ~ read |USERS READ|

##### response: success: 200 | failure: 400

Dans le cas d'un READ sans authentification la liste des groupes ne comprendra pas les groups privées.

```
{
  ...user: {Object}, // see model
  groups: [String]
}
```

#### /users/:id {PATCH} ~ update :lock: |USERS UPDATE|

##### parameter:

```
{
 <any: userFields> // see model
}
```

##### response: success: 200 | failure: 400 | 401

#### avatarUrl {GET} : To get the avatar of an user |USERS AVATAR|

il faut rajouter l'ip du server à l'avatarUrl de l'utilisateur. Pour avoir une autre dimension changer la size en 'extra_small'/'small'/'medium'/'large'.

`/{path}/{size}.extension`

\${SIZE} : extra_small(50x50), small(60x60), medium(100x100), large (320x320) (default: medium).

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
mediaTypes: ['location', 'text', 'image','video']
theme: {String}
```

#### /groups {POST} :lock: |GROUPS CREATE|

##### parameter:

```
{
  name: {String},
  status: {String},
  mediaTypes: [String],
  theme: {String}
}
```

##### response: success: 200 | failure: 400 | 401

```
{
 id: {Uuid}
}
```

#### /groups/:id {GET} |GROUPS READ|

##### response: success: 200 | failure: 400

```
{
 ...group: {Object} // see model
}
```

#### /groups/ {GET} |GROUPS LIST|

##### params:

|   Name    | Required | Default |           Description           |
| :-------: | :------: | :-----: | :-----------------------------: |
|   page    | optional |    1    | will ask for the requested page |
|   count   | optional |    5    | number of elements for the page |
| creatorId | optional |         |        filter on creator        |
|  userId   | optional |         |        filter on userId         |

##### response: success: 200 | failure: 400

```
{
 "groups": [String]
}
```

#### /groups/:id {PATCH} :lock: |GROUPS UPDATE|

:warning: (creatorId)

##### parameter:

```
{
 <any: groupFields> // see model
}
```

##### response: success: 200 | failure: 400 | 401

#### /groups/:id {DELETE} :lock: |GROUPS DELETE|

:warning: (creatorId)

##### response: success: 200 | failure: 400 | 401

#### /groups/invite/:groupId/ {GET} ~ Invitation :lock: |GROUPS INVIVATION|

#### response: success: 200 | failure: 400 | 403 | 500

```
 {
  token: {String}
 }
```

#### /groups/join/:groupId/ {POST} ~ JOIN :lock: |GROUPS JOIN|

Ne marchera pas pour les groupes privés.

##### response: success: 200 | failure: 400 | 403 | 403 | 500

#### /groups/join {POST} ~ JOIN :lock: |GROUPS JOIN TOKEN|

##### parameter

```
 {
  token: {String}
 }
```

##### response: success: 200 | failure: 400 | 403 | 50

#### /groups/unjoin/:groupId {POST} ~ JOIN :lock: |GROUPS UNJOIN|

##### response: success: 200 | failure: 400 | 403 | 500

#### /groups/medias/:groupId/:mediaId {POST} :no_entry_sign: |GROUPS MEDIAS ADD|

##### parameters:

body:

```
 {
  type: {String}
 }
```

##### response: success: 200 | failure: 400

#### /groups/medias/:groupId/:mediaId {POST} :no_entry_sign: |GROUPS MEDIAS DELETE|

##### response: success: 200 | failure: 400

#### /groups/permissions/:groupId/:userId {GET} ~ GROUP PERMISSIONS :no_entry_sign: |GROUPS PERMISSIONS|

##### response: success: 200 | failure: 400 | 500

```
{
  creator: Boolean,
  write: Boolean,
  read: Boolean
}
```

#### avatarUrl {GET} : To get the avatar of a group |GROUPS AVATAR|

il faut rajouter l'ip du server à l'avatarUrl du group. Pour avoir une autre dimension changer la size en 'extra_small'/'small'/'medium'/'large'.

`/{path}/{size}.extension`

\${SIZE} : extra_small(50x50), small(60x60), medium(100x100), large (320x320) (default: medium).

#### /avatars/:groupId {POST} : To update the avatarUrl for media :no_entry_sign: |GROUPS AVATAR UPDATE|

##### parameter:

```
{
 avatarUrl: {String}
}
```

##### response: success: 200 | failure: 400 | 500

### CONTENTS

#### Model

```
id: {Uuid}, [Unique]
creatorId: {Uuid}, [Unique]
groupId: {Uuid}, [Unique]
type: {String} [Unique, 'location', 'text', 'image','video']
dateCreation: {Date},
data: {String} [file path]
```

#### /contents/\$(mediaType)/:groupId/:userId {POST} :lock:

\$mediaType: images / videos / locations / texts.

##### parameters:

form-data: file: {File} (\$mediaType=images || videos)

body:

```
 {
  data: {String} ($mediaType= locations || texts)
 }
```

##### response: success: 200 | failure: 400

```
{
id: {Uuid},
data: {String} [file path]
}
```

#### /contents/:contentId {GET}

##### response: success: 200 | failure: 400

```
{
 ...contents: {Object} // see model
}
```

#### /contents/:contentId {PATCH} :lock:

##### parameter:

```
{
 <any: contentField> // see model
}
```

##### response: success: 200 | failure: 400

#### /contents/:contentId {DELETE} :lock:

##### response: success: 200 | failure: 400

#### AVATAR

#### /contents/avatars/groups/:groupId {POST} :lock: |CONTENTS AVATAR UPLOAD GROUP|

:warning: (creatorId)

##### parameters:

form-data: file: {File}

##### response: success: 200 | failure: 400 | 403 | 500

#### /contents/avatars/users/:userId {POST} :lock: |CONTENTS AVATAR UPLOAD USER|

##### parameters:

form-data: file: {File}

##### response: success: 200 | failure: 400 | 403 | 500

:construction:

### EMAILING

#### /emailing/verification {POST}

Will send an email on the user's email with a code.
(Already called on /accounts/sign-up)

##### params:

body:

```
{
 id: {Uuid},
 url: {String} (https://url?=)
}
```

##### response: sucess: 200 | failure: 400 | 500

#### /emailing/reset {POST}

Will send an email on the user's email with a code.

##### params:

body:

```
{
 email: {String}
}
```

##### response: sucess: 200 | failure: 400 | 500
