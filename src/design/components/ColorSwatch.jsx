import './designComponents.css';

export const ColorSwatch = ({ name, hex, rgb, cmyk, usage }) => (
  <article className="volt-color-swatch">
    <div className="volt-color-swatch__sample" style={{ backgroundColor: hex }} />
    <div className="volt-color-swatch__content">
      <h3>{name}</h3>
      <dl>
        <div>
          <dt>HEX</dt>
          <dd>{hex}</dd>
        </div>
        {rgb && (
          <div>
            <dt>RGB</dt>
            <dd>{rgb}</dd>
          </div>
        )}
        {cmyk && (
          <div>
            <dt>CMYK</dt>
            <dd>{cmyk}</dd>
          </div>
        )}
      </dl>
      {usage && <p>{usage}</p>}
    </div>
  </article>
);
