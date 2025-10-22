import './styled.css';

export const WavyText = ({ text }) => {
  return (
    <p className='wave-text'>
      {!!text &&
        text.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
            {char}
          </span>
        ))}
    </p>
  );
};
