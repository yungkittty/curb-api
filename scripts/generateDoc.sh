servicesDirectories='../services'
controllersDirectories='src/controllers'
destDocumentationDirectoryPath='../api-documentation/'

apidoc \
-i "$servicesDirectories/accounts/$controllersDirectories/"  \
-i "$servicesDirectories/users/$controllersDirectories/"  \
-i "$servicesDirectories/groups/$controllersDirectories/"  \
-i "$servicesDirectories/contents/src/medias/" \
-i "$servicesDirectories/emailing/$controllersDirectories/"  \
-o $destDocumentationDirectoryPath \
-f .js
