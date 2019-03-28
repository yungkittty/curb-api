#controllersDirectories='../services/services/accounts/'

apidoc \
-i ../services/accounts/src/controllers/  \
-i ../services/users/src/controllers/ \
-i ../services/groups/src/controllers/ \
-i ../services/contents/src/medias/ \
-i ../services/emailing/src/controllers/ \
-o ../api-documentations/ \
-f .js
