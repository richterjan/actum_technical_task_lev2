# ActumTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Technical task goals level 2 / Technické zadání level 2
1. Get list of users trought GitHub services (REST-API)
2. Use paginator to manage page index and page size in http / https request
3. 3 individual parameters for filtering, which are combined with each other for the filter result
4. Whispering input for each parameters input (autocomplete), with debouncing method

## Solving / Řešení
### Modular
#### eng
I solved the assignment using the modular application method, for easier future extensions. The modules are only exemplary designed. The lazyload method for the user module is also used here. The current concept and structure of the assignment could be solved even without a modular solution.
#### cz
Zadání jsem řešil metodou modulární aplikace, pro jednodušší budoucí rozšíření. Moduly jsou pouze ukázkově navržené. Je zde použita i metoda lazyload pro modul uživatelů. Součaný koncept a struktura zadání by šla vyřešit i bez modulárního řešení.

### Frameworks
#### eng
For work efficiency, I decided to use a framework. Angular CLI v12+ as the basic framework of this application, running on typescript. With other extensions: flex-layout and material, to facilitate work with CSS / SASS. These extensions address responsiveness and other visual components and elements of the application: paginator, grid, toolbar, buttons etc ...
#### cz
Pro efektivitu práce, jsem se rozhodl použít framewrok. Angular CLI v12+ jako základní framewrok této aplikace, běžící na typescriptu. S dalšími rozšířeními: flex-layout a material, pro usnadnění práce s CSS / SASS. Tyto rozšíření, řeší responsivitu a další vizuální komponenty a prvky aplikace: paginator, grid, toolbar, buttons atd...

### Debouncing method
#### eng
I chose the debouncing method for autocomplete functions because it is more efficient in conjunction with the Angular and RXJS libraries. The RXJS library already contains the functions needed to use the debouncing method. So in terms of readability and code purity, it seemed better to me than converting debouncing functions to throttling. Another reason was that the debouncing method does not run conditional functions until after the set pause time. Instead of this throttling method, it runs the code regularly and only reduces the number of resulting queries. From the point of view of UX and UI, throttling is perhaps a better choice, because the results of queries are already displayed while writing text in the input, but in terms of application performance, I came up with a better method of debouncing. Where functions are called only during a pause. I tried to make up for the benefits of the throttling method by setting the pause to less than one second. Thus, the user experience is similar but more effective, because the results are displayed only when the user does not really know what he is specifically looking for and thus takes a short pause while typing and at that moment the auto-complete function is called.
#### cz
Metodu debouncing pro autocomplete funkce jsem zvolil, protože ve spojení s Angularem a RXJS knihovnou je efektivnější. Knihovna RXJS již obsahuje funkce potřebné pro použití debouncing metody. Tedy z hlediska čitelnosti a čistoty kódu, mi to přišlo lepší, než předělávat funkce pro debouncing na metodu throttling. Dalším důvodem bylo, že debouncing metoda spustí podmíněné funkce až po nastaveném čase  pauzy. Místo tohoto throttling metoda, spouští kód pravidelně a pouze redukuje počet výsledných dotazů. Z hlediska UX a UI je throttling možná lepší volba, protože se výsledky dotazů zobrazuji již během psaní textu ve vstupu, ale z hlediska výkonu aplikace mi přišla lepší metoda debouncing. Kde se funkce zavolají až při pauze. Výhody throttling metody jsem se pokusil vynahradit tím, že jsem nastavil pauzu na menší čas než jendu sekundu. Tedy uživatelská zkušenost je  podobná ale efektivnější, protože se výsledky zobrazí až v momentě kdy uživatel vlastně neví co konkrétně hledá a tedy udělá během psaní krátkou pauzu a v ten moment se teprve zavolá funkce pro automatické dokončení.

### Pagination
#### eng
For paging, I used a component in the angular-material package. Specifically, "paginator", here I modified its functions so that in the service that reads data from rest-api, it adds parameters to the URL address according to its current settings.
#### cz
Pro stránkování jsem využil komponentu v angular-material balíčku. Konkrétně "paginator", zde jsem upravil jeho funkce tak, aby ve službě, která načítá data z rest-api doplnil parametry do URL adresy podle svého aktuálního nastavení.

### Grid
#### eng
To display the results, I also used the table component from the angular-material package. I use this table as a component for visual display of data, also for other functions such as sorting by columns, etc ..
####cz
Pro zobrazení výsledků jsem využil komponenty table také z balíčku angular-material. Tuto tabulku používám jako komponentu pro vizuální zobrazení dat, také pro další funkce jako je třeba řazení podle sloupců atd..
