#!/bin/groovy
pipeline {
    agent any
tools {
    nodejs 'Node'
  }
  stages {
    stage('Build') {
      steps {
        
          echo ' Installing NPM'
          bat 'npm install'
        
      }
    }
    stage('Test') {
      steps {
        
          echo ' Runing Test'
          bat 'set CI=true && npm run test'
        
      }
            post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
        }
      

      }
    
    
    }
    
    
    }

  }


