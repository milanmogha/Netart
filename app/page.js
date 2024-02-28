import React from "react";

export default function Home() {
  return (
    <>
      <div className="logo-container">
        <img src="./logo.png" className="logo" />
      </div>

      <div className="main-a">
        <div className="main-a-a">
          <img src="./1.png" className="png-1" />
        </div>
        <div className="main-a-b">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="./2.png" className="png-2" />

          <p className="award-2018">
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="main-b">
        <h5>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h5>
        <img src="./3.png" className="png-3" />

        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
      </div>
      <footer className="footer">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <h5>
          CHEMICALS & PROCESS <span>|</span> POWER WATER & WASTE WATER{" "}
          <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS
          & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE &
          DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE
          <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR{" "}
          <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE{" "}
          <span>|</span> FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </h5>
        <div className="contact">
          <p> Toll free 1800 200 1234</p>
          <p className="fml">www.facebook.com/cripumps</p>
          <p className="fml">www.crigroups.com</p>
        </div>
      </footer>
    </>
  );
}
