import mercury from "../assets/mercury.jpeg";
import venus from "../assets/venus.jpg";
import earth from "../assets/earth.jpeg";
import mars from "../assets/mars.webp";
import jupiter from "../assets/jupiter.avif";
import saturn from "../assets/saturn.jpeg";
import uranus from "../assets/uranus.jpeg";
import neptune from "../assets/neptune.jpg";

function GridSection() {
  const planets = [
    { id: "mercury", name: "Mercury", img: mercury },
    { id: "venus",   name: "Venus",   img: venus },
    { id: "earth",   name: "Earth",   img: earth },
    { id: "mars",    name: "Mars",    img: mars },
    { id: "jupiter", name: "Jupiter", img: jupiter },
    { id: "saturn",  name: "Saturn",  img: saturn },
    { id: "uranus",  name: "Uranus",  img: uranus },
    { id: "neptune", name: "Neptune", img: neptune },
  ];

  return (
    <section className="solution-section" id="planets">
      <div>
        <h2>Visualizing Planet Differences</h2>
        <p>Each planet has unique physical characteristics.</p>
      </div>

      <div className="grid-images">
        {planets.map((planet) => (
          <figure key={planet.id} className="grid-item">
            <img
              className="images"
              src={planet.img}
              alt={planet.name}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GridSection;