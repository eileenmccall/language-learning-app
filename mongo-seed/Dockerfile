FROM mongo

COPY articles.json /articles.json
COPY users.json /users.json
CMD mongoimport --host database --db starter --collection articles --type json --file /articles.json --jsonArray && mongoimport --host database --db starter --collection users --type json --file /users.json --jsonArray
