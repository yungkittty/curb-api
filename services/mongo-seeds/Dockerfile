FROM mongo
COPY users.json /users.json
COPY accounts.json /accounts.json
CMD ls -1 *.json | sed 's/.json$//' | while read col; do mongoimport -d Curb -c $col < $col.json; done

