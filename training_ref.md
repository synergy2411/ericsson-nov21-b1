# Latest JavaScript / Next-Gen JavaScript 
- ES2015 / ES6+ features/Specification
- ECMA Community
- Arrow Function
- Destructuring
- Rest/Spread Operator
- Template Literals
- Block Scope
- Classes
- Module
- Decorators etc

# What is Angular?
- Sponsured by Google Team
- Used to build Web-apps
- Superheroic Framework
    : Create Single Page Apps - browser will not re-load/ refresh
    : 2 way data binding (Sync of data)
    : Reusable template / UI
    : Shadow DOM - Smaller part of DOM; Encapsulation
    : custom elements (<product-detail>, <new-employee>, <app-users>)
    : component based app
    : XHR (XMLHttpRequest) Call
    : Performant Apps - AoT (Ahead of Time) Compilation
- Separate the concerns (Model-View-Controller) at client side


jQuery - Library : to perform specific task
- DOM (Document Object Model) Manipulation
- Ajax Calls
- Animation


# Node installer
- Node Package Manager (npm)
- Node Runtime Environment (Server-side Scripting)
- Node Native Modules 


# JavaScript Types -
1. Primitive Types : String, Number, Date, Boolean
2. Reference Types : Objects, Arrays, Functions

let arr = [1,2,3]
arr.push(4);            // impure change
arr = [1,2,3,4];        // pure change - Pure Pipe works

let user = {name : "Foo"}
user = {name : "Bar}        // Pure Change
user.name = "Bam"           // Impure Change

# TypeScript Types-
1. Primitive Types : String, Number, Date, Boolean
2. Reference Types : Objects, Arrays, Functions
3. any, void, null, undefined, unknown, custom types etc


# Transpile the TypeScript into JavaScript

TypeScript -> Transpile -> JavaScript -> Browser/Node

> npm install typescript -g







# Decorators/Annotation : PRefixed with '@'; Functions with Some meta information
- Class : @Component(), @Pipe(), @Injectable() etc
- Functions : @HostListener()
- Parameters : @Inject(), @Optional()
- Properties : @Input(), @Output()

# Angular Building Blocks-
- Component : to create the UI (@Component({}))
- Directive : special meaning on template (@Directive({}))
- Pipes : Format the Data on UI (@Pipe({}))
- Services : contains business logic at client side (@Injectable({}))
- Modules : Container for inter-related code (@NgModule({}))




# Angular CLI Tool
> npm install @angular/cli@10 -g
> ng --version
> ng new users-app
> cd users-app
> ng serve | npm run start



> cd users-app
> npm install --force


> npm uninstall @angular/cli@10 -g

> npm install @angular/cli@11 -g
> ng new <user-app>
> cd users-app
> ng serve


# Bootstrap installation
- npm install bootstrap@4 



# CLI Commands
- ng generate component <component-name>
- ng g c <component-name>
- ng g d <directive-name>
- ng g p <pipe-name>
- ng g s <service-name>
- ng g m <module-name>



https://forms.gle/cp54zyeqmW55UkzQ8




# 4 Sessions & 3 breaks
- 11:30AM - 11:45AM (15 minutes)
- 1:00PM - 2:00PM (60 minutes)
- 3:30PM - 3:45 (15 minutes)








# Component Types -
- Smart | Container | Parent : Contains business logic; contains other component
    : UsersComponent

- Dump | Presentational | Child : receives the data from parent and creates the UI
    : UserImage
    : USerInfo


# Component Communication
- Parent to Child -> Property Binding + @Input()
- Child to Parent -> Event Binding + @Output()

# Component Life Cycle

# Directives
- Attribute : ngClass, ngStyles : changes the appearance without affecting the template
- Structural : *ngIf, *ngFor, *ngSwitch : change the structure of DOM

# Pipes : format the data on UI

# Forms -
- Template Driven : HTML5 validation on template
- Reactive/Model Driven : Angular validations on Model



- Service : implments DIl business logic in service; Singleton
- Observables : Streams on which event emit at certain time interval; pipeable operators eg. tap, map, take etc
- Remote Server Call
- Single Page Apps : Angular Router; Nested routing, Route & Query Parameters; Link guards
- Multi-Module : Lazy Loading
- App Deploy : Firebase 


# HttpClientModule
- unlock the module -> Import in Root Module
- HttpClient Service -> can be injected 
- HttpClient instance can make the Remote Server Call

- Convert USER_DATA into json file
- Remote Server Call on JSON
- Populate JSON data in component


# RxJS Commonly used Operators - rxjs.dev
- tap
FILTEREING OPERATOR
- take
- startWith
- endWith
- filter
- reduce
- debounceTime
- ajax
COMBINING OPERATORS
- combineLatest
- forkJoin
TRANSFORMING OPERATORS
- map
- merge
- concat
- switch
CREATIONAL OPERATORS
- from
- of 
- interval
- fromEvent
- Subjects
ERROR HANDLING OPERATORS
- catchError
- throwError

# App Deployment Steps
- ng build [--prod]
- npm install firebase-tools -g
- firebase login
- firebase init
- firebase deploy

# http-server
- npm install http-server -g
- cd dist/users-app
- http-server



__________________________________

# What is React ?
- Client-side JavaScript Library
- Efficient UI rendering
- SPA : react-router
- State Management : flux / Redux
- Form Validation : formik, useForm etc
- Remote Server Call : axios, jQuery etc
- Component based architecture (Functional / Class Based)
- Virtual DOM : in-memory JavaScript representation of Real DOM
- Props : way to supply the data from parent comp to child comp
- State : data to persist
- 'V' in MVC


DOM : hierarchical structure of HTML Elements
html
    head
        title
        meta
        script
        link
    body
        div
        header
        p
        footer 
        ul 
        img


# React App Creation
- npx create-react-app expenses

# React Internals -
JSX -> JavaScript -> Virtual DOM -> Real DOM -> Model Changes -> React re-renders the UI effeciently

# Atomic Design (Thinking in React way)
- Atom : Smallest unit - button, inputbox, p
- Molecules : combo of Atoms - button + Inputfield - searchbar - 
- Organism : combo of molecule - navbar - (navlink + searchbar)
- Template : combo of organism
- Pages : combo of various templates