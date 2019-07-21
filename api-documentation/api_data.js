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
    "filename": "../../services/accounts/src/controllers/sign-up.js",
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
    "filename": "../../services/accounts/src/controllers/account-reset-password.js",
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
    "filename": "../../services/accounts/src/controllers/account-code-password.js",
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
    "filename": "../../services/accounts/src/controllers/account-code-verification.js",
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
    "filename": "../../services/accounts/src/controllers/account-delete.js",
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
    "filename": "../../services/accounts/src/controllers/account-validate-code-password.js",
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
    "filename": "../../services/accounts/src/controllers/sign-in.js",
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
    "filename": "../../services/accounts/src/controllers/account-read.js",
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
    "filename": "../../services/accounts/src/controllers/account-read-by-email.js",
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
    "filename": "../../services/accounts/src/controllers/account-update.js",
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
    "filename": "../../services/accounts/src/controllers/sign-out.js",
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
    "filename": "../../services/accounts/src/controllers/validate.js",
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
            "field": "token",
            "description": "<p>token from the mail</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    token: '{String}'\n}",
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
            "field": "userId",
            "description": "<p>the userId</p>"
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
    "filename": "../../services/accounts/src/controllers/account-activate.js",
    "groupTitle": "ACCOUNTS"
  },
  {
    "type": "POST",
    "url": "/texts/:groupId/:userId",
    "title": "CONTENT ADD TEXT",
    "name": "CONTENTS1",
    "group": "CONTENTS",
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
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    data: '${textInput}',\n}",
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
            "description": "<p>id of the created content</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>text of the created content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: '${textInput}'\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_FORBIDDEN_WRITE",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/texts.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "GET",
    "url": "/:id",
    "title": "CONTENT POST DELETE",
    "name": "CONTENTS10",
    "group": "CONTENTS",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...content: {Object}\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/post-delete.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "GET",
    "url": "/:id",
    "title": "CONTENT POST READ",
    "name": "CONTENTS11",
    "group": "CONTENTS",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...content: {Object}\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/post-read.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "GET",
    "url": "/:id",
    "title": "CONTENT POST UPDATE",
    "name": "CONTENTS12",
    "group": "CONTENTS",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...content: {Object}\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/post-update.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/images/:groupId/:userId",
    "title": "CONTENT ADD IMAGE",
    "name": "CONTENTS2",
    "group": "CONTENTS",
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
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>file path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    file: '${imagePath}',\n}",
          "type": "form-data"
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
            "description": "<p>id of the created content</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>file path of the created content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    file: '/contents/uploads/groups/${groupId}/images/${userId}/${filename}'\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_FORBIDDEN_WRITE",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/images.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/texts/:groupId/:userId",
    "title": "CONTENT ADD VIDEO",
    "name": "CONTENTS3",
    "group": "CONTENTS",
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
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>file path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    file: '${videoPath}',\n}",
          "type": "form-data"
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
            "description": "<p>id of the created content</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>file path of the created content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    file: '/contents/uploads/groups/${groupId}/videos/${userId}/${filename}'\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_FORBIDDEN_WRITE",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/videos.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/locations/:groupId/:userId",
    "title": "CONTENT ADD LOCATIONS",
    "name": "CONTENTS4",
    "group": "CONTENTS",
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
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>locations data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    data: '${locationsInput}',\n}",
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
            "description": "<p>id of the created content</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>locations data of the created content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: '${locationsInput}'\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_FORBIDDEN_WRITE",
            "description": "<p>403</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/locations.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "DELETE",
    "url": "/:id",
    "title": "CONTENT DELETE",
    "name": "CONTENTS6",
    "group": "CONTENTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentid",
            "description": "<p>//</p>"
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/content-delete.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "GET",
    "url": "/:id",
    "title": "CONTENT READ BY ID",
    "name": "CONTENTS7",
    "group": "CONTENTS",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...content: {Object}\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/content-read.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "GET",
    "url": "/:id",
    "title": "CONTENT POST READ",
    "name": "CONTENTS9",
    "group": "CONTENTS",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ...content: {Object}\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_INEXISTENT_CONTENT",
            "description": "<p>404</p>"
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
    "filename": "../../services/contents/src/controllers/post-create.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/avatars/${groups/users}/:id",
    "title": "AVATARS FOR GROUPS/USERS",
    "name": "USERS5",
    "group": "CONTENTS",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>GROUP/USER id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>avatar file path from user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    file: ${avatarPath}\n}",
          "type": "form-data"
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
            "field": "avatarUrl",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    avatarUrl: '/contents/uploads/avatars/${groupId/userId}/medium.${extension}'\n}",
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
            "field": "CONTENTS_BAD_PARAMETER",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CONTENTS_NOT_GROUP_CREATOR",
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
    "filename": "../../services/contents/src/controllers/avatars.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/emailing/reset",
    "title": "EMAILING RESET PASSWORD",
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
    "filename": "../../services/emailing/src/controllers/reset.js",
    "groupTitle": "EMAILING"
  },
  {
    "type": "POST",
    "url": "/emailing/verification",
    "title": "EMAILING VERIFICATION/VALIDATION",
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
            "field": "id",
            "description": "<p>userId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>https://curb-api.com?validateEmail=</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id: 'uuid',\n    url: {String}\n}",
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
    "filename": "../../services/emailing/src/controllers/verification.js",
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
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>description //</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    name: 'toto',\n    status: 'private',\n    mediaTypes: '['location', 'text'],\n    theme: 'red'\n}",
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
    "filename": "../../services/groups/src/controllers/group-create.js",
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
    "filename": "../../services/groups/src/controllers/group-list.js",
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
    "filename": "../../services/groups/src/controllers/group-add-post.js",
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
    "filename": "../../services/groups/src/controllers/group-delete-post.js",
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
    "filename": "../../services/groups/src/controllers/group-avatars.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/trending",
    "title": "GROUPS TRENDING",
    "name": "GROUPS14",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>GlobalTrending: if no parameter are given it will return the global trending.</h4> <h4>CustomizeTrending: if you give userId return the global trending and the custom trending.</h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>queryParam, customizeTrending</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "defaultValue": "100",
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
          "content": "[\n {\n   category: 'global',\n   data: [{groups: [String]}]\n },\n {\n   category: '${mediaType}', // image, video, location, text\n   data: [{groups: [String]}]\n }\n // if userId\n {\n   category: 'custom',\n   data: [{groups: [String]}]\n }\n]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"category\": \"global\",\n        \"data\": [\n            {\n                \"groups\": [\n                    \"5cdcf29e011c6207cff1ad0b\",\n                    \"5cdcf19f9dfda2001dcae884\",\n                    \"5cdcf335011c6207cff1ad1c\",\n                ]\n            }\n        ]\n    },\n    {\n        \"category\": \"location\",\n        \"data\": [\n            {\n                \"groups\": [\n                    \"5cddae6c011c6207cff1ad4e\",\n                    \"5cddae7c011c6207cff1ad53\"\n                ]\n            }\n        ]\n    },\n    {\n        \"category\": \"image\",\n        \"data\": [\n            {\n                \"groups\": [\n                    \"5cddae81011c6207cff1ad54\",\n                    \"5ce3dee7e1edb1001c59527e\"\n                ]\n            }\n        ]\n    },\n    {\n        \"category\": \"text\",\n        \"data\": [\n            {\n                \"groups\": [\n                    \"5cdd9184aff354001c3cbd21\",\n                    \"5cdcf0789dfda2001dcae87e\",\n                    \"5cdd120a2ea0dd001c28953a\"\n                ]\n            }\n        ]\n    },\n    {\n        \"category\": \"video\",\n        \"data\": [\n            {\n                \"groups\": [\n                    \"5cdd9184aff354001c3cbd21\",\n                    \"5cdcf07c9dfda2001dcae87f\",\n                    \"5cdd120a2ea0dd001c28953a\"\n                ]\n            }\n        ]\n    },\n    {\n        \"category\": \"custom\",\n        \"data\": [\n            {\n                \"groups\": [\n                    \"5cddae77011c6207cff1ad51\",\n                    \"5cdda92c011c6207cff1ad30\",\n                    \"5cdd3a15011c6207cff1ad2a\",\n\n                ]\n            }\n        ]\n    }\n]",
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
          }
        ]
      }
    },
    "filename": "../../services/groups/src/controllers/group-trending.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/list-custom",
    "title": "GROUPS LIST CUSTOM",
    "name": "GROUPS15",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>List for custom section </h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "defaultValue": "10",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
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
          "content": "{\n  \"count\": 3,\n  \"page\": 1,\n  \"data\": [\n        \"5cddae77011c6207cff1ad51\",\n        \"5cdda92c011c6207cff1ad30\",\n        \"5cdd3a15011c6207cff1ad2a\",\n  ]\n}",
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
          }
        ]
      }
    },
    "filename": "../../services/groups/src/controllers/group-list-custom.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/list-global",
    "title": "GROUPS LIST GLOBAL",
    "name": "GROUPS16",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>List for global section </h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "defaultValue": "10",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
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
          "content": "{\n  \"count\": 3,\n  \"page\": 1,\n  \"data\": [\n        \"5cddae77011c6207cff1ad51\",\n        \"5cdda92c011c6207cff1ad30\",\n        \"5cdd3a15011c6207cff1ad2a\",\n  ]\n}",
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
          }
        ]
      }
    },
    "filename": "../../services/groups/src/controllers/group-list-global.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/list-random",
    "title": "GROUPS LIST RANDOM",
    "name": "GROUPS17",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>List for Random section</h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "defaultValue": "10",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
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
          "content": "{\n  \"count\": 3,\n  \"page\": 1,\n  \"data\": [\n        \"5cddae77011c6207cff1ad51\",\n        \"5cdda92c011c6207cff1ad30\",\n        \"5cdd3a15011c6207cff1ad2a\",\n  ]\n}",
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
          }
        ]
      }
    },
    "filename": "../../services/groups/src/controllers/group-list-random.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/route?",
    "title": "GROUPS LIST USERS",
    "name": "GROUPS18",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>List of users in a group</h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "defaultValue": "10",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>queryParam can only pass true</p>"
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
            "field": "list",
            "description": "<p>of userIds</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"count\": 3,\n  \"page\": 1,\n  \"data\": [\n        \"5cddae77011c6207cff1ad51\",\n        \"5cdda92c011c6207cff1ad30\",\n        \"5cdd3a15011c6207cff1ad2a\",\n  ]\n}",
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
          }
        ]
      }
    },
    "filename": "../../services/groups/src/controllers/group-list-user.js",
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
    "filename": "../../services/groups/src/controllers/group-delete.js",
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
    "filename": "../../services/groups/src/controllers/group-read.js",
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
            "optional": true,
            "field": "String",
            "description": "<p>name //</p>"
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
    "filename": "../../services/groups/src/controllers/group-update.js",
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
    "filename": "../../services/groups/src/controllers/group-invite.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "POST",
    "url": "/groups/join/:id",
    "title": "GROUPS JOIN",
    "name": "GROUPS6",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>Public Group: specify groupId</h4> <h4>Private Group: add the token from invite response in the body </h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>field to allow user to join private group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dWVySWQiOiI1Y2I3NTM1NzlkNGIx\"\n}",
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
            "field": "groupId",
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
    "filename": "../../services/groups/src/controllers/group-join.js",
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
            "field": "GROUPS_NOT_FOUND",
            "description": "<p>400</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GROUPS_FORBIDEN_UNJOIN",
            "description": "<p>403</p>"
          }
        ]
      }
    },
    "filename": "../../services/groups/src/controllers/group-unjoin.js",
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
    "filename": "../../services/groups/src/controllers/group-permissions.js",
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
    "filename": "../../services/users/src/controllers/user-create.js",
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
    "filename": "../../services/users/src/controllers/user-delete.js",
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
    "filename": "../../services/users/src/controllers/user-read.js",
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
    "filename": "../../services/users/src/controllers/user-update.js",
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
    "filename": "../../services/users/src/controllers/user-avatars.js",
    "groupTitle": "USERS"
  }
] });
