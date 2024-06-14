import { useState } from 'react';
import data from '../../data.json';

function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(input));
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:${data.contact.email}?subject=Contact of a user&body=${email}: You have been contacted`;
      setEmail('');
    } else {
      console.log(data['section-contact'].error);
    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center py-12 px-8 gap-2 bg-fucsia_Custom text-white">
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold self-center text-center">
          {data['section-contact'].title}
        </p>
        <div className="flex flex-col sm:flex-row items-center mt-4 gap-2 w-full justify-center">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="sm:min-w-[280px] text-white bg-blue-gray_Custom p-2 px-2 border-none rounded-md border placeholder-[#DADADD]"
            placeholder={data['section-contact'].input_placeholder}
          />
          <button
            className="rounded-md bg-amber_Custom text-blue-gray_Custom p-2 px-6 hover:brightness-105 active:brightness-95 shadow-sm shadow-blue-gray_Custom active:shadow-none transition-all"
            onClick={handleButtonClick}
          >
            {data['section-contact'].button}
          </button>
        </div>
        {!isValidEmail && email !== '' && (
          <p className="text-orange-500 text-sm mt-2">
            {data['section-contact'].error}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
