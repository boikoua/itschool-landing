type Props = {
  changeLang: (lang: string) => void;
};

const Languages: React.FC<Props> = ({ changeLang }) => {
  return (
    <div className="flex gap-4">
      <span onClick={() => changeLang('ua')}>
        <img
          className="w-16 rounded-full shadow-lg hover:shadow-md hover:shadow-gray-300 transition-shadow duration-300 ease-in-out cursor-pointer"
          src="img/ua.png"
          alt="uk"
        />
      </span>
      <span onClick={() => changeLang('en')}>
        <img
          className="w-16 rounded-full shadow-lg hover:shadow-md hover:shadow-gray-300 transition-shadow duration-300 ease-in-out cursor-pointer"
          src="img/en.png"
          alt="en"
        />
      </span>
    </div>
  );
};

export default Languages;
