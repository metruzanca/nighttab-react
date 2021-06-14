import { HSL, RGB } from "types"

export function rgb2hsl({r, g, b}: RGB): HSL {
  // Make r, g, and b fractions of 1
  r /= 255
  g /= 255
  b /= 255

  // Find greatest and smallest channel values
  const cmin = Math.min(r,g,b)
  const cmax = Math.max(r,g,b)
  const delta = cmax - cmin

  let h = 0
  // Calculate hue
  // No difference
  if (delta === 0)
    h = 0
  // Red is max
  else if (cmax === r)
    h = ((g - b) / delta) % 6
  // Green is max
  else if (cmax === g)
    h = (b - r) / delta + 2
  // Blue is max
  else
    h = (r - g) / delta + 4

  h = Math.round(h * 60)
    
  // Make negative hues positive behind 360°
  if (h < 0) h += 360
  // Calculate lightness
  const l = (cmax + cmin) / 2

  // Calculate saturation
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
      
  return {
    h: h,
    // Multiply l and s by 100
    s: +(s * 100).toFixed(1),
    l: +(l * 100).toFixed(1),
  }
}


// I like functional programming too much

function _rbg(m:number){
  return (r: number, g: number, b: number) => ({
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  })
}

export function hsl2rgb({h, s, l}: HSL): RGB {
  // Must be fractions of 1
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c/2
 
  const rbg = _rbg(m)

  if (0   <= h && h < 60)  return rbg(c, x, 0)
  if (60  <= h && h < 120) return rbg(x, c, 0)
  if (120 <= h && h < 180) return rbg(0, c, x)
  if (180 <= h && h < 240) return rbg(0, x, c)
  if (240 <= h && h < 300) return rbg(x, 0, c)
  // if (300 <= h && h < 360)
  return rbg(c, 0, x)
}

function _dec2PaddedHex(decimal:number){
  return decimal.toString(16).padStart(2, "0")
}

export function rgb2hex({ r, g, b }:RGB, opacity:number = 0){
  const hex = `#${_dec2PaddedHex(r)}${_dec2PaddedHex(b)}${(_dec2PaddedHex(g))}`
  return opacity !== 0 ? hex + _dec2PaddedHex(opacity) : hex
}

export function hex2rgb(hex:string): RGB{
  const r = hex.substr(1, 2)
  const g = hex.substr(3, 2)
  const b = hex.substr(5, 2)  
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  }
}