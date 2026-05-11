import "./Hero.css";

const HERO_SRC =
  "https://res.cloudinary.com/ddoaufnnz/image/upload/v1778515618/alikhanyan_project_hero_irjywj.png";

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
