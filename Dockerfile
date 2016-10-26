FROM mongo

ADD . /files
WORKDIR /files
RUN mkdir -p /data/db && mongod --fork --logpath=/tmp/mongodb.log && sleep 20 && \
mongoimport  --db testdb --collection testcoll  --type csv --headerline --file ./crime_incident_reports.datadump-2.csv  #&& mongod --shutdown