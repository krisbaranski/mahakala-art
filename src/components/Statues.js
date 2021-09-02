import { element } from 'prop-types';
import Karmapa from '../img/16.Karmapa.jpg';
import DS from '../img/Dorje_Sempa.jpg';
import Mila from '../img/Mila.jpg';
import GT from '../img/Green_Tara.jpg';
import Opame from '../img/Opame.png';
import Mahakala from '../img/Maha_Wroc.jpg';
import YC from '../img/Yum_Chenmo.jpg';

const Statues = () => {
  return (
    <div className="container">
      <h3>Statues</h3>

      <p className="row">
        Here are presented statue projects that i realised for buddhist Centres
        and collectors worldwide:
      </p>

      <div className="row">
        <img src={Karmapa} alt="" className="col" />
        <element className="col">
          <b>16th Karmapa</b>, <em>Rangjung Rigpe Dorje </em> (tib.)
          <p>
            Head Teacher of Karma Kamtsang Lineage. <br /> 120 cm, 2021 <br />
            Diamond Way Buddhist Centre Prague, Czech Republic
          </p>
        </element>
      </div>

      <div className="row">
        <img src={DS} alt="" className="col" />
        <element className="col">
          <b>Diamond Mind</b>
          <em>, Dorje Sempa</em> (tib.)
          <p>
            Purification aspect of Buddhas Compassion and Wisdom. <br /> 150 cm,
            2019
            <br /> Painted by Dawa Lhadipa
            <br />
            Diamond Way Buddhist Centre Budapest, Hungary
          </p>
        </element>
      </div>

      <div className="row">
        <img src={Mila} alt="" className="col" />
        <element className="col">
          <b> Milarepa</b>
          <p>
            Great tibetan Yogin <br />
            40 cm, 2019 <br /> Painted by Tashi Dorje
            <br />
            Diamond Way Centre Copenhagen, Denmark
          </p>
        </element>
      </div>

      <div className="row">
        <img src={Opame} alt="" className="col" />
        <element className="col">
          <b>Buddha of Limitless Light</b>
          <em>, Opame</em> (tib.)
          <p>
            One of five Buddha Families <br />
            108 cm, 2017 <br />
            Painted by Silke Neukirchen <br />
            Diamond Way Buddhist Centre Munich, Germany
          </p>
        </element>
      </div>

      <div className="row">
        <img src={GT} alt="" className="col" />
        <element className="col">
          <b>Green Liberatrice</b>, <em> Syama Tara</em> (tib.)
          <p>
            The female Compassion Aspect of all Buddhas <br />
            86 cm, 2016 <br />
            Incrusted with turquise stones <br />
            Private Collection
          </p>
        </element>
      </div>

      <div className="row">
        <img src={Mahakala} alt="" className="col" />
        <element className="col">
          <b>Black Coat</b>, <em>Mahakala</em> (tib.)
          <p>
            Active protection aspect of the Lama. <br /> 96 cm, 2014 <br />
            Partially painted by Dawa Lhadipa <br />
            Diamond Way Centre Wroclaw, Poland
          </p>
        </element>
      </div>

      <div className="row">
        <img src={YC} alt="" className="col" />
        <element className="col">
          <b>Wisdom of all Buddhas</b>, <em>Yum Chenmo</em> (tib.)
          <p>
            The female aspect of Buddhas Wisdom. <br /> 50 cm height, 2011
            <br />
            Painted by Dawa Lhadipa
            <br />
            Diamond Way Retreat Centre Karma Guen, Spain
          </p>
        </element>
      </div>
    </div>
  );
};

export default Statues;
