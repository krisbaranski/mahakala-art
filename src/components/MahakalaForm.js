import React from 'react';
import many from '../img/many.jpg';
import maha from '../img/mahakala_108b.jpg';

const MahakalaForm = () => {
  return (
    <div className="container">
      <h1>
        Mahakala form
        <p>
          The main purpose of this mahakala form is to inspire many people with
          the physical representation of protective qualities of the enlightened
          mind.
        </p>
      </h1>

      <section className="row">
        <p className="col">
          From 2006 I learn how to build statues in traditional buddhist clay
          technique which originally comes from Himalaya Region (Tibet, Bhutan,
          Ladakh). This Projekt began with a wish. Since years I wanted to build
          a Mahakala form. In this technique it is possible to create
          3-dimentional statues, ritual dancing masks and reliefs
          <em> Tsa-tsa </em>
          (tib.).
          <br />
          The Mahakala form which I show here is a mixture of statue and relief.
          It is also prepared for traditional statuefilling. Once the original
          form is ready, a negative mould is made. This allows to multiply that
          form with the same precision as the original one.
        </p>
        <img className="col" src={maha} alt="mahakala forms" />
      </section>

      <section className="row">
        <p className="col">
          The material which is use for copies is <em> Zellan </em>(porcelain
          plaster), very hard, fine and best quality material for this kind of
          work.
          <br />
          After the mould copy is ready, it can be painted and prepared for
          filling. Traditionally in the East, stone colours are used. Nowadays
          acrylic colours are well adapted. I’m using very good quality acrylic
          for painting the form and real gold powder for “opening” the eyes.
        </p>
        <img className="col" src={many} alt="mahakala forms" />
      </section>

      <p>
        Painting the form is inspired by my buddhist teacher Lama Ole Nydahl,
        traditional painting teacher Dawa Lhadipa and examples of very good
        quality <em> Thangkas</em> (tib. for traditional roll paintings) of
        Mahakala in Karma Gadhri Tradition.
      </p>
    </div>
  );
};

export default MahakalaForm;
