import './designComponents.css';

export const DosDonts = ({ doText, dontText }) => (
  <div className="volt-dos-donts">
    <article>
      <strong>Do</strong>
      <p>{doText}</p>
    </article>
    <article>
      <strong>Don't</strong>
      <p>{dontText}</p>
    </article>
  </div>
);
