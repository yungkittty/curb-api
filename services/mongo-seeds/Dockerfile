FROM mongo
COPY users.json /users.json
CMD mongoimport --host db --db Curb --collection users --type json --file /users.json --jsonArray 2> /dev/null
