define({ "api": [
  {
    "type": "POST",
    "url": "/accounts/sign-up",
    "title": "ACCOUNT SIGN-UP CREATE",
    "name": "ACCOUNTS1",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com',\n    password: 'password',\n    name: 'userName',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the created account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/sign-up.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/reset-password/",
    "title": "ACCOUNT RESET PASSWORD",
    "name": "ACCOUNTS10",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com',\n    password: 'password',\n    code: '890321',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_CODE_DIFFERENT",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-reset-password.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/code-password/:id",
    "title": "PRIVATE ACCOUNT UPDATE CODE PASSWORD",
    "name": "ACCOUNTS11",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    code: '586753',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-code-password.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/code-verification/:id",
    "title": "PRIVATE ACCOUNT UPDATE CODE ACTIVATION",
    "name": "ACCOUNTS12",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    code: '586753',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_ALREADY_ACTIVE",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-code-verification.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "DELETE",
    "url": "/accounts/:id",
    "title": "ACCOUNT DELETE",
    "name": "ACCOUNTS13",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-delete.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/validate-code-password",
    "title": "ACCOUNT VALIDATE CODE PASSWORD",
    "name": "ACCOUNTS14",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com',\n    password: 'password'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CODE_UNAVAILABLE",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_CODE_DIFFERENT",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-validate-code-password.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/sign-out",
    "title": "ACCOUNT SIGN-IN",
    "name": "ACCOUNTS2",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com',\n    password: 'password',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>refreshToken</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    token: 'uuid',\n    refreshToken: 'uuid',\n    id: 'uuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_EMAIL_FORMAT",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_PASSWORD",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/sign-in.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "GET",
    "url": "/accounts/:id",
    "title": "ACCOUNT READ BY ID",
    "name": "ACCOUNTS3",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id: 'uuid',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Account",
            "description": "<p>public field of the account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...user: {Object},\n    groups: [String]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-read.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "GET",
    "url": "/accounts/email",
    "title": "ACCOUNT READ BY EMAIL",
    "name": "ACCOUNTS4",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>public fields of the accounts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...user: {Object},\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_EMAIL_FORMAT",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-read-by-email.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "PATCH",
    "url": "/accounts/:id",
    "title": "ACCOUNT UPDATE",
    "name": "ACCOUNTS5",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>public fields of the accounts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...user: {Object},\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-update.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/sign-out",
    "title": "ACCOUNT SIGN-OUT",
    "name": "ACCOUNTS6",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_AHEAD_OF_TIME",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED:",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/sign-out.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/sign-up",
    "title": "ACCOUNT VALIDATE (AUTH)",
    "name": "ACCOUNTS7",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com',\n    password: 'password',\n    name: 'userName',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the created account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_EMAIL_FORMAT",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_AHEAD_OF_TIME",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_TOKEN",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/validate.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/sign-out",
    "title": "ACCOUNT REFRESH TOKEN",
    "name": "ACCOUNTS8",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    refreshToken: 'uuid',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>refreshToken</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    token: 'uuid',\n    refreshToken: 'uuid',\n    id: 'uuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/refresh.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/accounts/activate/:id",
    "title": "ACCOUNT ACTIVATE",
    "name": "ACCOUNTS9",
    "group": "ACCOUNTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code from the mail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    code: '586753'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_ALREADY_ACTIVE",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ACCOUNT_CODE_DIFFERENT",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DATABASE_ERROR",
            "description": "<p>500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/accounts/src/controllers/account-activate.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/emailing/verification",
    "title": "EMAILING VALIDATION",
    "name": "EMAILING1",
    "group": "EMAILING",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'email.email@email.com'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/emailing/src/controllers/reset.js",
    "groupTitle": "EMAILING"
  },
  {
    "type": "POST",
    "url": "/emailing/reset",
    "title": "EMAILING RESET PASSWORD",
    "name": "EMAILING2",
    "group": "EMAILING",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id: 'uuid'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>account id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/emailing/src/controllers/verification.js",
    "groupTitle": "EMAILING"
  },
  {
    "type": "POST",
    "url": "/groups/",
    "title": "GROUPS CREATE",
    "name": "GROUPS1",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    name: 'toto',\n    status: 'private',\n    mediaTypes: '['localisation', 'text'],\n    theme: 'red'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Group",
            "description": "<p>Public field of the group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...group: {Object}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-create.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/",
    "title": "GROUPS DISCOVERY",
    "name": "GROUPS10",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "creatorId",
            "description": "<p>QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "5",
            "description": "<p>QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "count",
            "defaultValue": "5",
            "description": "<p>QueryParam</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://localhost:4000/groups/?creatorId=5c38bfd8550c200020b1aa2a&userId=5c38bfd8550c200020b1aa2a&count=5&page=10",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": true,
            "field": "String",
            "description": "<p>groups list of groupId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    groups: [String]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-list.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/medias/:groupId/:mediaId",
    "title": "GROUPS PRIVATE ADD MEDIA",
    "name": "GROUPS11",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>mediaType</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    type: 'localsation',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_MEDIATYPES",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MEDIA_ALREADY_PRESENT",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-add-post.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "DELETE",
    "url": "/medias/:groupId/:mediaId",
    "title": "GROUPS PRIVATE DELETE MEDIA",
    "name": "GROUPS12",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaId",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MEDIA_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-delete-post.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/avatar/:groupId",
    "title": "ACCOUNT PRIVATE UPDATE AVATAR URL",
    "name": "GROUPS13",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    avatarUrl: '/contents/default/avatars/groups/medium.png'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-avatar.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "DELETE",
    "url": "/groups/:id",
    "title": "GROUPS DELETE",
    "name": "GROUPS2",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_CREATOR",
            "description": "<p>403</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-delete.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/:id",
    "title": "GROUPS READ BY ID",
    "name": "GROUPS3",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>queryParam</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>public field of the group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...group: {Object}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FORBIDEN_READ",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-read.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "PATCH",
    "url": "/groups/:id",
    "title": "GROUPS UPDATE",
    "name": "GROUPS4",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"mediaTypes\": [\n      \"text\",\n     \"image\"\n ],\n \"name\": \"TOkkTO\",\n  \"status\": \"public\",\n   \"theme\": \"blue\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>//</p>"
          },
          {
            "group": "200",
            "optional": true,
            "field": "String",
            "description": "<p>mediaTypes //</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "theme",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_CREATOR",
            "description": "<p>403</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-update.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/invite/:groupId",
    "title": "GROUPS INVITATION",
    "name": "GROUPS5",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>from token header</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    token: '{String}'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_IN_GROUP",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE",
            "description": "<p>XXX</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-invite.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/join",
    "title": "GROUPS JOIN",
    "name": "GROUPS6",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>from token header</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FORBIDEN_JOIN",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_ALREADY_JOIN",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-join.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/join",
    "title": "GROUPS TOKEN JOIN",
    "name": "GROUPS7",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_AHEAD_OF_TIME",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_TOKEN",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FORBIDEN_JOIN",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_ALREADY_JOIN",
            "description": "<p>403</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-token-join.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/unjoin/:groupId",
    "title": "GROUPS UNJOIN",
    "name": "GROUPS8",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>queryParam</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNAUTHORIZED_UNJOIN",
            "description": "<p>403</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-unjoin.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/permissions/:groupId/:userId",
    "title": "GROUPS PERMISSION",
    "name": "GROUPS9",
    "group": "GROUPS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>QueryParam</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "creator",
            "description": "<p>is the creator of the group</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "write",
            "description": "<p>can read in the group</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "read",
            "description": "<p>can write in the group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    creator: Boolean,\n    write: Boolean,\n    read: Boolean\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUP_NOT_FOUND",
            "description": "<p>400</p>"
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-permissions.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/users/",
    "title": "USER PRIVATE CREATE",
    "name": "USERS1",
    "group": "USERS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id: 'uuid',\n    name: 'toto'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the created user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuuid'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-create.js",
    "groupTitle": "USERS"
  },
  {
    "type": "DELETE",
    "url": "/users/:id",
    "title": "USERS PRIVATE DELETE",
    "name": "USERS2",
    "group": "USERS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-delete.js",
    "groupTitle": "USERS"
  },
  {
    "type": "GET",
    "url": "/groups/:id",
    "title": "USERS READ BY ID",
    "name": "USERS3",
    "group": "USERS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>//</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>user public Fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...user: {Object}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OTHER_SERVICE_ERROR",
            "description": "<p>XXX</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-read.js",
    "groupTitle": "USERS"
  },
  {
    "type": "PATCH",
    "url": "/users/:id",
    "title": "USERS UPDATE",
    "name": "USERS4",
    "group": "USERS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    <any>: publicfield\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>user public field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...user: {Object}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-update.js",
    "groupTitle": "USERS"
  },
  {
    "type": "POST",
    "url": "/users/avatar/:id",
    "title": "USER PRIVATE UPDATE AVATAR URL PATH",
    "name": "USERS5",
    "group": "USERS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>path file from /contents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    avatarUrl: '/contents/default/avatars/users/medium.png',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-avatar.js",
    "groupTitle": "USERS"
  }
] });
