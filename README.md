# Crud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

# ReactiveForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## How To Start

1) Fork and Clone
2) Run `npm i`
3) Run `ng serve` and navigate to `http://localhost:4200/`

## Task

1) Integrate `form` with `reactive-forms`
2) By default `vendor's list` will be blank. there will be no data and need to display message `No Records Found`
3) If fields will be blank, `Register` button will be disabled
    * All fields are madatory
    * Apply Email validation (only valid email applicable). red border will apply if email is `invalid`
    * Name will take only `characters` if user will add `numeric` value that time red border will apply 
4) Once record will add it will update in right side `table`
5) On delete, user will get `confirmation popup`. you can use default `confirm`. after confirmation, record will delete.
6) On edit data will automatically fill in left side form and and from button label will change. in case of edit button label will be `Update` instead of `Submit`