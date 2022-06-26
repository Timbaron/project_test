import { render, screen, fireEvent } from '@testing-library/react-native';
import GroceryShoppingList from '../components/groceryshoppinglist'

test('given empty GroceryShoppingList, user can add item to it', () => {
    render(<GroceryShoppingList />) // will render the GroceryShoppingList component
    fireEvent.changeText(
        screen.getByPlaceholderText('Enter grocery item'),
        'Banana'
    ) // will change the text to 'Banana' where placeholder is 'Enter grocery item'

    fireEvent.press(screen.getByText('Add the item to list')); // will press the button where text is 'Add the item to list'

    const result = screen.getAllByText('Banana'); // Get all the items where text is 'Banana'
    expect(result).toHaveLength(1); // expect 'banana' to be on the list
})