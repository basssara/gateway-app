pipeline {
    agent any

    stages {
        stage("Setup") {
            steps {
                echo 'Checking for pnpm...'
                sh '''
                    if ! command -v pnpm &> /dev/null; then
                        echo "pnpm not found, installing..."
                        npm install -g pnpm
                    else
                        echo "pnpm found"
                    fi
                '''
            }
        }

        stage("Build") {
            steps {
                echo 'Building...'
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
