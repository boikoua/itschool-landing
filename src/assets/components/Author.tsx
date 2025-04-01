import cn from 'classnames';

type Props = {
  theme: string;
  language: string;
};

const Author: React.FC<Props> = ({ theme, language }) => {
  return (
    <a
      className={cn(
        'flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r text-white  hover:shadow-lg transition duration-300 ease-in-out',
        theme === 'light'
          ? 'from-sky-400 to-blue-600'
          : 'bg-gray-900 to-blue-950'
      )}
      href="https://github.com/boikoua"
      target="_blank"
    >
      <img className="w-8 h-8 rounded-full" src="img/github.png" alt="github" />
      <span className="text-lg font-medium">
        {language === 'en' ? 'Dmitry Boiko' : 'Дмитро Бойко'}
      </span>
    </a>
  );
};

export default Author;
