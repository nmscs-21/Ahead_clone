import React from 'react'
import Card from './Card';

function Page2() {
  return (
    <>
      <div className="pages page-2">
        <div className="cards">
          <div className="card no-border width-3">
            <h2>EQ beats IQ</h2>
          </div>
          <div className="card no-border width-3" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            dolorem nobis minima, tenetur minus eligendi ullam repudiandae totam
            earum quas molestias dignissimos, ducimus a suscipit aspernatur
            itaque ut dolore cupiditate.
          </div>
          <div className="card no-border width-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            quibusdam voluptate iure id recusandae ipsa! Odio ex dolorem
            aperiam! Autem quae impedit non?
          </div>
        </div>

        <h1 className='heading'>Does this Sound familiar... </h1>

        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </>
  );
}

export default Page2
