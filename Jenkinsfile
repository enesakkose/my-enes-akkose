pipeline {
    agent any
    
    environment {
        APP_NAME = 'enesakkose-web'
        DOCKER_IMAGE = 'enesakkose-website'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    docker stop ${APP_NAME} || true
                    docker rm ${APP_NAME} || true
                    docker run -d \
                        --name ${APP_NAME} \
                        --restart unless-stopped \
                        -p 3001:3000 \
                        ${DOCKER_IMAGE}:${BUILD_NUMBER}
                '''
            }
        }
        
        stage('Health Check') {
            steps {
                sh 'sleep 5'
                sh 'curl -f http://localhost:3001 || exit 1'
            }
        }
    }
    
    post {
        success {
            echo "✅ Build #${BUILD_NUMBER} başarılı!"
        }
        failure {
            echo "❌ Build #${BUILD_NUMBER} başarısız!"
        }
    }
}
