FROM gradle:4.7.0-jdk8-alpine AS build
COPY ./ ./
RUN gradle build
RUN mv ./build/libs/*.jar ./app.jar
FROM openjdk:8-jdk-alpine
USER root
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]