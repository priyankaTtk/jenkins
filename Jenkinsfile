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
                withSonarQubeEnv('SonarQube') {
                    bat 'sonar-scanner -Dsonar.projectKey=584f1d20484fc3c68f4a4da655b5466f9a753451 -Dsonar.sources=. -Dsonar.language=js'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                sh 'scp -r . user@$STAGING_SERVER:/var/www/app'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                sh 'curl -X GET http://staging.example.com/health'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                sh 'scp -r . user@$PROD_SERVER:/var/www/app'
            }
        }
    }
    post {
        always {
            emailext (
                subject: "Jenkins Pipeline Execution",
                body: "Pipeline execution complete. Check Jenkins for details.",
                to: "$EMAIL"
            )
        }
    }
}
