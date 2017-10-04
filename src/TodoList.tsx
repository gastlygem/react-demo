import * as React from 'react';
import * as PropTypes from 'prop-types';

const TodoList: React.SFC<TodoListProps> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
