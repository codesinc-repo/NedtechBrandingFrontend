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
          isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Added whitespace-pre-line to preserve line breaks/bullets in your text */}
        <p className={`text-base leading-relaxed max-w-2xl whitespace-pre-line ${themeStyles.answerColor}`}>
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
      borderColor: 'border-slate-300',
      questionColor: 'text-slate-800',
      answerColor: 'text-slate-500',
      iconColor: 'text-slate-900',
      hoverColor: 'text-blue-600'
    },
    dark: {
      bg: 'bg-[#020617]', // Matches your Helm project dark navy
      headingColor: 'text-white',
      borderColor: 'border-white/10',
      questionColor: 'text-slate-200',
      answerColor: 'text-slate-400',
      iconColor: 'text-white',
      hoverColor: 'text-blue-400'
    }
  };

  // Select active theme styles, fallback to light
  const currentTheme = themes[theme] || themes.light;

  // --- UPDATED DEFAULT DATA ---
  const defaultData = [
    { 
      question: "What is Helm, in simple terms?", 
      answer: "Helm is an AI workforce platform designed to support growing businesses with the work that slows them down: operations, communication, content, and coordination.\n\nIt acts like a team of digital teammates that help get work done and provide clarity as you scale." 
    },
    { 
      question: "How is Helm different from ChatGPT or other AI tools?", 
      answer: "ChatGPT answers questions. Helm does the work.\n\nHelm is built around roles, workflows, and coordination, not prompts. It executes tasks, manages ongoing work, collaborates across roles, and supports decision-making, more like a team than a tool." 
    },
    { 
      question: "Who is Helm built for?", 
      answer: "Helm is designed for founder-led SMEs that are growing, stretched, and trying to scale without adding unnecessary headcount.\n\nIt’s particularly suited to:\n• Service-based businesses\n• Agencies and consultancies\n• SaaS and tech-enabled companies\n• Teams juggling operations, marketing, and customer success" 
    },
    { 
      question: "Is Helm replacing people?", 
      answer: "No.\n\nHelm is built on the principle of augmentation, not replacement. It’s designed to reduce cognitive load, handle repetitive work, and create clarity, so people can focus on higher-value thinking, relationships, and leadership." 
    },
    { 
      question: "What does Helm do day to day?", 
      answer: "Helm operates through AI roles that handle real workflows, such as:\n• Drafting and scheduling content\n• Managing email and communications\n• Supporting admin and operations\n• Handling customer interactions\n• Producing written materials\n\nOver time, these roles coordinate with each other to keep work flowing smoothly." 
    },
    { 
      question: "Do I need technical knowledge to use Helm?", 
      answer: "No. Helm is designed to feel like working with a colleague, not configuring software.\n\nDuring early access, onboarding is guided, and workflows are set up with you, not left for you to figure out alone." 
    },
    { 
      question: "How quickly will we see value?", 
      answer: "Most teams see value within the first one to two weeks, often through:\n• Reduced admin burden\n• Faster turnaround on content or communications\n• Clearer structure to recurring work\n\nHelm is designed to deliver small, tangible wins early, then expand as trust builds." 
    },
    { 
      question: "Can Helm integrate with tools we already use?", 
      answer: "Helm is being built to fit alongside existing tools rather than replace everything at once.\n\nEarly access focuses on core workflows first, with integrations expanding over time." 
    },
    { 
      question: "Is there a free trial?", 
      answer: "We’re currently running a limited Founding 50 Early Access Programme, which provides hands-on access and collaboration as Helm is built.\n\nGeneral trials will be available after launch." 
    },
    { 
      question: "What if Helm isn’t right for us?", 
      answer: "There’s no long-term lock-in.\n\nIf Helm doesn’t deliver meaningful value, you’re free to step away, no pressure, no awkwardness." 
    },
    { 
      question: "Is our data secure?", 
      answer: "Yes. Data security is a core design principle.\n\nHelm uses modern authentication, secure infrastructure, and controlled access to ensure your information is protected." 
    },
    { 
      question: "Do you train AI models on our data?", 
      answer: "No.\n\nYour data is not used to train public or third-party models." 
    },
    { 
      question: "Where is data stored?", 
      answer: "Helm is built using secure cloud infrastructure with data handling aligned to UK and EU standards." 
    },
    { 
      question: "What is the Helm Founding 50?", 
      answer: "The Founding 50 is a small group of founder-led businesses getting early access to Helm and helping shape how it evolves.\n\nIt’s a partnership, not a typical beta." 
    },
    { 
      question: "How many spots are available?", 
      answer: "There are 50 places only, and they’re intentionally limited so we can work closely with each business." 
    },
    { 
      question: "What happens after the early access period?", 
      answer: "Founding members receive:\n• A discounted founding rate\n• Priority access to new capabilities\n• Ongoing recognition as early contributors to Helm\n\nThere’s no obligation to continue if it’s not right for you." 
    },
  ];

  // If data prop is passed, use it; otherwise use defaultData
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