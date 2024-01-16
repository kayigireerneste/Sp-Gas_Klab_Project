import AboutCSS from "../About/About.module.css"
import { MdGasMeter } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaTools } from "react-icons/fa";

function About() {
  return (
    <div className={AboutCSS.AboutContent} id="About">
      <div className={AboutCSS.header}>
        <h1>
          About Us <br />
          <small>ABOUT OUR SERVICES, SP Ltd is the most reliable cooking GAS supplier in Rwanda.</small> </h1>
      </div>
      <div className={AboutCSS.aboutCardContainer}>
        <div className={AboutCSS.card}>
          <div className={AboutCSS.cardHeader}>
            <MdGasMeter className={AboutCSS.cardIcon}/>
            <h2>Selling Cooking Gas</h2>
          </div>
          <p className={AboutCSS.descriptions}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Mauris vel vehicula dui.
            Curabitur consectetur eu risus
            Mauris vel vehicula dui.
            Curabitur consectetur eu risus
            Mauris vel vehicula dui.
          </p>
        </div>
        <div className={AboutCSS.card}>
        <div className={AboutCSS.cardHeader}>
            <FiTool className={AboutCSS.cardIcon}/>
            <h2>Repair difference parts</h2>
          </div>
          <p className={AboutCSS.descriptions}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Mauris vel vehicula dui.
            Curabitur consectetur eu risus
            Mauris vel vehicula dui.
            Curabitur consectetur eu risus
            Mauris vel vehicula dui.
          </p>
        </div>
        <div className={AboutCSS.card}>
          <div className={AboutCSS.cardHeader}>
            <FaTools className={AboutCSS.cardIcon}/>
            <h2>Home installations</h2>
          </div>
          <p className={AboutCSS.descriptions}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Mauris vel vehicula dui.
            Curabitur consectetur eu risus
            Mauris vel vehicula dui.
            Curabitur consectetur eu risus
            Mauris vel vehicula dui.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
