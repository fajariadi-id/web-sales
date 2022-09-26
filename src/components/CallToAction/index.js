import React from "react";
import { Button } from "react-bootstrap";
import { SectionCTA } from "./styled";

const CallToAction = () => {
  return (
    <SectionCTA
      id="contact"
      className="container d-flex justify-content-between"
    >
      <div>
        <h1>Lorem ipsum dolor sit</h1>

        <p className="m-0 p-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>

        <Button className="btn-whatsapp d-flex align-items-center">
          <img
            className="whatsapp"
            src="/assets/images/whatsapp.svg"
            alt="whatsapp"
          />
          Whatsapp Sekarang
        </Button>
      </div>

      <img className="cta" src="/assets/images/cta.svg" alt="cta" />
    </SectionCTA>
  );
};

export default CallToAction;
