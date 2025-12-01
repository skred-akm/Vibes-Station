import React, { useEffect, useState } from "react";
import "./styles/style.css";
import FeaturedProject from "./components/FeaturedProject";




// ---- DATA -----------------------------------------------------
const sampleData = {
  projects: [
    {
      id: 1,
      title: "IDGAF",
      thumbnail: "https://via.placeholder.com/300x300.png?text=IDGAF",
      desc: "Projet orienté original hip hop, rap, avec sa touche de magie.",
      music: {
        youtube: "https://www.youtube.com/watch?v=46LS3ONbiU8",
        spotify: "https://open.spotify.com/embed/album/6m7gs1eww31kCNt9qQwwF8",
      },
    },
    {
      id: 2,
      title: "Zanmi",
      thumbnail: "https://via.placeholder.com/300x300.png?text=ZANMI",
      desc: "Quand le dance hall rencontre le hip-hop, ça donne 'ZANMI'.",
      music: {
        youtube: "https://www.youtube.com/watch?v=BiSz-gSji7o",
        spotify: "https://open.spotify.com/embed/track/5NjBMwPGv3jEYTZDnD6U34",
      },
    },
    {
      id: 3,
      title: "First Shot Type Beat",
      thumbnail: "https://via.placeholder.com/300x300.png?text=FIRST+SHOT",
      desc: "Quel chef-d'œuvre vas-tu créer sur ce beat ? Moments de magie.",
      music: {
        youtube: "https://www.youtube.com/watch?v=qGl9CW5EtvM",
        spotify: "https://open.spotify.com/embed/track/05ON3r9U01TrXx1BLdvmrp",
      },
    },
  ],

  about: {
    title: "À propos",
    body: "Retrouves-moi sur mes différents réseaux pour partager la passion.",
  },
};

// ---- ROUTER ---------------------------------------------------
const useHashRoute = () => {
  const [route, setRoute] = useState(
    () => window.location.hash.replace("#", "") || "/"
  );

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (to) => (window.location.hash = to);

  return { route, navigate };
};

// ---- NAV -------------------------------------------------------
function Nav({ current }) {
  const links = [
    { to: "/", label: "Accueil" },
    { to: "/projects", label: "Projets" },
    { to: "/about", label: "À propos" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#/">
          Vibes Station
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {links.map((l) => (
              <li key={l.to} className="nav-item">
                <a
                  href={`#${l.to}`}
                  className={`nav-link ${current === l.to ? "active" : ""}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// ---- HOME ------------------------------------------------------
// ---- HOME ------------------------------------------------------
function Home({ navigate }) {
   const projects = sampleData.projects;
  return (
    <header className="bg-light py-5 mb-4">
      <div className="container text-center">
        <h1 className="display-5 mb-3">Vibes Station Project</h1>

        <p className="lead mb-4">
          Tu veux apparaître dans une playlist éditoriale ? Rejoins-moi sur
          Insta !
        </p>

        <button
          className="btn btn-primary btn-lg mb-5"
          onClick={() => navigate("/projects")}
        >
          Voir les projets
        </button>

        {/* ----- Spotify Playlist ----- */}
        <div className="d-flex justify-content-center mt-4">
          <iframe
            style={{ borderRadius: "12px", width: "100%", height: "152px" }}
            src="https://open.spotify.com/embed/playlist/4afpjnbHykZO6OZWBcnZlI?utm_source=generator"
            width="80%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* DERNIER PROJET MIS EN AVANT */}
      <FeaturedProject projects={projects} />

      {/* VIDEO YOUTUBE EN BAS DE PAGE */}
      <div className="card border-primary p-3 mt-5">
        <h3 className="mb-3">🎬 Découvrez aussi :</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Bc84Z8Wzkho?si=wQJLe2Qt0wUvYNt4"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
       
      </div>
    </header>
  );
}

// ---- PROJECT LIST ----------------------------------------------
function Projects({ data, navigate }) {
  return (
    <section className="container mb-5">
      <div className="row g-3">
        <div className="col-12 mb-3 d-flex justify-content-between align-items-center">
          <h2>Projets</h2>
          <small className="text-muted">{data.projects.length} résultats</small>
        </div>

        {data.projects.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-lg-4">
            <article className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={p.thumbnail}
                    width="60"
                    height="60"
                    className="me-3 rounded"
                    style={{ objectFit: "cover" }}
                    alt={p.title}
                  />
                  <h5 className="m-0">{p.title}</h5>
                </div>

                <p className="card-text flex-grow-1">{p.desc}</p>

                <div className="mt-3 d-grid">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate(`/project/${p.id}`)}
                  >
                    Détails
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- PROJECT DETAILS -------------------------------------------
function ProjectDetails({ project, navigate }) {
  return (
    <section className="container py-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate("/projects")}
      >
        ← Retour
      </button>

      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-3">{project.title}</h2>
          <p>{project.desc}</p>

          <img
            src={project.thumbnail}
            alt={project.title}
            className="img-fluid rounded mb-3"
          />

          <h4 className="mt-3">Spotify</h4>
          <iframe
            src={project.music.spotify}
            width="100%"
            height="152"
            style={{ borderRadius: 12 }}
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        <div className="col-md-6">
          <h4>YouTube</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src={project.music.youtube.replace("watch?v=", "embed/")}
              title="youtube"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- ABOUT -----------------------------------------------------
function About({ data }) {
  return (
    <section className="container mb-5">
      <h2>{data.about.title}</h2>

      <p>{data.about.body}</p>

      <div className="row mt-4">
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Discussion</h5>
            <p>Retrouves-moi sur Insta !</p>
            <a href="#" className="btn btn-primary">
              Instagram
            </a>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h5>Vibes</h5>
            <p>Abonne-toi pour soutenir les sorties !</p>

            <a
              href="https://www.youtube.com/channel/UCLa4Ej-SdzrSM3ux0ONHzPg?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              S’abonner à la chaîne YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- FOOTER ----------------------------------------------------
function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto text-center">
      <small>© {new Date().getFullYear()} Vibes Station</small>
    </footer>
  );
}

// ---- APP ROOT --------------------------------------------------
export default function App() {
  const { route, navigate } = useHashRoute();
  const [data] = useState(sampleData);

  const match = route.match(/^\/project\/(\d+)/);
  const projectId = match ? Number(match[1]) : null;
  const project = projectId && data.projects.find((p) => p.id === projectId);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav current={route} />

      <main className="flex-grow-1">
        {route === "/" && <Home navigate={navigate} />}
        {route === "/projects" && <Projects data={data} navigate={navigate} />}
        {project && <ProjectDetails project={project} navigate={navigate} />}
        {route === "/about" && <About data={data} />}
      </main>

      <Footer />
    </div>
  );
}
