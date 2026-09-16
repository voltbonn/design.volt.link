Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$source = Resolve-Path 'design.volt.link_logo_lila.jpg'
$publicDir = Join-Path (Get-Location) 'public'
$faviconsDir = Join-Path $publicDir 'favicons'
New-Item -ItemType Directory -Force -Path $faviconsDir | Out-Null

function New-FaviconBitmap {
  param(
    [string] $Path,
    [int] $Size,
    [ValidateSet('purple', 'white')]
    [string] $Mode
  )

  $image = [System.Drawing.Image]::FromFile($Path)
  try {
    $cropSize = [Math]::Min($image.Width, $image.Height)
    $sourceX = [int](($image.Width - $cropSize) / 2)
    $sourceY = [int](($image.Height - $cropSize) / 2)
    $bitmap = New-Object System.Drawing.Bitmap $Size, $Size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    try {
      $graphics.Clear([System.Drawing.Color]::Transparent)
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $graphics.DrawImage(
        $image,
        (New-Object System.Drawing.Rectangle 0, 0, $Size, $Size),
        $sourceX,
        $sourceY,
        $cropSize,
        $cropSize,
        [System.Drawing.GraphicsUnit]::Pixel
      )
    } finally {
      $graphics.Dispose()
    }

    for ($x = 0; $x -lt $bitmap.Width; $x++) {
      for ($y = 0; $y -lt $bitmap.Height; $y++) {
        $pixel = $bitmap.GetPixel($x, $y)
        $distanceFromWhite = [Math]::Max([Math]::Max(255 - $pixel.R, 255 - $pixel.G), 255 - $pixel.B)

        if ($distanceFromWhite -lt 18) {
          $bitmap.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } elseif ($Mode -eq 'white') {
          $alpha = [Math]::Min(255, [Math]::Max(0, $distanceFromWhite * 2))
          $bitmap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
        }
      }
    }

    return $bitmap
  } finally {
    $image.Dispose()
  }
}

foreach ($size in 16, 32, 48, 180, 192, 512) {
  $purple = New-FaviconBitmap -Path $source -Size $size -Mode 'purple'
  try {
    $purple.Save((Join-Path $faviconsDir "favicon-purple-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $purple.Dispose()
  }

  $white = New-FaviconBitmap -Path $source -Size $size -Mode 'white'
  try {
    $white.Save((Join-Path $faviconsDir "favicon-white-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $white.Dispose()
  }
}

$icoBitmap = New-FaviconBitmap -Path $source -Size 32 -Mode 'purple'
try {
  $iconHandle = $icoBitmap.GetHicon()
  $icon = [System.Drawing.Icon]::FromHandle($iconHandle)
  try {
    $stream = [System.IO.File]::Create((Join-Path $publicDir 'favicon.ico'))
    try {
      $icon.Save($stream)
    } finally {
      $stream.Dispose()
    }
  } finally {
    $icon.Dispose()
  }
} finally {
  $icoBitmap.Dispose()
}

Write-Output "Favicons generated in $faviconsDir"
