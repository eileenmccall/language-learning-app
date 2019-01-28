FROM mongo

COPY init.json /init.json
CMD mongoimport --host database --db starter --collection articles --type json --file /init.json --jsonArray