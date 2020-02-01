
import React from 'react'
import ListItem from './ListItem'

export default function List({ toDoList, getUpdatedItem, getDelateItem }) {

    if (toDoList.length === 0)
        return <p className="tutorial">Create your first todo! :)</p>;

    const list = toDoList.map((item, index) => {
        return (
            <ListItem item={item} key={item.id} getUpdatedItem={getUpdatedItem} getDelateItem={getDelateItem} />
        )
    });

    return (
        <table>
            <tbody>
                {list}
            </tbody>
        </table>
    );
}
