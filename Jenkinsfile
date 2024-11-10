pipeline {
    agent any

    stages {

        stage ('Build Docker Image') {
            steps {
                script {
                    dockerapp = docker.build("iankts/simple-blog:${env.BUILD_ID}", "-f ./Dockerfile .")
                }
            }
        }

    }
}