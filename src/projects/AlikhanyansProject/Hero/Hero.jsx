import "./Hero.css";

const HERO_SRC =
  "https://res.cloudinary.com/ddoaufnnz/image/upload/v1778778442/alikhanyan_hero_updated_pjtbzv.jpg";

const Hero = () => (
  <section className="alikhanyans-project-hero" aria-label="Alikhanyan's Project">
    <div className="alikhanyans-project-hero__nav-spacer" aria-hidden="true" />
    <div className="alikhanyans-project-hero__image-slot">
      <img
        className="alikhanyans-project-hero__image"
        src={HERO_SRC}
        alt="Alikhanyan's Project"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  </section>
);

export default Hero;
