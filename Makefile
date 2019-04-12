build:
	docker-compose build
up:
	docker-compose -f docker-compose.yml up
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