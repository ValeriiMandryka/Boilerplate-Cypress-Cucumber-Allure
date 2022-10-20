# Boilerplate-Playwright-PlaywrightReport-AllureReport
Template repository for project based on Cypress framefork with configurated GitHub actions and Allure report. Can be used for auto testing on Chrome/Firefox/Efge/Electron browsers with Allure Report. Includes Code Generator

##  Notice! To run tests on different browsers, browsers should be installed loccaly 

##  Envoirment:
   1. [Node.js](https://nodejs.org/uk/)
   2. [VSC](https://code.visualstudio.com/download)
   
##  Plugins:
   1. [cypress-xpath](https://github.com/cypress-io/cypress-xpath)
   2. [cypress-real-event](https://github.com/dmtrKovalenko/cypress-real-events)

## Steps to install project

## 1. Run command in VSC:

```
git clone https://github.com/ValeriiMandryka/Boilerplate-Cypress-Cucumber-AllureReport.git

```
## 2. Into root of Project run commands:
```
npm install

```
## 3. Run tests commands

   3.1 run tests in headless mode
       
        npm run tests:Headless  
   3.2 run tests in headed mode    
   
        npm run tests:Headed   
   3.3 opens cypress UI    
   
        npm run open:Cypress 
   3.4 generates Allure report
   
       npm run generate:AllureReport
   3.5 - open Allure report
       
       npm run open:AllureReport  
   3.6 - clean Allure results
   
       npm run clean:AllureResults 
   3.7 - runs tests in Chrome in headless mode
       
       npm run tests-on-Chrome:Headless 
   3.8 - runs tests in Firefox in headless mode
   
       npm run tests-on-Firefox:Headless 
   3.9 - runs tests in Edje in headless mode 
   
       npm run tests-on-Edge:Headless 
   3.10 -  runs tests in Electron in headless mode
   
       npm run tests-on-Electron:Headless 
   3.11 - runs tests in Chrome in headed mode
   
       npm run tests-on-Chrome:Headed 
   3.12 - runs tests in Firfox in headed mode
   
       npm run tests-on-Firefox:Headed 
   3.13 - runs tests in Edje in headed mode
   
       npm run tests-on-Edge:Headed  
   3.14 - runs tests in Electron in headed mode
       
       npm run tests-on-Electron:Headed 
   3.15 - runs tests on website: "https://example.cypress.io/todo", just for example of command were you can set your own web site adress 
   
    cypress run --config baseUrl=https://example.cypress.io/todo --headed
   3.16 - runs tests on website: "https://google.com" , just for example of command were you can set your own web site adress(in Packaje.json file)
   
     npm run tests:Stage 

## 4. Allure report:
   4.1 To generate Allure report arun follow command after the test that you chose for run
   ```
   npm run generate:AllureReport

   ```
   4.2 To open Allure report, run command:
    
   ```
   npm run open:AllureReport

   ```
   

  
