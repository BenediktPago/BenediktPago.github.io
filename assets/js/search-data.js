// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Slides of selected workshop and conference talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Past and present courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-for-itcs-2026-in-milan-featuring-our-new-paper-symmetric-algebraic-circuits-and-homomorphism-polynomials-with-anuj-dawar-and-tim-seppelt-we-give-a-surprising-graph-theoretic-characterisation-of-all-polynomials-computable-by-efficient-symmetric-circuits-check-out-our-video-talk",
          title: 'Excited for ITCS 2026 in Milan featuring our new paper Symmetric Algebraic Circuits...',
          description: "",
          section: "News",},{id: "news-our-brand-new-paper-lower-bounds-in-algebraic-complexity-via-symmetry-and-homomorphism-polynomials-with-prateek-dwivedi-and-tim-seppelt-has-just-been-accepted-at-stoc-2026-building-on-the-framework-from-our-recent-itcs-26-paper-we-solve-the-long-standing-open-problem-of-separating-the-algebraic-complexity-classes-vf-vbp-and-vp-with-restriction-to-symmetric-circuits-at-least",
          title: 'Our brand-new paper Lower Bounds in Algebraic Complexity via Symmetry and Homomorphism Polynomials...',
          description: "",
          section: "News",},{id: "news-upcoming-trip-to-paris-for-csl-2026-i-ll-be-speaking-about-arity-hierarchies-for-quantifiers-closed-under-partial-polymorphisms-my-new-paper-together-with-anuj-dawar-and-lauri-hella-that-explores-a-new-perspective-on-finite-model-theory-inspired-by-methods-from-the-world-of-constraint-satisfaction-csp",
          title: 'Upcoming trip to Paris for CSL 2026. I’ll be speaking about Arity hierarchies...',
          description: "",
          section: "News",},{id: "news-looking-forward-to-the-annual-meeting-of-the-algorithmic-model-theory-community-almoth-2026-which-is-happening-in-passau-this-year",
          title: 'Looking forward to the annual meeting of the Algorithmic Model Theory community AlMoTh...',
          description: "",
          section: "News",},{id: "news-at-bctcs-2026-in-birmingham-i-will-be-giving-a-talk-about-lower-bounds-in-algebraic-complexity-via-symmetry-and-homomorphism-polynomials",
          title: 'At BCTCS 2026 in Birmingham, I will be giving a talk about Lower...',
          description: "",
          section: "News",},{id: "news-in-spring-i-will-be-attending-the-durham-symposium-on-the-mathematics-of-constraint-satisfaction-problems",
          title: 'In spring I will be attending the Durham Symposium on the Mathematics of...',
          description: "",
          section: "News",},{id: "projects-arity-hierarchies-for-quantifiers-closed-under-partial-polymorphisms",
          title: 'Arity Hierarchies for Quantifiers closed under Partial Polymorphisms',
          description: "CSL 2026, Paris",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-symmetric-proofs-in-the-ideal-proof-system",
          title: 'Symmetric Proofs in the Ideal Proof System',
          description: "Oxford Proof Complexity Workshop 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-limitations-of-affine-csp-algorithms",
          title: 'Limitations of Affine CSP Algorithms',
          description: "ICALP 2025, Aarhus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-symmetric-algebraic-circuits-and-homomorphism-polynomials",
          title: 'Symmetric Algebraic Circuits and Homomorphism Polynomials',
          description: "FMT Workshop 2025, Les Houches",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-limitations-of-affine-csp-algorithms-long-version",
          title: 'Limitations of Affine CSP Algorithms (long version)',
          description: "CSP World Congress 2024, Colfosco",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-limitations-of-game-comonads-for-invertible-map-equivalence",
          title: 'Limitations of Game Comonads for Invertible-Map Equivalence',
          description: "CSL 2024, Naples",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-on-logic-in-complexity-theory-and-birds-and-frogs",
          title: 'On logic in complexity theory, and birds and frogs',
          description: "Logic Mentoring Workshop @ CSL 2023, Warsaw",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-lower-bounds-for-choiceless-polynomial-time-via-xor-circuits",
          title: 'Lower bounds for Choiceless Polynomial Time via XOR-circuits',
          description: "Highlights of Logic, Games and Automata 2023, Kassel",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-symmetric-algebraic-circuits-and-homomorphism-polynomials-video",
          title: 'Symmetric Algebraic Circuits and Homomorphism Polynomials (video)',
          description: "ITCS 2026, Milan",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-a-finite-model-theoretic-view-on-propositional-proof-complexity",
          title: 'A Finite-Model-Theoretic View on Propositional Proof Complexity',
          description: "Simons Online Workshop 2021 on Theoretical Foundations of SAT/SMT Solving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/pago_b_1# your arXiv author ID.html", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/206/3399.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%65%64%69%6B%74.%70%61%67%6F@%63%6C.%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6377-1230", "_blank");
        },
      },];
