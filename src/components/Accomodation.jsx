import bandung from "../assets/bandung.jpg";
import bali from "../assets/bali.jpg";
import jakarta from "../assets/Jakarta.jpg";
import lombok from "../assets/lombok.jpg";
import padang from "../assets/padang.jpg";
import semarang from "../assets/semarang.jpg";
import surabaya from "../assets/surabaya.jpg";
import yogyakarta from "../assets/yogyakarta.jpg";

const indonesiaProvinces = [
  { province: "Bali", hotels: 1200, url: bali },
  { province: "Jakarta", hotels: 1500,url:jakarta },
  { province: "Bandung", hotels: 800 ,url:bandung},
  { province: "Semarang", hotels: 950,url:semarang },
  { province: "Yogyakarta", hotels: 600 ,url:yogyakarta},
  { province: "Bukit Tinggi", hotels: 350 ,url:padang},
  { province: "Lombok", hotels: 450 ,url:lombok},
  { province: "Surabaya", hotels: 750 ,url:surabaya},
];

export default function Accomodation({ heading, title }) {
  return (
    <section className="text-center mt-24 mb-24">
      <div className="flex flex-col  items-center">
        <h4 className="text-pink text-sm w-64  font-bold">{heading}</h4>
        <h1 className="text-3xl mb-10 w-64  font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {indonesiaProvinces.map((item, index) => (
          <div
            className="relative h-60 rounded-xl overflow-hidden shadow-md w-full bg-pink"
            key={index}
          >
            <img src={item.url}   className="object-cover object-center w-full h-full" alt={item.url}  />
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold flex justify-between ">
              <p>{item.province}</p>
              <p>{item.hotels}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
