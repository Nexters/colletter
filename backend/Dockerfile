FROM gradle:5.2.1-jdk8-alpine AS build
USER root
WORKDIR /home/colletter
COPY ./ /home/colletter/
RUN ./gradlew build
RUN mv ./build/libs/*.jar /home/colletter/app.jar
FROM openjdk:8-jdk-alpine
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","./app.jar"]