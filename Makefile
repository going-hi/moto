#!make
include .env.production

up:
	docker compose up -d moto-server moto-client
up-all:
	docker compose up -d
stop:
	docker compose down

login:
	docker login -u ${DOCKER_LOGIN} -p ${DOCKER_PASSWORD}
build-client:
	docker build --build-arg VITE_API_URL=${VITE_API_URL} --build-arg VITE_IMAGES_URL=${VITE_IMAGES_URL} -t ${DOCKER_LOGIN}/${DOCKER_CLIENT_NAME}:deploy -f ./client/Dockerfile ./client
build-server:
	docker build -t ${DOCKER_LOGIN}/${DOCKER_SERVER_NAME}:deploy -f ./server/Dockerfile ./server
push-client:
	docker push ${DOCKER_LOGIN}/${DOCKER_CLIENT_NAME}:deploy
push-server:
	docker push ${DOCKER_LOGIN}/${DOCKER_SERVER_NAME}:deploy
rerun:
	curl --header "X-Secret-Key: ${SSH_KEY}" ${SSH_URL}
deploy:
	make login && make build-client && make build-server && make push-client && make push-server && make rerun
