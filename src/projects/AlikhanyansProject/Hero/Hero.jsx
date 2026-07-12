import './Hero.css';
import projectLogo from '../../../assets/logos/alikhanyans_project.png';

const HERO_SRC =
  'https://res.cloudinary.com/ddoaufnnz/image/upload/v1778778442/alikhanyan_hero_updated_pjtbzv.jpg';

const Hero = () => (
  <section
    className="alikhanyans-project-hero"
    aria-label="Alikhanyan's Project">
    <div className="alikhanyans-project-hero__nav-spacer" aria-hidden="true" />
    <div className="alikhanyans-project-hero__image-slot">
      <img
        className="alikhanyans-project-hero__image"
        src={HERO_SRC}
        alt="Alikhanyan's Project Orchestra live performance"
        decoding="async"
        fetchPriority="high"
      />
      <div className="alikhanyans-project-hero__overlay">
        <h1 className="alikhanyans-project-hero__title">
          <span className="alikhanyans-project-hero__title-line">
            Alikhanyan's
          </span>
          <span className="alikhanyans-project-hero__title-line">Project</span>
        </h1>
        <img
          className="alikhanyans-project-hero__logo"
          src={projectLogo}
          alt="Alikhanyan's Project logo"
        />
      </div>
    </div>
  </section>
);

export default Hero;
