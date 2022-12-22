Requirements
- Php 8+
- Laravel 9+
- MySql 5.6+
- Node 12+
- NPM 6.14.6 or Yarn 1.13.0

Installation instructions

1. Run "composer install".
2. Create a new MySql database with utf8mb4 encoding
3. Copy the .env.example and rename as .env.
4. Update .env with your MySQL database connection details.
5. Run "php artisan key:generate".
6. Run "php artisan migrate:fresh --seed".
7. Run "npm install" command
8. Run "npm run dev"
9. Run "php artisan serve".

## Notes

This code is implemented using Laravel, React using Inertial as the 'glue' to tie front and back end as apposed to using typical API backend, and React/Angular frontend framework.

The code is bootstrapped with Laravel Breeze which comes with login/authentication feature.


## Outstanding
* Delete functionality
* More tests
* Fix typescript
* Make it pretty and UI friendly eg. 'cancel', dropdown list of country codes
