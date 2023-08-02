type FooterProps = {
  copyright: string;
};
export const Footer: React.FC<FooterProps> = (props) => (
  <div className="footer">
    <h2>{props.copyright}</h2>
  </div>
);
