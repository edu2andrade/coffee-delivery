import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomePage } from '../src/pages/home/index'

describe('HomePage tests', () => {
  it('should render the title', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { name: /find the perfect.*? everyday\./i }),
    ).toBeDefined()
  })

  it('should render the hero image', () => {
    render(<HomePage />)
    expect(screen.getAllByAltText(/coffee.*? image/i)).toBeDefined()
  })
})
