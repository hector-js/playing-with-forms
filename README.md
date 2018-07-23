PLAYING WITH FORMS
=================
The title describes the project  by itself, *playing with modules* in Angular *6* for a *multi page* application!! :)

RootModules and FeatureModule
=============================
Using the following structure for an application multipage.

```
src
¦
¦---app [root-module-folder]
¦
 ---modules  [feature-modules-folder]
    ¦
    ¦---page-one [feature-module-folder-one]
    ¦   ¦
    ¦   ¦---components
    ¦   ¦   ¦
    ¦   ¦    -page-one.component
    ¦   ¦
    ¦    ---service
    ¦       ¦
    ¦        -page-one.service
    ...
    ¦
     ---page-[n] [feature-module-folder-[N]]
        ¦
        ¦---components
        ¦   ¦
        ¦    -page-[N].component
        ¦
         ---service
            ¦
            -page-[N].service
        
```

If you want to start the project from scratch, it could be easy running this cli commands:

```
    cd src
    ng generate module page-one --routing
    ng generate component page-one/page-one
    ng generate service page-one/page-one
    ...
    ng generate module page-[N]  --routing
    ng generate component page-one/page-[N]
    ng generate service page-one/page-[N]
```

Being _N_ the number of pages of the application

Providers
=========
(IN PROGRESS)

Tools
======
* Jasmine

References
=========
https://angular.io/guide/ngmodules
