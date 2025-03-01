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
    "url": "/texts/:postId/",
    "title": "CONTENT UPLOAD TEXT",
    "name": "CONTENTS1",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>text</p>"
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
    "type": "POST",
    "url": "/texts/:groupId/",
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
    "filename": "../../services/contents/src/controllers/_apidoc.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/events/exit/:contentId/",
    "title": "CONTENT EXIT EVENTS",
    "name": "CONTENTS10",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentId",
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
            "field": "content",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: \"{\\\"date\\\": \\\"Fri, 13 Sep 2019 20:22:04 GMT\\\", \\\"name\\\": \\\"toto\\\", \\\"participants\\\":[\\\"id\\\"]}\"\n}",
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
    "filename": "../../services/contents/src/controllers/events.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/images/:postId/",
    "title": "CONTENT UPLOAD IMAGE",
    "name": "CONTENTS2",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>urlPath</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: '/contents/uploads/groups/${groupId}/images/${postId}/${filename}'\n}",
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
    "url": "/images/:groupId/",
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
    "filename": "../../services/contents/src/controllers/_apidoc.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/texts/:postId/",
    "title": "CONTENT UPLOAD VIDEO",
    "name": "CONTENTS3",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>urlPath</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: '/contents/uploads/groups/${groupId}/videos/${postId}/${filename}'\n}",
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
    "url": "/texts/:groupId/",
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
    "filename": "../../services/contents/src/controllers/_apidoc.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/locations/:postId/",
    "title": "CONTENT UPLOAD LOCATIONS",
    "name": "CONTENTS4",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>location</p>"
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
    "type": "POST",
    "url": "/locations/:groupId/",
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
    "filename": "../../services/contents/src/controllers/_apidoc.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/avatars/${groups/users}/:id",
    "title": "AVATARS FOR GROUPS/USERS",
    "name": "CONTENTS5",
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
    "url": "/events/:postId/",
    "title": "CONTENT UPLOAD EVENTS",
    "name": "CONTENTS6",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>UTCSTRNG date.toUTCString() and eventName, data doit être un json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    data: \"{\\\"date\\\": \\\"Fri, 13 Sep 2019 20:22:04 GMT\\\", \\\"name\\\": \\\"toto\\\"}\",\n}",
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
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>UTCSTRNG date.toUTCString() and eventName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: \"{\\\"date\\\": \\\"Fri, 13 Sep 2019 20:22:04 GMT\\\", \\\"name\\\": \\\"toto\\\"}\"\n}",
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
    "filename": "../../services/contents/src/controllers/events.js",
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
    "filename": "../../services/contents/src/controllers/content/content-delete.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/polls/:postId/",
    "title": "CONTENT UPLOAD POLLS",
    "name": "CONTENTS7",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;question&quot;, [options]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    data: \"{\\\"question\\\":\\\"are you ready?\\\",\\\"options\\\":[\\\"yes\\\",\\\"no\\\",\\\"maybe\\\"]}\"\n}",
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
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>STRING</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: \"{\\\"question\\\":\\\"are you ready?\\\",\\\"options\\\":[\\\"yes\\\",\\\"no\\\",\\\"maybe\\\"]}\"\n}",
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
    "filename": "../../services/contents/src/controllers/polls.js",
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
    "filename": "../../services/contents/src/controllers/content/content-read.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/polls/:postId/:option",
    "title": "CONTENT VOTE POLLS",
    "name": "CONTENTS8",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>option: STRING</p>"
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
            "field": "id",
            "description": "<p>contentId</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>STRING</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: \"{\\\"question\\\":\\\"are you ready?\\\",\\\"options\\\":[\\\"co\\\",\\\"po\\\",\\\"poo\\\"],\\\"answers\\\":{\\\"co\\\":[\\\"5ddf88cf21dbf700298c81e3\\\"],\\\"po\\\":[],\\\"poo\\\":[]}}\"\n}",
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
    "filename": "../../services/contents/src/controllers/polls.js",
    "groupTitle": "CONTENTS"
  },
  {
    "type": "POST",
    "url": "/events/join/:contentId/",
    "title": "CONTENT JOIN EVENTS",
    "name": "CONTENTS9",
    "group": "CONTENTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentId",
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
            "field": "content",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: 'uuid',\n    data: \"{\\\"date\\\": \\\"Fri, 13 Sep 2019 20:22:04 GMT\\\", \\\"name\\\": \\\"toto\\\", \\\"participants\\\":[\\\"id\\\"]}\"\n}",
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
    "filename": "../../services/contents/src/controllers/events.js",
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
    "url": "/emailing/feedback",
    "title": "EMAILING FEEDBACK USER",
    "name": "EMAILING3",
    "group": "EMAILING",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>body</p>"
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
    "filename": "../../services/emailing/src/controllers/feedback.js",
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
            "field": "name",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>mediaTypes //</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "theme",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n \"name\": \"a4za4\",\n \"status\": \"private\",\n\"mediaTypes\": [\"video\", \"text\", \"image\", \"location\"],\n\"theme\": \"red\",\n\"category\": \"Music\",\n\"description\": \"c'est une description\"\n}",
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
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>[groupIds] QueryParam</p>"
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
    "url": "/posts/:groupId/:postId",
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
            "field": "postId",
            "description": "<p>//</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    type: 'location',\n}",
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
    "url": "/posts/:groupId/:postId",
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
            "field": "postId",
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
            "defaultValue": "5",
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
            "description": "<p>queryParam NOT USED ATM</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
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
            "field": "Object",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n    \"count\": 3,\n    \"page\": 1,\n   \"data\": [\n      \"5d2c710b2b91f5004c54f8da\",\n      \"5d2c76ae24839b009e791e6e\",\n      \"5d2c6c4c97ff050029efc582\",\n      \"5d2c5f4844f800053656838d\",\n      \"5d2c45494cb40d03d44ef286\"\n  ]\n}",
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
            "defaultValue": "5",
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
            "field": "Object",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": 10,\n    \"page\": 1,\n    \"section\": \"global\",\n    \"data\": [\n        \"5d2c710b2b91f5004c54f8da\",\n        \"5d2c76ae24839b009e791e6e\",\n        \"5d2c6c4c97ff050029efc582\",\n        \"5d2c5f4844f800053656838d\",\n        \"5d2c45494cb40d03d44ef286\"\n    ]\n}",
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
            "defaultValue": "5",
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
            "field": "Object",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": 5,\n    \"page\": 1,\n    \"section\": \"random\",\n    \"data\": [\n        \"5d2c710b2b91f5004c54f8da\",\n        \"5d2c76ae24839b009e791e6e\",\n        \"5d2c6c4c97ff050029efc582\",\n        \"5d2c5f4844f800053656838d\",\n        \"5d2c45494cb40d03d44ef286\"\n    ]\n}",
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
    "url": "/groups/list-user/:groupId",
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
          },
          {
            "group": "Parameter",
            "type": "Cookie",
            "optional": false,
            "field": "userId",
            "description": ""
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
    "type": "GET",
    "url": "/groups/list",
    "title": "GROUPS LIST FROM GROUP IDS",
    "name": "GROUPS20",
    "group": "GROUPS",
    "version": "0.1.0",
    "description": "<h4>List for multiple id </h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>[groupIds] queryParam</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{Query Param} Request-Example:",
          "content": "?groupIds=[\"5d406ddfcc0ed201c229e0cd\", \"5d41c6fa5c29e205e1e33af7\"]",
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
            "field": "Object",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
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
    "filename": "../../services/groups/src/controllers/group-list-from-id.js",
    "groupTitle": "GROUPS"
  },
  {
    "type": "GET",
    "url": "/groups/:id",
    "title": "GROUPS READ BY ID",
    "name": "GROUPS3",
    "group": "GROUPS",
    "version": "0.2.0",
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
          "title": "Disconnected:",
          "content": "{\n  \"id\": \"5d7a64f2b25c260080f19057\",\n  \"name\": \" nbbn\",\n  \"theme\": \"red\",\n  \"status\": \"private\",\n  \"description\": \"c'est une description\",\n  \"category\": \"Music\"\n}",
          "type": "json"
        },
        {
          "title": "Log-in:",
          "content": "{\n  \"id\": \"5d7a64f2b25c260080f19057\",\n  \"posts\": [],\n  \"mediaTypes\": [\n      \"video\",\n      \"text\",\n      \"image\",\n      \"location\"\n  ],\n  \"quartile\": 0,\n  \"creatorId\": \"5d499299e1fa4b002a207a06\",\n  \"name\": \" nbbn\",\n  \"status\": \"private\",\n  \"theme\": \"red\",\n  \"description\": \"c'est une description\",\n  \"category\": \"Music\",\n  \"dateCreation\": \"2019-09-12T15:32:02.660Z\",\n  \"users\": 43,\n  \"createdAt\": \"2019-09-12T15:32:02.667Z\",\n   \"updatedAt\": \"2019-09-12T15:32:02.688Z\"\n}",
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
    "type": "GET",
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
          "title": "Disconnected:",
          "content": "{\n  \"id\": \"5d7a64f2b25c260080f19057\",\n  \"name\": \" nbbn\",\n  \"theme\": \"red\",\n  \"status\": \"private\",\n  \"description\": \"c'est une description\",\n  \"category\": \"Music\"\n}",
          "type": "json"
        },
        {
          "title": "Log-in:",
          "content": "{\n  \"id\": \"5d7a64f2b25c260080f19057\",\n  \"posts\": [],\n  \"mediaTypes\": [\n      \"video\",\n      \"text\",\n      \"image\",\n      \"location\"\n  ],\n  \"quartile\": 0,\n  \"creatorId\": \"5d499299e1fa4b002a207a06\",\n  \"name\": \" nbbn\",\n  \"status\": \"private\",\n  \"theme\": \"red\",\n  \"description\": \"c'est une description\",\n  \"category\": \"Music\",\n  \"dateCreation\": \"2019-09-12T15:32:02.660Z\",\n  \"users\": [\n      {\n          \"active\": false,\n          \"activity\": 0,\n          \"userId\": \"5d499299e1fa4b002a207a06\",\n          \"updatedAt\": \"2019-09-12T15:32:02.688Z\",\n          \"createdAt\": \"2019-09-12T15:32:02.688Z\",\n          \"id\": \"5d7a64f2b25c260080f19058\"\n      }\n  ],\n  \"createdAt\": \"2019-09-12T15:32:02.667Z\",\n   \"updatedAt\": \"2019-09-12T15:32:02.688Z\"\n}",
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
    "filename": "../../services/groups/src/controllers/_apidoc.js",
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
    "url": "/contents/posts/:groupId",
    "title": "POST CREATE",
    "name": "POST1",
    "group": "POSTS",
    "version": "0.2.0",
    "description": "<h4>To create a posts :  <li>    call /contents/posts/:groupId  </li>  <li>    Then call /contents/${mediaType}/:postId, to upload medias for the corresponding post  </li> </h4><br>",
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
            "type": "Object",
            "optional": false,
            "field": "POST",
            "description": "<p>ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: \"1\" (postId)\n}",
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
    "filename": "../../services/contents/src/controllers/post/post-create.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "DELETE",
    "url": "/contents/posts/:postId",
    "title": "POST DELETE",
    "name": "POST2",
    "group": "POSTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../../services/contents/src/controllers/post/post-delete.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "GET",
    "url": "/contents/posts/:postId",
    "title": "POST READ",
    "name": "POST3",
    "group": "POSTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "field": "OK",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": \"5d7f8af330243d00300c79ec\",\n    \"creatorId\": \"5d499299e1fa4b002a207a06\",\n    \"groupId\": \"5d7f8aed4244b60030c9a8e0\",\n    \"pinned\": false,\n    \"reaction\": {\n        \"number\": 0,\n        \"ids\": []\n    },\n    \"createdAt\": \"2019-09-16T13:15:31.182Z\",\n    \"updatedAt\": \"2019-09-16T13:15:55.866Z\",\n    \"medias\": [\n        {\n            \"id\": \"5d7f8af930243d00300c79ed\",\n            \"postId\": \"5d7f8af330243d00300c79ec\",\n            \"type\": \"text\",\n            \"data\": \"aze\",\n            \"createdAt\": \"2019-09-16T13:15:37.303Z\",\n            \"updatedAt\": \"2019-09-16T13:15:37.303Z\"\n        },\n        {\n            \"id\": \"5d7f8afe30243d00300c79ee\",\n            \"postId\": \"5d7f8af330243d00300c79ec\",\n            \"type\": \"location\",\n            \"data\": \"l:10;l:20\",\n            \"createdAt\": \"2019-09-16T13:15:42.159Z\",\n            \"updatedAt\": \"2019-09-16T13:15:42.159Z\"\n        },\n        {\n            \"id\": \"5d7f8b0130243d00300c79ef\",\n            \"postId\": \"5d7f8af330243d00300c79ec\",\n            \"type\": \"text\",\n            \"data\": \"aze\",\n            \"createdAt\": \"2019-09-16T13:15:45.860Z\",\n            \"updatedAt\": \"2019-09-16T13:15:45.860Z\"\n        },\n        {\n            \"id\": \"5d7f8b0530243d00300c79f0\",\n            \"postId\": \"5d7f8af330243d00300c79ec\",\n            \"type\": \"image\",\n            \"data\": \"/contents/uploads/groups/5d7f8aed4244b60030c/.../3e75e7d.jpeg\",\n            \"createdAt\": \"2019-09-16T13:15:49.726Z\",\n            \"updatedAt\": \"2019-09-16T13:15:49.726Z\"\n        },\n        {\n            \"id\": \"5d7f8b0b30243d00300c79f1\",\n            \"postId\": \"5d7f8af330243d00300c79ec\",\n            \"type\": \"video\",\n            \"data\": \"/contents/uploads/groups/5d7f8aed4244b60030/.../d2.mp4\",\n            \"createdAt\": \"2019-09-16T13:15:55.861Z\",\n            \"updatedAt\": \"2019-09-16T13:15:55.861Z\"\n        }\n    ]\n}",
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
    "filename": "../../services/contents/src/controllers/post/post-read.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "PATCH",
    "url": "/contents/posts/",
    "title": "POST UPDATE",
    "name": "POST4",
    "group": "POSTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "field": "POST",
            "description": "<p>ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    id: \"1\"\n}",
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
    "filename": "../../services/contents/src/controllers/post/post-update.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "POST",
    "url": "/contents/posts/pin/:postId",
    "title": "POST PIN",
    "name": "POST5",
    "group": "POSTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
            "field": "UNDEFINED",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "../../services/contents/src/controllers/post/post-pin.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "POST",
    "url": "/contents/posts/reaction/:postId",
    "title": "POST REACTION",
    "name": "POSTS6",
    "group": "POSTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
          "content": "{\n    reaction: [Uuid]\n}",
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
    "filename": "../../services/contents/src/controllers/post/post-reaction.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "GET",
    "url": "/contents/posts/list/:groupId",
    "title": "POSTS LIST",
    "name": "POSTS7",
    "group": "POSTS",
    "version": "0.2.0",
    "description": "<h4>List for posts </h4><br>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "groupId",
            "description": "<p>queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "defaultValue": "5",
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
            "optional": true,
            "field": "String",
            "description": "<p>[mediaType=undefined] queryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "CookieToken",
            "defaultValue": "undefined",
            "description": "<p>queryParam in case of a private group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pinned",
            "defaultValue": "false",
            "description": "<p>queryParam WILL only return pinned or non-pinned post</p>"
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
            "field": "Object",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": 100,\n    \"page\": 1,\n    \"data\": [\n        {\n            \"id\": \"5d7f8af330243d00300c79ec\",\n            \"creatorId\": \"5d499299e1fa4b002a207a06\",\n            \"groupId\": \"5d7f8aed4244b60030c9a8e0\",\n            \"pinned\": false,\n            \"reaction\": {\n                \"number\": 0,\n                \"ids\": []\n            },\n            \"createdAt\": \"2019-09-16T13:15:31.182Z\",\n            \"updatedAt\": \"2019-09-16T13:15:55.866Z\",\n            \"medias\": [\n                {\n                    \"id\": \"5d7f8af930243d00300c79ed\",\n                    \"postId\": \"5d7f8af330243d00300c79ec\",\n                    \"type\": \"text\",\n                    \"data\": \"aze\",\n                    \"createdAt\": \"2019-09-16T13:15:37.303Z\",\n                    \"updatedAt\": \"2019-09-16T13:15:37.303Z\"\n                },\n                {\n                    \"id\": \"5d7f8afe30243d00300c79ee\",\n                    \"postId\": \"5d7f8af330243d00300c79ec\",\n                    \"type\": \"location\",\n                    \"data\": \"l:10;l:20\",\n                    \"createdAt\": \"2019-09-16T13:15:42.159Z\",\n                    \"updatedAt\": \"2019-09-16T13:15:42.159Z\"\n                },\n                {\n                    \"id\": \"5d7f8b0130243d00300c79ef\",\n                    \"postId\": \"5d7f8af330243d00300c79ec\",\n                    \"type\": \"text\",\n                    \"data\": \"aze\",\n                    \"createdAt\": \"2019-09-16T13:15:45.860Z\",\n                    \"updatedAt\": \"2019-09-16T13:15:45.860Z\"\n                },\n                {\n                    \"id\": \"5d7f8b0530243d00300c79f0\",\n                    \"postId\": \"5d7f8af330243d00300c79ec\",\n                    \"type\": \"image\",\n                    \"data\": \"/contents/uploads/groups/5d7f8ae/.../f6-a600-ca5bf3e75e7d.jpeg\",\n                    \"createdAt\": \"2019-09-16T13:15:49.726Z\",\n                    \"updatedAt\": \"2019-09-16T13:15:49.726Z\"\n                },\n                {\n                    \"id\": \"5d7f8b0b30243d00300c79f1\",\n                    \"postId\": \"5d7f8af330243d00300c79ec\",\n                    \"type\": \"video\",\n                    \"data\": \"/contents/uploads/groups/5d7f8ae/.../51-a7e7-ff3a51e324d2.mp4\",\n                    \"createdAt\": \"2019-09-16T13:15:55.861Z\",\n                    \"updatedAt\": \"2019-09-16T13:15:55.861Z\"\n                }\n            ]\n        },\n        {\n            \"id\": \"5d7fdfd5e5eb76010d978007\",\n            \"creatorId\": \"5d499299e1fa4b002a207a06\",\n            \"groupId\": \"5d7f8aed4244b60030c9a8e0\",\n            \"pinned\": false,\n            \"reaction\": {\n                \"number\": 0,\n                \"ids\": []\n            },\n            \"createdAt\": \"2019-09-16T19:17:41.986Z\",\n            \"updatedAt\": \"2019-09-16T19:17:54.722Z\",\n            \"medias\": [\n                {\n                    \"id\": \"5d7fdfdee5eb76010d978008\",\n                    \"postId\": \"5d7fdfd5e5eb76010d978007\",\n                    \"type\": \"text\",\n                    \"data\": \"aze\",\n                    \"createdAt\": \"2019-09-16T19:17:50.579Z\",\n                    \"updatedAt\": \"2019-09-16T19:17:50.579Z\"\n                },\n                {\n                    \"id\": \"5d7fdfe2e5eb76010d978009\",\n                    \"postId\": \"5d7fdfd5e5eb76010d978007\",\n                    \"type\": \"location\",\n                    \"data\": \"l:10;l:20\",\n                    \"createdAt\": \"2019-09-16T19:17:54.711Z\",\n                    \"updatedAt\": \"2019-09-16T19:17:54.711Z\"\n                }\n            ]\n        }\n    ]\n}",
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
    "filename": "../../services/contents/src/controllers/post/post-list.js",
    "groupTitle": "POSTS"
  },
  {
    "type": "POST",
    "url": "/contents/posts/report/:postId",
    "title": "POST REPORT",
    "name": "POSTS8",
    "group": "POSTS",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
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
          "content": "{\n    report: [Uuid],\n    deleted: [Boolean]\n}",
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
    "filename": "../../services/contents/src/controllers/post/post-report.js",
    "groupTitle": "POSTS"
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
    "url": "/users/:id",
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
  },
  {
    "type": "POST",
    "url": "/users/",
    "title": "USER LISTS",
    "name": "USERS6",
    "group": "USERS",
    "version": "0.1.0",
    "description": "<h4>List of users</h4><br>",
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
    "filename": "../../services/users/src/controllers/user-list.js",
    "groupTitle": "USERS"
  }
] });
