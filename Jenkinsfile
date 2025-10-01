pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Analyze') {
            steps {
                echo 'Perform Linting\nPerform SAST to Discover Security Vulnerabilities, Techinal Debt, and Test Coverage'
                
                npm run lint
                
                def SONAR_SCANNER = tool 'SonarScanner';
                withSonarQubeEnv() {
                  sh "${SONAR_SCANNER}/bin/sonar-scanner"
                }
        }
        
        stage('Install') {
            steps {
                echo 'Installing and configuring dependencies'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Compile and Minify Source Code\nBuild Container Images and Push to Container Image Repository'
                
                npm run package
            }
        }
        
        stage('Push') {
            steps {
                echo 'Update remote image registry'
                
//                docker push -t nickbarak/myitem-api
            }
        }
    }
    
    post {
        failure {}
        
        success {}
        
        always {}
    }
}
