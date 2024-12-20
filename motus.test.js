import { expect, test } from 'vitest'
import { guessAWord } from './script.js'
import {tryMessageWord} from './script.js'

test('Cas de démarrage #1 - dire bravo', () => {
  expect(guessAWord("dictionnaire")).toBe("dictionnaire")
})

test('Cas limite #1 - Nombre en paramètre', () => {
  expect(guessAWord(42)).toBe(false)
})

test('Cas limite #2 - Chaîne très longue', () => {
  expect(guessAword("Rhoshandiatelly-Neshiaunnveshenk-Koyaanfsquatsiuty")).toBe(false)
})

test('Cas limite #3 - Valeur null', () => {
  expect(guessAword(null)).toBe(false)
})

test('Vérif de casse', () => {
  expect(tryMessageWord("DICTIONNAIRE")).toBe(true)
})