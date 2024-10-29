pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo 'Building...'
                sh 'pnpm install'
                sh 'pnpm build'
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying..."
                sh "pm2 start dist/main.js --name some-project"
                sh "pm2 status"
            }
        }
    }
}