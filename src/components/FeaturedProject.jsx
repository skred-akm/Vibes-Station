import React from "react";

export default function FeaturedProject({ projects }) {
  if (!projects || projects.length === 0) return null;

  // On prend le dernier projet comme "featured"
  const project = projects[projects.length - 1];

  return (
    <div className="card border-5 border-warning p-4 my-5 ">
      <h3 className="card-title mb-3 text-bg-info p-2">
        🎧 Dernier projet mis en avant : {project.title}
        
        </h3>
      <div className="row g-3 border border-warning d-flex justify-content-center m-1 py-2  ">
        {/* <div className="col-md-4">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="img-fluid rounded"
            style={{ objectFit: "cover" }}
          />
        </div> */}

        <div className="col-md-8">
          <p>{project.desc}</p>

          {/* Lecteur Spotify intégré */}
          <div className="mb-3">
            <iframe
              src={project.music.spotify}
              width="100%"
              height="152"
              style={{ borderRadius: "12px" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Spotify - ${project.title}`}
            ></iframe>
          </div>

          {/* Vidéo YouTube intégrée */}
          <div className="ratio ratio-16x9">
            <iframe
              src={project.music.youtube.replace("watch?v=", "embed/")}
              title={`YouTube - ${project.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
