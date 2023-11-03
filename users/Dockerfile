FROM maven:3.8.5-openjdk-17 as build
WORKDIR /app
COPY pom.xml /app/
COPY src ./src
RUN mvn clean package -DskipTests


FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar ./predictiStock_server.jar
EXPOSE 8089
ENTRYPOINT ["java", "-jar", "predictiStock_server.jar"]