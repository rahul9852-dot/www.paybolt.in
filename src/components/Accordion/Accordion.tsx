"use client"
import React, { useState } from 'react';
import { FAQConstants } from '@/constants/faq.constant';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-4">
      <h2 className="text-primary text-2xl md:text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      {FAQConstants.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full p-4 bg-primary-50 text-primary font-semibold border-b-[2px] border-primary"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <FaMinus className="text-primary" />
            ) : (
              <FaPlus className="text-primary" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-primary-50 text-primary">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;