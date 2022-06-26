import { render, screen, fireEvent } from '@testing-library/react-native';
import GroceryShoppingList from '../components/groceryshoppinglist'

test('given empty GroceryShoppingList, user can add item to it', () => {
    render(<GroceryShoppingList />)
    fireEvent.changeText(
        screen.getByPlaceholderText('Enter grocery item'),
        'Banana'
    )

    fireEvent.press(screen.getByText('Add the item to list'));

    const result = screen.getAllByText('Banana');
    expect(result).toHaveLength(1); // expect 'banana' to be on the list
    // expect(result).toHaveLength(1);
})