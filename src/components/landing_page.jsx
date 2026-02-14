
import "./landing_page.css";
import Select from 'react-select';

const optionList = [
  { value: '0-40', label: 'Questions 1-40' },
  { value: '40-80', label: 'Questions 41-80' },
  { value: '80-120', label: 'Questions 81-120' },
  { value: '120-160', label: 'Questions 121-160' },
  { value: '160-200', label: 'Questions 161-200' },
];

const LandingPage = ({ activeOption, setActiveOption, onStarted }) => {
  //const [lastupdated, setLastupdated] = useState("");

  return (
    <div className="landing-page">
      <header className="landing-page-header">
        <h1>Initial and Periodic Electrical Installation Inspection and Testing</h1>
        <h2>2391-52 Quiz</h2>
      </header>
        <div className="landing-page-selector">
          <Select
           options={optionList} 
           onChange={(selectedOption) => setActiveOption(selectedOption?.value)}
           value={optionList.find(options => options.value === activeOption) || null}
           />
        </div>
        <button className="get-started-button" onClick={onStarted}>Get Started  </button>
    </div>
  );
};

export default LandingPage;