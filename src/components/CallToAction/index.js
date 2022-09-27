import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ResponsiveBreakpoints from "../../constant/ResponsiveBreakpoints";
import { SectionCTA } from "./styled";
import { FaPhoneAlt } from "react-icons/fa";

const CallToAction = ({ sidebar }) => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();
  const whatsappRef = useRef();
  const phoneRef = useRef();

  return (
    <SectionCTA
      isLG={isLG}
      isMD={isMD}
      sidebar={sidebar}
      id="contact"
      className={`container d-flex justify-content-between ${
        isLG && "flex-column-reverse align-items-center"
      }`}
    >
      <div className="container">
        <h1>Tertarik untuk memiliki mobil Daihatsu?</h1>

        {!sidebar && (
          <p className="m-0 p-0">
            Pertanyaan terkait layanan pembelian mobil Daihatsu yang anda
            minati, dapat langsung menghubungi kami dengan tekan tombol dibawah
            ini.
          </p>
        )}

        <a
          ref={whatsappRef}
          href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya tertarik untuk memiliki mobil Daihatsu."
          target="_blank"
          rel="noreferrer"
        ></a>

        <a ref={phoneRef} href="tel:087875273454"></a>

        <Button
          onClick={() => whatsappRef.current.click()}
          className="btn btn-whatsapp d-flex align-items-center"
        >
          <img
            className="whatsapp"
            src="/assets/images/whatsapp.svg"
            alt="whatsapp"
          />
          Whatsapp Sekarang
        </Button>

        {sidebar && (
          <Button
            onClick={() => phoneRef.current.click()}
            className="btn btn-phone mt-2 d-flex align-items-center"
          >
            <FaPhoneAlt size={20} />
            Telepon Sekarang
          </Button>
        )}
      </div>

      <img className="cta" src="/assets/images/cta.svg" alt="cta" />
    </SectionCTA>
  );
};

export default CallToAction;
