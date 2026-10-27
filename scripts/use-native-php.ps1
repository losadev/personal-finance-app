# Dot-source this script to select the project runtime in this terminal only.
$nativePhpDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) '.tools/php'
if (-not (Test-Path (Join-Path $nativePhpDirectory 'php.exe'))) {
    throw 'Install the project PHP runtime first: ./scripts/install-native-php.ps1'
}
$env:Path = $nativePhpDirectory + [System.IO.Path]::PathSeparator + $env:Path
