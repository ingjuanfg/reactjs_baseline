import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
