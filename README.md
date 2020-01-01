# Location Tracker - Angular Web app

docker image build -t guptavinodkumar/webapp:0.0.1-RELEASE .

docker run --network locationtracker -p 80:80 --env SPRING_PROFILES_ACTIVE=local-microservice guptavinodkumar/webapp:0.0.1-RELEASE

