import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomePage } from '../src/pages/home/index'
import React from 'react'

describe('HomePage tests', () => {
  it('should render the title', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { name: /hello world/i })).toBeDefined()
  })
})
