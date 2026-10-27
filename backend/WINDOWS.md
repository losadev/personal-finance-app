# Laravel en Windows, sin Sail

Laravel corre con PHP de Windows. PostgreSQL corre como servicio de Windows; pgAdmin es el cliente para administrar esa base.

## PHP y Composer

Desde la raíz del repositorio, en PowerShell:

```powershell
./scripts/install-native-php.ps1
. ./scripts/use-native-php.ps1
php -v
php -m | Select-String 'pdo_pgsql'
cd backend
composer check-platform-reqs
```

La instalación descarga PHP 8.4 NTS x64 oficial y verifica SHA256. Se guarda en `.tools/php`, excluido de Git. La activación solo modifica el PATH de esta terminal; repetila al abrir otra terminal. Requiere Microsoft Visual C++ Redistributable x64. El PHP de Herd Lite instalado originalmente no incluye PDO PostgreSQL.

Si aún no existe `vendor`, ejecutá `composer install`. No uses `composer setup`: ese script también ejecuta migraciones y un build.

## PostgreSQL y pgAdmin

El servicio local comprobado es `postgresql-x64-18`, en el puerto 5432. En pgAdmin registrá el servidor:

| Campo | Valor |
| --- | --- |
| Nombre | PostgreSQL Windows |
| Host | 127.0.0.1 |
| Puerto | 5432 |
| Maintenance database | postgres |
| Usuario | postgres |
| Contraseña | La contraseña local de PostgreSQL |

La aplicación usa la base existente `personal-finance-app`. Configurá `backend/.env` con los mismos datos, sin publicar la contraseña:

```dotenv
APP_URL=http://127.0.0.1:8000
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=personal-finance-app
DB_USERNAME=postgres
DB_PASSWORD="tu contraseña local"
```

## Ejecutar Laravel

Con el PHP del proyecto activado, desde `backend`:

```powershell
php artisan config:clear
php artisan migrate:status
php artisan serve --host=127.0.0.1 --port=8000
```

API: `http://127.0.0.1:8000/api/v1`. Comprobación de salud: `http://127.0.0.1:8000/up`.

Si `APP_KEY` está vacío en un entorno nuevo, ejecutá `php artisan key:generate` una sola vez y después `php artisan config:clear`. Conservá una clave existente. Verificá también `http://127.0.0.1:8000/home`: esa ruta comprueba el funcionamiento de sesión y cookies cifradas, que `/up` no utiliza.

`migrate:status` consulta el estado. Ejecutá `php artisan migrate` solamente cuando quieras aplicar migraciones pendientes a esta base. Si usás trabajos en segundo plano, abrí otra terminal, activá PHP y ejecutá `php artisan queue:listen --tries=1` desde `backend`.

La base de Docker y la de Windows tienen almacenamiento independiente. Este cambio no copia datos de Docker. Los contenedores y volúmenes anteriores se conservan.

Fuentes: [PHP Windows](https://www.php.net/downloads.php?os=windows), [PDO PostgreSQL](https://www.php.net/manual/en/ref.pdo-pgsql.php), [Laravel](https://laravel.com/docs/13.x/installation), [conexión pgAdmin](https://www.pgadmin.org/docs/pgadmin4/latest/server_dialog.html).
