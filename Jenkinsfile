pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Code Analysis') {
            steps {
                bat 'echo Running code analysis...'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'echo Running security scan...'
            }
        }

        stage('Deploy to Staging') {
            steps {
                bat 'echo Deploying to staging...'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                bat 'echo Running integration tests on staging...'
            }
        }

        stage('Deploy to Production') {
            steps {
                bat 'echo Deploying to production...'
            }
        }
    }

    post {
        always {
            mail to: 'your-email@example.com',
                 subject: 'Jenkins Build Notification',
                 body: "The build has completed. Check Jenkins for details."
        }
    }
}
