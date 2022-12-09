import { waitForElementToBeRemoved, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'


describe('App', () => {
    it('should render the list', () => {
        const { getByText } = render(<App />)
        expect(getByText('Phone')).toBeInTheDocument()
        expect(getByText('Computer')).toBeInTheDocument()
        expect(getByText('TV')).toBeInTheDocument()
    })


    it('should add to the list', async () => {
        const { getByText, getByPlaceholderText, debug } = render(<App />)

        const inputElement = getByPlaceholderText('Enter new item')
        const addButton = getByText('Click')

        await userEvent.type(inputElement, 'Kitchen')
        await userEvent.click(addButton)
        expect(getByText('Kitchen')).toBeInTheDocument()
    })

    it('should be able to remove item from the list', async () => {
        const { getAllByText, queryByText } = render(<App />)
        const removeButtons = getAllByText('Remove')

        userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Phone')).not.toBeInTheDocument()
        })
    })

})