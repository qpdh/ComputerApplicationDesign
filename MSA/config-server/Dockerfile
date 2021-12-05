FROM gradle:6.2.2-jdk11 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

FROM openjdk:11-jre-slim

EXPOSE 8080

RUN mkdir /app

COPY --from=build /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar

RUN apt-get update
RUN apt-get install curl -y

ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-Djava.security.egd=file:/dev/./urandom", "-jar","/app/spring-boot-application.jar"]