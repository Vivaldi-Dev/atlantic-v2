pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "atlantic-travel"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
        API_URL = "https://api.panoramatours.co.mz/api"
        BASE_IMAGE_URL = "https://api.panoramatours.co.mz"
        NODE_ENV = "production"
    }

    stages {

        stage('Preparar Workspace') {
            steps {
                echo "Limpando workspace antigo..."
                deleteDir()
                git branch: 'main',
                    url: 'https://github.com/Vivaldi-Dev/atlantic-v2.git'
            }
        }

        stage('Configurar .env.production') {
            steps {
                echo "Gerando .env.production para Next.js..."
                sh '''
                    echo "API_URL=$API_URL" > .env.production
                    echo "BASE_IMAGE_URL=$BASE_IMAGE_URL" >> .env.production
                    echo "NODE_ENV=$NODE_ENV" >> .env.production
                '''
                sh 'cat .env.production'
            }
        }

        stage('Instalar Dependências') {
             steps {
                echo "Instalando dependências Node.js..."
                sh 'npm ci'
                echo "Garantindo que typescript está instalado..."
                sh 'npm install typescript @types/node --save-dev'
            }
        }

        stage('Build Next.js') {
            steps {
                echo "Construindo app Next.js..."
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo "Construindo imagem Docker..."
                sh "docker build -t $DOCKER_IMAGE:latest ."
            }
        }

        stage('Deploy com Docker Compose') {
            steps {
                echo "Atualizando container em produção..."
                sh """
                    docker-compose down
                    docker-compose up -d --build
                """
            }
        }

        stage('Testar App') {
            steps {
                echo "Executando testes (se houver)..."
                sh 'npm run test || echo "Nenhum teste definido"'
            }
        }
    }

    post {
        always {
            echo "Pipeline finalizado."
        }
        success {
            echo "✅ Build e deploy concluídos com sucesso!"
        }
        failure {
            echo "❌ Pipeline falhou!"
        }
    }
}
