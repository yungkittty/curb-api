### ACCOUNT

#### Model

```
 {
  id: Uuid,
  email: String,
  password: Hash,
  dateCreation: Date,
  active: Boolean,
  codeVerification: String,
  codePassword: String,
  createdAt: Date,
  updateAt: Date
 }
```

### USERS

#### Model

```
{
  id: Uuid,
  name: String,
  dateCreation: Date,
  avatarUrl: String,
  createdAt: Date,
  updateAt: Date
}
```

### GROUPS

#### Model

```
{
  id: Uuid,
  creatorId: Uuid,
  name: String,
  status: oneOf('public', 'private'),
  avatarUrl: String,
  dateCreation: String,
  users: [String],
  medias: [String],
  mediaTypes: oneOf('location', 'text', 'image','video')
  theme: String,
  description: String // max = 300
  category: String
  rank: Number,
  createdAt: Date,
  updateAt: Date
}
```

##### CATEGORY

    'Gaming',
    'Sport',
    'Lifestyle',
    'Technology',
    'Food and Drink',
    'Business',
    'Science',
    'Travel',
    'Careers',
    'Health',
    'Fashion',
    'Pets',
    'Music',
    'Movies',
    'Events'

### CONTENTS

#### Model

```
{
  id: Uuid, [Unique]
  creatorId: Uuid, [Unique]
  groupId: Uuid, [Unique]
  type: oneOf('location', 'text', 'image','video')
  dateCreation: Date,
  data: String [image;video:file_path,location;text: raw_string],
  createdAt: Date,
  updateAt: Date
}
```

### USERRECOMMENDATION

#### Model

```
{
  id: Uuid,
  groupIds: [String],
  createdAt: Date,
  updateAt: Date
}
```

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

### CONTENTS

```
  CONTENTS_BAD_PARAMETER: 400,
  CONTENTS_INVALID_ID: 400,
  CONTENTS_MISSING_CREATOR_ID: 400,
  CONTENTS_MISSING_GROUP_ID: 400,
  CONTENTS_MISSING_TYPE: 400,
  CONTENTS_ALREADY_EXIST: 400,
  CONTENTS_FORBIDDEN_WRITE: 403,
  CONTENTS_NOT_GROUP_CREATOR: 403,
  CONTENTS_FORBIDEN_OPERATION: 403,
  CONTENTS_INEXISTENT_CONTENT: 404,
  CONTENTS_CONTENTS_DATABASE_ERROR: 500
```
