pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo 'building the app'
                nodejs('node-19.4.0') {
                    sh 'npm install'
                }
            }
        }
        stage("test") {
            steps {
                echo 'testing the app'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying the app'
            }
        }
    }
}