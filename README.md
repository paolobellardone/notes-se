# notes-se

## A Simple CRUD Notes application written in Java and using Helidon SE framework

This is a simple note-taking application written in Java using Helidon SE as backend framework and OracleJet as UI framework.

It has to be considered no more than a demo or an exercise to demonstrate Helidon capabilities such as REST APIs development, configuration, database persistence and so on.

![Screenshot](/docs/images/screenshot.png)

## Pre-requisites

1. Java JDK 21 or later - GraalVM is a recommended option :-)
2. Maven
3. Oracle Database (Cloud or on-premises)

## Build

1. Download or clone the repository to your local enviroment

   ```bash
   git clone https://github.com/paolobellardone/notes-se.git
   ```

2. Build the maven project

   ```bash
   mvn clean package [-DskipTests]
   ```

3. Prepare the database

   ```bash
   java -jar target/notes-se.jar --init|-i
   ```

## Run

To run the built application use the following command:

> java -jar target/notes-se.jar

The application UI is available at <http://localhost:8081>

The REST API endpoint is <http://localhost:8081/notes>

You can configure the listening port and the data source by modifing the src/main/resources/application.yaml file.

To override the database connection parameters you can define the following environment properties:

   > db_connection_url=[jdbc:oracle:thin:@//host_name:port/service_name]  
   > db_connection_username=[username]  
   > db_connection_password=[password]  

The database connection parameters can also be defined as properties on the command line:

   > -Ddb.connection.url=[jdbc:oracle:thin:@//host_name:port/service_name]  
   > -Ddb.connection.username=[username]  
   > -Ddb.connection.password=[password]  

Please see Helidon documentation at <https://helidon.io> for further details.

## GraalVM Native Support

The generation of native binaries requires an installation of GraalVM 20.1.0+. For more
information about the steps necessary to use GraalVM with Helidon
see <https://helidon.io/docs/v4/se/guides/graalnative>.

You can build a native binary using Maven as follows:

```bash
mvn -Pnative-image install -DskipTests
```

The generation of the executable binary may take a few minutes to complete depending on
your hardware and operating system. When completed, the executable file will be available
under the `target` directory and be named after the artifact ID you have chosen during the
project generation phase.

## License

MIT License

Copyright (c) 2022, 2024 PaoloB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
