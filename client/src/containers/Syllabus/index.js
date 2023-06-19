import React from "react";

export function Syllabus() {
  return (
    <>
      <div class="col d-flex justify-content-center">
        <h1 className="heading">Webcode</h1>
        <div class="card" style={{ marginTop: "20px" }}>
          <div class="card-body">
            <hr className="sidebar-divider my-4" />
            <h6
              class="card-subtitle mb-2 text-muted"
              style={{ fontSize: "25px" }}
            >
              FSD MERN -<a href="/download/mern-syllabus.pdf">Download</a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
