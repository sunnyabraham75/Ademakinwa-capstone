import planetaryVideo from "../assets/video/planet-video.MP4";

function Planetary() {
  return (
    <section className="planetary-section">
      <div className="planetary-data">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Comparing <b>mass</b>, <b>diameter</b>, <b>gravity</b>, and{" "}
          <b>density</b> helps us understand planetary behavior.
        </p>
      </div>

      <div className="planetary-video">
        <video className="video" controls muted loop autoPlay playsInline>
          <source src={planetaryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Planetary;