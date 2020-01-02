# Angular Webapp

## RUN THE FOLLOWING STEPS >>> AFTER ENSURING API GATEWAY is Succesfully Running  

1. BUILD: docker image build -t mooneshkachroo/webapp:0.0.1-RELEASE .
2. RUN: docker run --network locationtracker -p 80:80 --env SPRING_PROFILES_ACTIVE=localhost mooneshkachroo/webapp:0.0.1-RELEASE 

## REMEMBER : The current checked in code is meant to be run in docker BU to run locally following changes are requiered:
1. nginx.conf.js => Not used in local so can be ignored
2. app.module.ts => url: "ws://" + window.location.hostname + ":" + "8080" + "/updates"
3. vehicle.service.ts => this.http.get("http://" + window.location.hostname + ":" + "8080" + "/history/" + centerVehicle.name);
4. app.module.ts => in StompConfig => debug=true => to see messages coming in