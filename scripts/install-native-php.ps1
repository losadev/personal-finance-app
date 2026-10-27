$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$runtimePath = Join-Path $projectRoot '.tools/php'
if (Test-Path (Join-Path $runtimePath 'php.exe')) {
    throw 'PHP already exists in .tools/php. Activate it with . ./scripts/use-native-php.ps1.'
}

# Use official PHP Windows metadata and verify the archive before extracting it.
$releases = Invoke-RestMethod 'https://downloads.php.net/~windows/releases/releases.json'
$release = $releases.'8.4'
$archive = $release.'nts-vs17-x64'.zip
if (-not $archive.path -or -not $archive.sha256) {
    throw 'Official PHP 8.4 NTS x64 release metadata was not found.'
}
New-Item -ItemType Directory -Force -Path $runtimePath | Out-Null
$archivePath = Join-Path $projectRoot '.tools/php-windows.zip'
Invoke-WebRequest -UseBasicParsing -Uri ('https://downloads.php.net/~windows/releases/' + $archive.path) -OutFile $archivePath
if ((Get-FileHash -LiteralPath $archivePath -Algorithm SHA256).Hash -ne $archive.sha256) {
    throw 'PHP archive SHA256 verification failed. The archive was not extracted.'
}
Expand-Archive -LiteralPath $archivePath -DestinationPath $runtimePath
$ini = Get-Content -LiteralPath (Join-Path $runtimePath 'php.ini-development') -Raw
$ini += "`r`nextension_dir=`"$runtimePath/ext`"`r`n"
foreach ($extension in @('curl', 'fileinfo', 'mbstring', 'openssl', 'pdo_pgsql', 'pgsql', 'zip')) {
    $ini += "extension=$extension`r`n"
}
[System.IO.File]::WriteAllText((Join-Path $runtimePath 'php.ini'), $ini, (New-Object System.Text.UTF8Encoding($false)))
& (Join-Path $runtimePath 'php.exe') -v
if ($LASTEXITCODE -ne 0) { throw 'PHP failed to start. Check the Microsoft Visual C++ x64 runtime.' }
Write-Host 'PHP installed locally. Activate this terminal: . ./scripts/use-native-php.ps1'
