build-prod:
	docker-compose up --build
build-dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
accounts:
	docker-compose run curb-accounts yarn test
contents:
	docker-compose run curb-contents yarn test
emailing:
	docker-compose run curb-emailing yarn test
groups:
	docker-compose run curb-groups yarn test
users:
	docker-compose run curb-users yarn test
