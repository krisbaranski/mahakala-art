import SingleImpressum from './SingleImpressum';
import impressumData from '../data/impressumData';

const Impressum = () => {
  return (
    <div className="container">
      <h3>Disclaimer</h3>

      {impressumData.map(data => {
        return <SingleImpressum title={data.title} content={data.content} />;
      })}
    </div>
  );
};

export default Impressum;
