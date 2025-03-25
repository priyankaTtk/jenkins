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
                echo 'Starting the build process...'
                echo 'Using Node.js and npm for dependency management.'
                sh 'npm install'
                echo 'Build completed successfully.'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Executing unit tests using Jest/Mocha...'
                sh 'npm test || exit 1'
                echo 'Unit testing phase completed.'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Running static code analysis using ESLint... the file is created inside myproject to test the code'
                sh 'npm run lint || exit 1' 
                echo 'Code analysis completed.'
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Performing security scan using SonarQube...'
                echo 'Ensure SonarQube is properly configured and running.'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging Server: $STAGING_SERVER'
                echo 'Netlify is being used as the deployment service.'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running end-to-end tests using Cypress on Staging...'
                echo 'Cypress is a JavaScript testing framework for UI automation.'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production Server: $PROD_SERVER'
                echo 'AWS is the chosen cloud provider for production deployment.'
            }
        }
    }
    post {
        always {
            echo 'Sending email notification to $EMAIL'
            echo 'Using SMTP for the email notification port 465'
            mail (
                subject: "Jenkins Pipeline Execution",
                body: "Pipeline execution complete. Check Jenkins for details...",
                to: "$EMAIL"
            )
        }
    }
}
