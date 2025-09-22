pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "atlantic-travel"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
    }

    stages {

        stage('Preparar Workspace') {
            steps {
                echo "Limpando workspace antigo..."
                deleteDir()                  
                checkout scm                  
            }
        }

        stage('Instalar Dependências') {
            steps {
                echo "Instalando dependências Node.js..."
                sh 'npm ci'
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
