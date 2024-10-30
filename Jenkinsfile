pipeline {
    agent any

    environment {
        ENV_FILE = credentials('generated-key')
        DOCKER_IMAGE = "some-project"
        DOCKER_REGISTRY_CREDENTIALS = 'docker-credentials-id'  // Jenkins credentials ID for Docker registry
        KUBERNETES_NAMESPACE = "default"                       // Namespace in Kubernetes
        KUBERNETES_DEPLOYMENT_NAME = "your-deployment-name"    // Name of the deployment in Kubernetes
        PORT = 3001
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .'
                sh 'docker run -p ${PORT}:${PORT} -td ${DOCKER_IMAGE}'
            }
        }

//         stage('Docker Login') {
//             steps {
//                 echo 'Logging into Docker registry...'
//                 script {
//                     docker.withRegistry('', DOCKER_REGISTRY_CREDENTIALS) {
//                         echo 'Logged in successfully'
//                     }
//                 }
//             }
//         }
//
//         stage('Push Docker Image') {
//             steps {
//                 echo 'Pushing Docker image to registry...'
//                 script {
//                     docker.withRegistry('', DOCKER_REGISTRY_CREDENTIALS) {
//                         sh 'docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}'
//                     }
//                 }
//             }
//         }

//         stage('Deploy to Kubernetes') {
//             steps {
//                 echo 'Deploying application to Kubernetes...'
//                 sh '''
//                     kubectl set image deployment/${KUBERNETES_DEPLOYMENT_NAME} \
//                     ${KUBERNETES_DEPLOYMENT_NAME}=${DOCKER_IMAGE}:${BUILD_NUMBER} \
//                     --namespace=${KUBERNETES_NAMESPACE} --record
//                 '''
//             }
//         }
    }

    post {
        success {
            echo 'Build, push, and deployment to Kubernetes were successful!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
