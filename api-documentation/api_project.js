define({
  "name": "curb-api",
  "version": "0.1.0",
  "description": "[WIP]",
  "header": {
    "title": "Informations",
    "content": "<h3>ACCOUNT</h3>\n<h4>Model</h4>\n<pre class=\"prettyprint\"> {\n  id: Uuid,\n  email: String,\n  password: Hash,\n  dateCreation: Date,\n  active: Boolean,\n  codeVerification: String,\n  codePassword: String,\n  createdAt: Date,\n  updateAt: Date\n }\n</code></pre>\n<h3>USERS</h3>\n<h4>Model</h4>\n<pre class=\"prettyprint\">{\n  id: Uuid,\n  name: String,\n  dateCreation: Date,\n  avatarUrl: String,\n  createdAt: Date,\n  updateAt: Date\n}\n</code></pre>\n<h3>GROUPS</h3>\n<h4>Model</h4>\n<pre class=\"prettyprint\">{\n  id: Uuid,\n  creatorId: Uuid,\n  name: String,\n  status: oneOf('public', 'private'),\n  avatarUrl: String,\n  dateCreation: String,\n  users: [String],\n  medias: [String],\n  mediaTypes: oneOf('location', 'text', 'image','video')\n  theme: String,\n  description: String // max = 300\n  category: String\n  rank: Number,\n  createdAt: Date,\n  updateAt: Date\n}\n</code></pre>\n<h5>CATEGORY</h5>\n<pre><code>'Gaming',\n'Sport',\n'Lifestyle',\n'Technology',\n'Food and Drink',\n'Business',\n'Science',\n'Travel',\n'Careers',\n'Health',\n'Fashion',\n'Pets',\n'Music',\n'Movies',\n'Events'\n</code></pre>\n<h3>CONTENTS</h3>\n<h4>Model</h4>\n<pre class=\"prettyprint\">{\n  id: Uuid, [Unique],\n  post: Uuid, (transform => {Post}),\n  type: oneOf('location', 'text', 'image','video'),\n  data: String [image;video:file_path,location;text: raw_string],\n  createdAt: Date,\n  updateAt: Date\n}\n</code></pre>\n<h3>POSTS</h3>\n<h4>Model</h4>\n<pre class=\"prettyprint\">{\n  id: Uuid, [Unique],\n  creatorId: Uuid,\n  groupId: Uuid,\n  medias: [Uuid] (transform => [Content]),\n  pinned: Boolean,\n  reaction: {\n    ids: [Uuid] (userId which reacted)\n  },\n  report: {\n    ids: [Uuid] (userId which reported)\n  }\n  createdAt: Date,\n  updateAt: Date\n}\n</code></pre>\n<h3>USERRECOMMENDATION</h3>\n<h4>Model</h4>\n<pre class=\"prettyprint\">{\n  id: Uuid,\n  groupIds: [String],\n  createdAt: Date,\n  updateAt: Date\n}\n</code></pre>\n<h2>ADDITIONAL ERROR TAG</h2>\n<p>Additional error tag will be found in the body response when the request failed as it:</p>\n<pre class=\"prettyprint\"> {\n  service: \"serviceName\",\n  code: \"TAG\",\n  from: \"serviceName\",\n  info: \"...\"\n }\n</code></pre>\n<p><em>from</em> attribute is added when the error is coming from another service than the initial one.<br>\n<em>info</em> attribute is added when the Tag correspond to DATABASE_ERROR or UNDEFINED as an additional information.</p>\n<h3>DEFAULT TAG</h3>\n<p><em>TAG: HTTP STATUS</em></p>\n<pre class=\"prettyprint\"> BAD_PARAMETER: 400,\n DATABASE_ERROR: 500,\n UNDEFINED: 500\n</code></pre>\n<h3>ACCOUNTS</h3>\n<pre class=\"prettyprint\"> ACCOUNTS_BAD_PARAMETER: 400,\n ACCOUNTS_BAD_EMAIL_FORMAT: 400,\n ACCOUNTS_DUPLICATE_EMAIL: 400,\n ACCOUNTS_NOT_FOUND: 400,\n ACCOUNTS_ALREADY_EXIST: 400,\n ACCOUNTS_TOKEN_AHEAD_OF_TIME: 400,\n ACCOUNTS_BAD_REFRESH_TOKEN: 400,\n ACCOUNTS_INVALID_PASSWORD: 400,\n ACCOUNTS_CODE_DIFFERENT: 400,\n ACCOUNTS_CODE_UNAVAILABLE: 400,\n ACCOUNTS_INVALID_CODE: 403,\n ACCOUNTS_INVALID_TOKEN: 403,\n ACCOUNTS_TOKEN_NOT_EXPIRED: 403,(on route /account/refresh when the token is still available)\n ACCOUNTS_TOKEN_EXPIRED: 403,\n ACCOUNTS_NOT_ACTIVATE: 403,\n ACCOUNTS_ALREADY_ACTIVE: 500,\n ACCOUNTS_DATABASE_ERROR: 500\n</code></pre>\n<h3>USERS</h3>\n<pre class=\"prettyprint\"> USERS_BAD_PARAMETER: 400,\n USERS_DUPLICATE_NAME: 400,\n USERS_NOT_FOUND: 400,\n USERS_MISSING_NAME: 400,\n USERS_ALREADY_EXIST: 400,\n USERS_DATABASE_ERROR: 500\n</code></pre>\n<h3>GROUPS</h3>\n<pre class=\"prettyprint\"> GROUPS_BAD_PARAMETER: 400,\n GROUPS_BAD_STATUS: 400,\n GROUPS_BAD_MEDIATYPES: 400,\n GROUPS_TOKEN_AHEAD_OF_TIME: 400,\n GROUPS_DUPLICATE_NAME: 400,\n GROUPS_MISSING_CREATOR_ID: 400,\n GROUPS_MISSING_GROUP_NAME: 400,\n GROUPS_MISSING_STATUS: 400,\n GROUPS_ALREADY_EXIST: 400,\n GROUPS_NOT_FOUND: 400,\n GROUPS_INVALID_TOKEN: 403,\n GROUPS_TOKEN_EXPIRED: 403,\n GROUPS_USER_ALREADY_JOIN: 403,\n GROUPS_USER_NOT_CREATOR: 403,\n GROUPS_USER_NOT_IN_GROUP: 403,\n GROUPS_FORBIDEN_JOIN: 403,\n GROUPS_FORBIDEN_READ: 403,\n GROUPS_FORBIDEN_UNJOIN: 403,\n GROUPS_DATABASE_ERROR: 500\n</code></pre>\n<h3>EMAILING</h3>\n<pre class=\"prettyprint\"> EMAILING_BAD_PARAMETER: 400,\n EMAILING_ALREADY_ACTIVE: 400,\n EMAILING_DATABASE_ERROR: 500\n</code></pre>\n<h3>CONTENTS</h3>\n<pre class=\"prettyprint\">  CONTENTS_BAD_PARAMETER: 400,\n  CONTENTS_INVALID_ID: 400,\n  CONTENTS_MISSING_CREATOR_ID: 400,\n  CONTENTS_MISSING_GROUP_ID: 400,\n  CONTENTS_MISSING_TYPE: 400,\n  CONTENTS_ALREADY_EXIST: 400,\n  CONTENTS_FORBIDDEN_WRITE: 403,\n  CONTENTS_NOT_GROUP_CREATOR: 403,\n  CONTENTS_FORBIDEN_OPERATION: 403,\n  CONTENTS_INEXISTENT_CONTENT: 404,\n  CONTENTS_CONTENTS_DATABASE_ERROR: 500\n</code></pre>\n"
  },
  "title": "curb-api",
  "url": "https://{URL}",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2019-12-12T14:14:59.029Z",
    "url": "http://apidocjs.com",
    "version": "0.18.0"
  }
});
