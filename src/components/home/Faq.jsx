import React, { useState } from 'react';

// Sub-component for individual FAQ items
const FAQItem = ({ question, answer, isOpen, onClick, themeStyles }) => {
  return (
    <div className={`border-b ${themeStyles.borderColor}`}>
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span 
          className={`text-lg font-normal transition-colors duration-200 
          ${themeStyles.questionColor} group-hover:${themeStyles.hoverColor}`}
        >
          {question}
        </span>
        <span className={`flex-shrink-0 ml-6 ${themeStyles.iconColor}`}>
          {/* Plus Icon that rotates to 'X' */}
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      
      {/* Expandable Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className={`text-base leading-relaxed max-w-2xl ${themeStyles.answerColor}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = ({
  theme = 'light', // Accepts 'light' or 'dark'
  title = "Frequently asked questions",
  data = [] // Array of { question: string, answer: string }
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // --- THEME CONFIGURATION ---
  const themes = {
    light: {
      bg: 'bg-white',
      headingColor: 'text-slate-900',
      borderColor: 'border-slate-300', // Slightly darker border for visibility on white
      questionColor: 'text-slate-800',
      answerColor: 'text-slate-500',
      iconColor: 'text-slate-900',
      hoverColor: 'text-blue-600'
    },
    dark: {
      bg: 'bg-[#020617]', // Matches your Helm project dark navy
      headingColor: 'text-white',
      borderColor: 'border-white/10', // Subtle transparent border for dark mode
      questionColor: 'text-slate-200',
      answerColor: 'text-slate-400',
      iconColor: 'text-white',
      hoverColor: 'text-blue-400'
    }
  };

  // Select active theme styles, fallback to light
  const currentTheme = themes[theme] || themes.light;

  // Default Placeholder Data (matches your screenshot text)
  const defaultData = [
    { question: "Lorem ipsum dolar sit amet", answer: "Detailed answer explaining the specific features and benefits goes here." },
    { question: "Lorem ipsum dolar sit amet", answer: "Detailed answer explaining the specific features and benefits goes here." },
    { question: "Lorem ipsum dolar sit amet", answer: "Detailed answer explaining the specific features and benefits goes here." },
    { question: "Lorem ipsum dolar sit amet", answer: "Detailed answer explaining the specific features and benefits goes here." },
    { question: "Lorem ipsum dolar sit amet", answer: "Detailed answer explaining the specific features and benefits goes here." },
  ];

  const faqData = data.length > 0 ? data : defaultData;

  return (
    <section className={`py-20 lg:py-32 ${currentTheme.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Layout: Split Grid (Left: Title, Right: List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className={`text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight ${currentTheme.headingColor}`}>
              {/* Splitting title words to match the stacked look in screenshot */}
              {title.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 w-full">
            {/* Top Border for first item */}
            <div className={`w-full ${currentTheme.borderColor} border-t`}>
               {faqData.map((item, index) => (
                 <FAQItem
                   key={index}
                   question={item.question}
                   answer={item.answer}
                   isOpen={activeIndex === index}
                   onClick={() => toggleItem(index)}
                   themeStyles={currentTheme}
                 />
               ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;