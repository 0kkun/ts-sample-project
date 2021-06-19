up:
		docker-compose up -d
stop:
		docker-compose stop
work:
		docker-compose exec app bash
# tsファイルをコンパイル
tsc:
		docker-compose run --rm node npm run build