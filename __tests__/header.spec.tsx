import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Header } from '../src/components/header'

describe('Header tests', () => {
  it('should render the logo', () => {
    render(<Header />)
    expect(screen.getAllByAltText(/coffee.*? logo/i)).toBeDefined()
  })

  it('should render the button', () => {
    render(<Header />)
    expect(
      screen.getByRole('button', { name: /login with google/i }),
    ).toBeDefined()
  })

  it('should render the cart menu', () => {
    render(<Header />)
    expect(screen.getByRole('menuitem')).toBeDefined()
  })
})
