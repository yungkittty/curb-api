servicesDirectories='../services'
controllersDirectories='src/controllers'
destDocumentationDirectoryPath='../api-documentation/'

apidoc \
-i "$servicesDirectories/accounts/$controllersDirectories/"  \
-i "$servicesDirectories/users/$controllersDirectories/"  \
-i "$servicesDirectories/groups/$controllersDirectories/"  \
-i "$servicesDirectories/contents/$controllersDirectories" \
-i "$servicesDirectories/emailing/$controllersDirectories/"  \
-o $destDocumentationDirectoryPath \
-f .js
