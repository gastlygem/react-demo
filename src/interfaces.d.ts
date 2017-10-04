declare module 'enzyme-adapter-react-16';

interface TodoListProps {
    items: TodoItem[];
}

interface TodoItem {
    id: number;
    text: string;
}

interface TodoAppState {
    items: TodoItem[];
    text: string;
}
