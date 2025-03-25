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
                bat 'npm install'
                echo 'Build completed successfully.'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Executing unit tests using Jest/Mocha...'
                bat 'npm test'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Running static code analysis using ESLint...'
                bat 'npm run lint'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Performing security scan using SonarQube...'
                // Add actual SonarQube analysis commands here if needed
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging Server: $STAGING_SERVER'
                bat 'npx netlify-cli deploy --site your-staging-site-id --prod'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running end-to-end tests using Cypress on Staging...'
                bat 'npx cypress run'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production Server: $PROD_SERVER'
                bat 'npx netlify-cli deploy --site your-production-site-id --prod'
            }
        }
    }

    post {
        always {
            echo 'Sending email notification to $EMAIL'
            mail(
                subject: "Jenkins Pipeline Execution",
                body: "Pipeline execution complete. Check Jenkins for details...",
                to: "$EMAIL"
            )
        }
    }
}
