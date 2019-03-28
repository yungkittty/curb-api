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
            "field": "BAD_EMAIL_FORMAT",
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
    "url": "/emailing/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/emailing/src/controllers/reset.js",
    "groupTitle": "EMAILING"
  },
  {
    "type": "POST",
    "url": "/emailing/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/emailing/src/controllers/verification.js",
    "groupTitle": "EMAILING"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-join.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-delete.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-update.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-add-post.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-avatar.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-create.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-delete-post.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-delete.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-invite.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-create.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-list.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-permissions.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-read.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-token-join.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-unjoin.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/groups/src/controllers/group-update.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-avatar.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/sign-out",
    "title": "ACCOUNT CREATE",
    "name": "TOTO",
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
            "field": "OTHER_SERVICE_ERROR",
            "description": ""
          }
        ]
      }
    },
    "filename": "../services/users/src/controllers/user-read.js",
    "groupTitle": "GROUPS"
  }
] });
