import React, { useState } from 'react';
import data from './index'; // Ensure this import points to your data source

const QNA = () => {
  const [selected, setSelected] = useState(null);

  const toggleAnswer = (index) => {
    if (selected === index) {
      setSelected(null); // Collapse the answer if it's already selected
    } else {
      setSelected(index); // Expand the selected answer
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-[1280px] bg-bgGreen px-4">
      <h2 className="my-6 text-center text-3xl font-bold text-blackGreen">FAQs</h2>
      <div className="grid grid-cols-1 gap-2">
        {data.map((qna, index) => (
          <div
            key={qna.id}
            className="flex flex-col rounded-sm border border-blackGreen bg-bgGreen"
          >
            <div
              className="flex items-center justify-between p-3 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-sm font-semibold text-blackGreen">{qna.question}</h2>
              <span
                className={`h-3 transform transition-transform duration-400 ${
                  selected === index ? 'rotate-180' : ''
                }`}
              >
                ⮟
              </span>
            </div>
            <div
              className={`text-sm transition-all duration-300 ${
                selected === index
                  ? 'h-auto overflow-visible p-3'
                  : 'h-0 overflow-hidden p-0'
              }`}
            >
              {qna.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
