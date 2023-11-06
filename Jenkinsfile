#!/bin/groovy
pipeline {
    agent any
tools {
    nodejs 'nodejs'
  }
  stages {
    stage('Build') {
      steps {
        
          echo ' Installing NPM'
          sh 'npm install'
        
      }
    }
    stage('Test') {
      steps {
        
          echo ' Runing Test'
          sh 'set CI=true && npm run test'
        
      }
            post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
        }
      

      }
    
    
    }
    
    
    }

  }


