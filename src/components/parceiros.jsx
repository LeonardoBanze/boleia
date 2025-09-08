import React, { useState, useEffect } from "react";

import Imgum from "../../src/assets/1.png";
import Imgdois from "../../src/assets/2.png";
import tresImg from "../../src/assets/3.png";
import quaImg from "../../src/assets/1.png";

const parceiros = [
  { nome: "Parceiro 1", logo: Imgum },
  { nome: "Parceiro 2", logo: Imgdois },
  { nome: "Parceiro 3", logo: tresImg },
  { nome: "Parceiro 4", logo: quaImg },
];

export default function Parceiros() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  // Avança automaticamente o slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= parceiros.length ? 0 : prev + 1
      );
    }, 9000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const getVisibleParceiros = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % parceiros.length;
      result.push(parceiros[index]);
    }
    return result;
  };

  return (
    <section className="bg-[#fafcfc] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#640000]">
       Parceiros
        </h2>

        <div className="flex justify-center items-center space-x-8 overflow-hidden w-full max-w-4xl mx-auto">
          {getVisibleParceiros().map((p, i) => (
            <div
              key={i}
              className="flex justify-center items-center bg-white p-4 rounded-lg shadow transition-transform duration-300 hover:shadow-lg"
              style={{ minWidth: `${100 / visibleCount}%` }}
            >
              <img
                src={p.logo}
                alt={p.nome}
                className="max-h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
