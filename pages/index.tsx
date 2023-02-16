import Head from "next/head";
import { Badge, Col, Container, Row } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Head>
        <title>Samuel Ainsworth ⚡</title>
      </Head>
      <Container
        style={{
          backgroundColor: "#fefefe",
          maxWidth: "600px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
        fluid="sm"
      >
        <Row className="justify-content-md-center">
          <Col>
            <hr />
            <h1
              style={{
                fontWeight: "bold",
                marginTop: "0.5em",
              }}
            >
              Samuel Ainsworth
            </h1>
            <img
              src="/squatting.jpg"
              alt="Profile picture"
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2
              style={{
                marginTop: "0.5em",
              }}
            >
              About me
            </h2>
            <p style={{ backgroundColor: "yellow" }}>
              <span style={{ textDecoration: "line-through" }}>
                I am graduating Spring 2022 and currently on the job market!
                Feel free to{" "}
                <a href="mailto:skainsworth@gmail.com">get in touch</a>!
                Here&apos;s my{" "}
                <a href="https://docs.google.com/document/d/1tkn7R81TYDrTEphKRFxw7UqwiWb4PcVYuzWdX2mzaOU/edit?usp=sharing">
                  CV
                </a>
                .
              </span>{" "}
              <br />
              I&apos;m thrilled to announce that I will be joining{" "}
              <b>Cruise AI Research</b> as a Research Scientist this fall. Shout
              out to{" "}
              <a href="https://www.linkedin.com/in/chaiyuning/">Yuning Chai</a>{" "}
              and{" "}
              <a href="https://www.linkedin.com/in/lisakattan/">Lisa Kattan</a>!
            </p>
            <p>
              I&apos;m a hacker at heart, moonlighting as a PhD candidate in the
              School of Computer Science &amp; Engineering at the University of
              Washington where I work on machine learning and robotics. I&apos;m
              advised by <a href="https://goodrobot.ai/">Sidd Srinivasa</a>. My
              research interests span motion planning, reinforcement learning,
              deep learning, optimization, and formal verification. In the past
              I&apos;ve also worked on Bayesian modeling, variational inference,
              deep generative models, and more.
            </p>
            <p>
              Before joining UW I spent four wonderful years at Brown
              University, followed by a stint in Silicon Valley working on
              self-driving cars among other wild things.
            </p>
            <p>
              You can check me out on{" "}
              <a href="https://twitter.com/SamuelAinsworth">Twitter</a>,{" "}
              <a href="https://github.com/samuela">GitHub</a>, and{" "}
              <a href="https://www.linkedin.com/in/samuelainsworth">LinkedIn</a>
              .
            </p>
            <h2>Blog and news</h2>
            <ul>
              <li>
                <i>July 19, 2021:</i> 📝{" "}
                <a href="pluto_interval_blog.jl.html">
                  God Give Me a Sine: Adventures in Interval Arithmetic
                </a>
                . A new blog post on interval arithmetic, and some of its
                quirks.
              </li>
              <li>
                <i>March 5, 2021:</i> Our work 📜{" "}
                <a href="https://arxiv.org/abs/2012.06684">
                  Faster Policy Learning with Continuous-Time Gradients
                </a>{" "}
                has been accepted to L4DC 2021!
              </li>
              <li>
                <i>Sept. 3, 2019:</i> Our paper 📜{" "}
                <a href="https://arxiv.org/abs/1912.01649">
                  Mo States Mo Problems
                </a>{" "}
                has been accepted to NeurIPS 2019!
              </li>
              <li>
                <i>May 15, 2018:</i> Excited to join Google for a research
                internship this summer advised by{" "}
                <a href="https://derifatives.github.io/">Rif A. Saurous</a> and{" "}
                <a href="https://research.google/people/KevinMurphy/">
                  Kevin Murphy
                </a>
                !
              </li>
            </ul>
            <h2>Publications</h2>
            <p>
              This is often out of date. Consider checking my{" "}
              <a href="https://scholar.google.com/citations?user=YvtGXcwAAAAJ&hl=en">
                Google Scholar profile
              </a>
              .
            </p>
            <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img
                    src="git-re-basin.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="https://arxiv.org/abs/2209.04836">
                      Git Re-Basin: Merging Models modulo Permutation Symmetries
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    <b>S. Ainsworth</b>, J. Hayase, S. Srinivasa
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">ICLR 2023 Oral</Badge>
                    <br></br> [
                    <a href="https://docs.google.com/spreadsheets/d/1INZI9epkfBkPOlKuJFaffUCOKDns87Iqg4zovHnf-zs/edit">
                      #1 highest score out of 4,849 submissions
                    </a>
                    ] [
                    <a href="https://github.com/samuela/git-re-basin">code</a>]
                    [
                    <a href="https://www.youtube.com/watch?v=svn-EBN2kAk">
                      video
                    </a>
                    ]
                    <p>
                      Invited talks at Berkeley AI Research, Columbia, DLCT,
                      Pacific Northwest National Labs, Cruise, and more.
                    </p>
                  </p>
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img src="ctpg.png" style={{ width: "100%" }} alt="" />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="https://arxiv.org/abs/2012.06684">
                      Faster Policy Learning with Continuous-Time Gradients
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    <b>S. Ainsworth</b>, K. Lowrey, J. Thickstun, Z. Harchaoui,
                    S. Srinivasa
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">L4DC 2021</Badge> [
                    <a href="https://github.com/samuela/ctpg">code</a>] [
                    <a href="ctpg_poster.pdf">poster</a>]
                  </p>
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img src="msmp.png" style={{ width: "100%" }} alt="" />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="https://arxiv.org/abs/1912.01649">
                      Mo&apos; States Mo&apos; Problems: Emergency Stop
                      Mechanisms from Observation
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    <b>S. Ainsworth</b>, M. Barnes, S. Srinivasa
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">NeurIPS 2019</Badge> [
                    <a href="https://github.com/samuela/e-stops">code</a>] [
                    <a href="estop-poster.pdf">poster</a>]
                  </p>
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img src="mosaic.png" style={{ width: "100%" }} alt="" />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="https://arxiv.org/abs/1912.07777">
                      Mosaic: A Sample-Based Database System for Open World
                      Query Processing
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    L. Orr, <b>S. Ainsworth</b>, W. Cai, K. Jamieson, M.
                    Balazinska, D. Suciu
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">CIDR 2020</Badge>
                  </p>
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img src="factvae.png" style={{ width: "100%" }} alt="" />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="https://arxiv.org/abs/1806.09060">
                      Disentangled VAE Representations for Multi-Aspect and
                      Missing Data
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    <b>S. Ainsworth</b>, N. Foti, E. Fox
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">arXiv preprint</Badge>
                  </p>
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img src="oi-vae.png" style={{ width: "100%" }} alt="" />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="http://proceedings.mlr.press/v80/ainsworth18a.html">
                      oi-VAE: Output Interpretable VAEs for Nonlinear Group
                      Factor Analysis
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    <b>S. Ainsworth</b>, N. Foti, A. Lee, E. Fox
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">ICML 2018</Badge> [
                    <a href="https://vimeo.com/287767071">video</a>]
                  </p>
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col xs={3} style={{ backgroundColor: "white" }}>
                  <img
                    src="interactive-preferences-learning.png"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col xs={9} style={{ backgroundColor: "white" }}>
                  <p style={{ fontSize: "0.875rem", marginBottom: 0 }}>
                    <a href="https://arxiv.org/abs/1612.04453">
                      Interactive Preference Learning of Utility Functions for
                      Multi-Objective Optimization
                    </a>
                  </p>
                  <small style={{ fontSize: "0.75rem" }}>
                    I. Dewancker, M. McCourt, <b>S. Ainsworth</b>
                  </small>
                  <p style={{ fontSize: "0.875rem" }}>
                    <Badge className="bg-success">NIPS 2016 workshop</Badge>
                  </p>
                </Col>
              </Row>
            </Container>
            <h2>Selected projects</h2>
            <ul>
              <li>
                <a href="https://github.com/samuela/rustybox">rustybox</a> is a
                complete, 100% Rust fork of the busybox project.
              </li>
              <li>
                <a href="https://github.com/samuela/bidirectional-typing">
                  bidirectional-typing
                </a>{" "}
                is a bidirectional type inference algorithm based on{" "}
                <a href="https://www.cl.cam.ac.uk/~nk480/bidir.pdf">
                  this paper
                </a>
                , and includes a pedagogically-minded design and readme for
                others getting started with bidirectional typing.
              </li>
              <li>
                <a href="https://github.com/samuela/remod">remod</a> is a
                user-friendly chmod replacement.
              </li>
              <li>
                <a href="https://github.com/samuela/phonetelepathy">
                  phonetelepathy
                </a>{" "}
                transmits data between phones using only audio. The magic lies
                in error correction.
              </li>
            </ul>
            <p>
              And many more on{" "}
              <a href="https://github.com/samuela">my GitHub</a>
              ...
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
