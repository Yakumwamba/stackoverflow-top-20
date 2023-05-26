import React from 'react'
import { render, screen } from '@testing-library/react'


//import { App } from "../App"
import fetchMock from 'jest-fetch-mock/types'

describe('App', () => {
    beforeEach( () => {
        fetchMock.resetMocks()
    })

    test('renders a list of users from stackOverflow', async () => {})
    test('renders error when API call fails', async () => {})
})
