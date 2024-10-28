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
            }
        }
    }
}