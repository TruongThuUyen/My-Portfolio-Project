import './styled.css';

export default function TextMarquee() {
  return (
    <div className='stoke-ticket my-[60px] whitespace-nowrap bg-[var(--color-primary-green)]'>
      <ul>
        <li>* REACT JS</li>
        <li>* HTML</li>
        <li>* CSS</li>
        <li>* Javascript</li>
        <li>* POWER Platform</li>
      </ul>
      <ul aria-hidden='true'>
        <li>* REACT JS</li>
        <li>* CSS</li>
        <li>* HTML</li>
        <li>* Javascript</li>
        <li>* POWER Platform</li>
      </ul>
    </div>
  );
}
