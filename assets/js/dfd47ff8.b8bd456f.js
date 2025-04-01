"use strict";(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[604],{152:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/7-0741140eedb854c53758d297277ea1eb.png"},709:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2-f9f2848c8a117e95fb7e3c9b68462c6c.png"},2131:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/4-824e15da7498ac7140290f0996f75eac.png"},2298:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/5-cfc27379363600be91ce370e24d2b6f2.png"},2652:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/10-1cdf555d97956466a3856f4f9868e03c.png"},3567:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/8-3f755dcddba16265ef618f5c200b7082.png"},3959:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(8168),r=(t(6540),t(5680));const i={slug:"AzDevops_Selenium_Java",title:"Run Selenium Tests in AzureDevOps",author:"Srinivasulu Ullaganti",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},s=void 0,o={unversionedId:"Articles/2019-06-02-AzDevops_Selenium_Java",id:"Articles/2019-06-02-AzDevops_Selenium_Java",isDocsHomePage:!1,title:"Run Selenium Tests in AzureDevOps",description:"Run Selenium Tests in AzureDevOps",source:"@site/docs/Articles/2019-06-02-AzDevops_Selenium_Java.mdx",sourceDirName:"Articles",slug:"/Articles/AzDevops_Selenium_Java",permalink:"/srinivasulla.github.io/docs/Articles/AzDevops_Selenium_Java",version:"current",frontMatter:{slug:"AzDevops_Selenium_Java",title:"Run Selenium Tests in AzureDevOps",author:"Srinivasulu Ullaganti",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},sidebar:"tutorialSidebar",previous:{title:"Stream Test Results To PowerBI",permalink:"/srinivasulla.github.io/docs/Articles/PowerBI"},next:{title:"Automate SOAP APIs using Rest Assured",permalink:"/srinivasulla.github.io/docs/Articles/Soap_RestAssured"}},l=[{value:"Run Selenium Tests in AzureDevOps",id:"run-selenium-tests-in-azuredevops",children:[]}],u={toc:l},p="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(p,(0,a.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"run-selenium-tests-in-azuredevops"},"Run Selenium Tests in AzureDevOps"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(6621).A})),(0,r.yg)("p",null,"In This Article lets see how to run your Selenium Tests in AzureDevOps"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"What is Azure DevOps and Azure Pipelines?")),(0,r.yg)("p",null,"Google It, you will find out :)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Advantages for Test Automation :")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wide Range of OS ","[Linux, Windows or Mac]"," you can choose. List of available VMs can be seen here"),(0,r.yg)("li",{parentName:"ul"},"Easy Pipeline Configuration ","[Either start from Scratch using yaml or use GUI options]"),(0,r.yg)("li",{parentName:"ul"},"Wide Range of External Connectors"),(0,r.yg)("li",{parentName:"ul"},"Supports Docker and Kubernetes Image build and Push"),(0,r.yg)("li",{parentName:"ul"},"Free for OpenSource Projects")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"How to Run Selenium Tests?")),(0,r.yg)("p",null,"If you are using selenium I assume you might be using Maven as your Build Tool. As pipelines configuration and execution happens via command line we will use Maven build commands to run our tests."),(0,r.yg)("p",null,"Prerequisites:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Maven\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Testng.xml\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step1:"),"Create a free account at dev.azure.com"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step2:"),"Go to Pipelines and Click on New Pipeline"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(709).A})),(0,r.yg)("p",null,"Step3: Select the Source of your Code ","[In my case it is GitHub]"),(0,r.yg)("p",null,"if this is your first time, you can upload your code to Azure Repos ","[available just above the pipelines]"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(9084).A}),"\nStep4: Select your Repo"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(2131).A}),"\nStep5: You will see a lot of pipeline Configuration Options, As our goal is run framework using Maven build, Click on Show more."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(2298).A}),"\nNow Click on Maven"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(8545).A}),"\nStep6:"),(0,r.yg)("p",null,"It is time to Review our Pipeline, Some changes we need to do like choosing windows over ubuntu or mac over ubuntu/windows ","[depending on your requirement]"),(0,r.yg)("p",null,"you can choose your JDK version if using java 9 and above."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(152).A}),"\nList of available OS Agents can be found here"),(0,r.yg)("p",null,"Here is my Pipeline yaml, you can refer it and change as per your needs."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"#@Owner: Srinivasulu Ullaganti \n#type: Starter pipeline\n#Add steps that build, run tests, deploy, and more:\n#Full yaml config options:  https://aka.ms/yaml\n\n\ntrigger:\n    branches:\n      include:\n      - master \n      \n    paths:\n      exclude:\n      - additions.md\n      - ChangeLog.Txt\n      - README.md\njobs:\n  - job: 'TestRun_in_Windows' #Name of Job\n    pool:\n      vmImage: 'windows-latest' \n\n    steps:\n    - task: Maven@3\n      inputs:\n        mavenPomFile: 'pom.xml'\n        goals: 'verify sonar:sonar test'\n        options: '-DGRID_TYPE=\"NO_GRID\"'\n        publishJUnitResults: true\n        testResultsFiles: '**/surefire-reports/TEST-*.xml'\n        javaHomeOption: 'JDKVersion'\n        jdkVersionOption: '1.8'\n        mavenVersionOption: 'Default'\n        mavenAuthenticateFeed: false\n        effectivePomSkip: false\n        sonarQubeRunAnalysis: true\n        sqMavenPluginVersionChoice: 'pom'\n")),(0,r.yg)("p",null,"Lets Dive into above yaml:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"trigger")," : Specify your branch to be pulled and executed."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"exclude"),": List of file changes to be untracked after commit. ","[you can eliminate un necessary builds]"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Jobs"),": List of Jobs to Run one after other, ","[refer this to a jenkins job like]"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Pool"),": Azure Devops OS Pool"),(0,r.yg)("p",null,"Vm Image: 'Windows-Latest' or choose one from here"),(0,r.yg)("p",null,"goals: Your Maven Goal"),(0,r.yg)("p",null,"options: your Maven -D Options"),(0,r.yg)("p",null,"Make sure you have defined your testng.xmls in maven surefire plugin path like below"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-surefire-plugin</artifactId>\n         <version>2.20</version>\n             <configuration>\n                 <suiteXmlFiles>\n                    <suiteXmlFile>TEST_NG XML 1</suiteXmlFile>\n                    <suiteXmlFile>TEST_NG XML 2</suiteXmlFile>\n                  </suiteXmlFiles>\n                     <properties>\n                        <property>\n                            <name>usedefaultlisteners</name>\n                             <value>false</value>\n                        </property>\n                     </properties>\n               </configuration>\n</plugin>\n")),(0,r.yg)("p",null,"Now Click on Run and See your results"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(3567).A}),"\n",(0,r.yg)("img",{alt:"image",src:t(9766).A}),"\nAfter Couple of Runs you will get Test analytics of Your Pipeline like Below."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:t(2652).A}),"\n",(0,r.yg)("img",{alt:"image",src:t(4917).A}),"\n",(0,r.yg)("img",{alt:"image",src:t(7086).A}),"\n",(0,r.yg)("img",{alt:"image",src:t(6583).A}),"\nHappy Learning :)"))}g.isMDXComponent=!0},4917:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/11-2a8f0d2b1d03dd8c9f78122a3eb575ff.png"},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(t),m=r,y=g["".concat(l,".").concat(m)]||g[m]||c[m]||i;return t?a.createElement(y,s(s({ref:n},p),{},{components:t})):a.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6583:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/13-a8f4f5c9b7083e3869cc4cfef2d55c8c.png"},6621:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/1-9d54935cca1064bc71c1d101b56467ab.gif"},7086:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/12-79030038bf409225497aeb661547597a.png"},8545:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/6-2661e1ac51526898822e925ca9d208f6.png"},9084:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/3-34a2f96d459f199527a80cd577cca6e9.png"},9766:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/9-63d334ce621360a5835dec343c61a4b7.png"}}]);