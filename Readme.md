# How to create image
docker build --name account-base -f .\apis\account\Dockerfile .


# Instance of dockers

https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images

 docker run -name my_first_mdb_instance -i -t my_mongodb

 name instance create node_edu


# Docker tools

-- cerrar todas las instancias
docker stop $(docker ps -a -q)
