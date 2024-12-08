import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificatesCarousel = ({ certificates }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Mostrar 3 certificados por página
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-6">
      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center bg-white border rounded-lg shadow-md"
          >
            {/* Previsualización del PDF recortada */}
            <div
              className="w-full h-52 overflow-hidden mb-4 rounded-lg"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                src={`${cert.link}#view=FitH`}
                className="absolute w-full h-full"
                title={`Preview of ${cert.title}`}
                frameBorder="0"
              ></iframe>
            </div>

            {/* Título del certificado */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {cert.title}
            </h3>

            {/* Botón centrado */}
            <div className="flex w-full justify-center mt-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => window.open(cert.link, "_blank")}
              >
                Ver certificado
              </button>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default CertificatesCarousel;
