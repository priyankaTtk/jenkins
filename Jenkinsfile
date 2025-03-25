pipeline {
    agent any
    environment {
        STAGING_SERVER = 'staging.example.com'
        PROD_SERVER = 'prod.example.com'
        EMAIL = 'priyanka4800.be23@chitkara.edu.in'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                echo 'Priyanka Jenkisfile'
                sh 'npm install'
                
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test || exit 1'
            }
        }
         stage('Code Analysis') {
            steps {
                echo 'Performing code analysis...'
                sh 'npm run lint || exit 1' 
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Running SonarQube Security Scan...'
                
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                echo 'Netlify is one option for deploy'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                echo 'Cypress for the npm testing'
                }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                echo 'AWS'
                
            }
        }
    }
    post {
        always {
            mail (
                subject: "Jenkins Pipeline Execution",
                body: "Pipeline execution complete. Check Jenkins for details...",
                to: "$EMAIL"
            )
        }
    }
}
