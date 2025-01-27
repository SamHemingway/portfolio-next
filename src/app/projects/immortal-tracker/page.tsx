export default async function ImmortalTracker() {
  return <div>Immortal Tracker</div>;
}

// import React from "react";
// import Hero from "@/components/Hero";
// import styles from "../projects.module.css";
// import Button from "@/components/Button";
// import Pills from "@/components/Pills";
// import Header from "@/components/Primitives/Heading";
// import CollapsibleCardDeck from "@/components/CollapsibleCardDeck/CollapsibleCardDeck";
// import SlideIntoView from "@/components/SlideIntoView";

// export default function ImmortalTracker() {
//   return (
//     <>
//       <Hero title="immortal tracker">
//         <div className={styles.innerWrapper}>
//           <div
//             style={{
//               position: "relative",
//               paddingBottom: "59.01639344262295%",
//               height: "0",
//             }}
//           >
//             <iframe
//               src="https://www.loom.com/embed/e0467370d74d4cdca610a7f6825db8a0"
//               frameBorder="0"
//               style={{
//                 position: "absolute",
//                 top: "0",
//                 left: "0",
//                 width: "100%",
//                 height: "100%",
//               }}
//             ></iframe>
//           </div>
//           <h2 className={styles.projectHeader}>
//             An app to track completion progress in Total War: Warhammer 3
//           </h2>
//           <div className={styles.buttonLinks}>
//             <Button
//               size="large"
//               variant="fill"
//             >
//               <a href="https://www.immortaltracker.com">Live Site</a>
//             </Button>
//             <Button
//               size="large"
//               variant="fill"
//             >
//               <a href="https://github.com/SamHemingway/immortal-tracker">
//                 Source
//               </a>
//             </Button>
//           </div>

//           <div className={styles.pillsSection}>
//             <div>
//               <h3 className={styles.pillHeader}>TECH STACK</h3>
//               <Pills content={techStack} />
//             </div>
//             <div>
//               <h3 className={styles.pillHeader}>FEATURES</h3>
//               <Pills content={features} />
//             </div>
//           </div>
//         </div>
//       </Hero>
//       <SlideIntoView>
//         <div className="wrapper">
//           <Header level={2}>lessons learned</Header>
//           <CollapsibleCardDeck
//             data={learningMoments}
//             cardsOpen={3}
//           />
//         </div>
//       </SlideIntoView>
//     </>
//   );
// }

// const techStack = ["React", "Styled Components", "Framer Motion"];

// const features = [
//   "Modal",
//   "Tooltip",
//   "React Context",
//   "Auto-complete Search",
//   "Toast Notifications",
// ];

// const learningMoments = [
//   {
//     title: "react specific",
//     id: "react",
//     content: (
//       <>
//         <p>
//           As my first app working from a database, there are too many learning
//           moments to count. Here are just a few:
//         </p>
//         <ul>
//           <li>
//             Components: how to structure them components so they would be easy
//             to use when being consumed. I leaned heavily into using the children
//             prop, and also feel like I've started developing my understanding of
//             when to give more control to the consumer (e.g. using a delegated
//             prop), and which aspects of a component need to be set in stone.
//           </li>
//           <li>
//             State management: I realized part way through this project that
//             there were multiple pieces of state that were required in multiple
//             components, and passing them down as props was becoming unwieldy.
//             This lead to me learning and implementing React context throughout
//             my entire app to manage state.
//           </li>
//           <li>
//             UI updating from state: I had a lot of fun implementing specific
//             colour schemes for each race; it felt like a fun touch to bring the
//             mood of each race into the UI in this way.
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "project planning",
//     id: "project",
//     content: (
//       <>
//         <p>
//           In my career, I’ve been guilty of overthinking my work and trying to
//           lay perfect foundations before jumping in. This leads to analysis
//           paralysis, and the work suffers as a result.
//         </p>

//         <p>
//           I felt that urge in this project, so I decided to run a little
//           experiment: I consciously decided to start building the app without
//           preparing any extensive foundations first (e.g. a design system, what
//           kind of data structure to use etc).
//         </p>

//         <p>
//           This lead to growing pains as the project progressed, such as having
//           to re-write my data structure multiple times to support functionality.
//         </p>

//         <p>
//           I don’t regret this choice: quickly iterating and prototyping
//           different data structures helped me build a better understanding of
//           what will be required for future projects.
//         </p>

//         <p>
//           What I did come to regret, however, was not putting other basics in
//           place: for example, I didn’t implement a consistent design token
//           system until most of the components were already built. This lead to
//           hours of labourious work as I went back over my app and removed all
//           the magic numbers that were sprinkled in everywhere.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "component design",
//     id: "component",
//     content: (
//       <>
//         <p>
//           For the majority of the interactable components (modals, tooltips,
//           select inputs etc), I set a challenge to get as far as possible
//           building them myself. When I reached my limits (mostly around
//           accessibility), I then turned to headless libraries like Radix UI.
//         </p>

//         <p>
//           I built them with the view that I would be re-using them later in
//           future portfolio projects, so the investment now would save time
//           later.
//         </p>

//         <p>
//           I had moments where I invested a lot of time building something
//           myself, only to realize I couldn’t implement something in a complete
//           way (for example, a tooltip that is aware of collisions). I also had
//           moments where learning the API of a component library felt like it was
//           taking more time than just trying to build something myself.
//         </p>

//         <p>
//           I have no regrets at trying to build things myself: failing at
//           something is the best way to learn. But I also understand why so many
//           developers, with actual time/resource constraints in real projects,
//           would turn to these libraries. They’re great.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "architecture",
//     content: (
//       <>
//         <p>
//           The game has 24 races, each of which has 1-8 characters to play. I
//           chose the simple option of mimicking this relationship with an array
//           of objects for each race, each containing an array of lords.
//         </p>

//         <p>
//           I opted early on to store progress in the browsers local storage, as I
//           felt potential users would be put off by any requirement for an
//           account.
//         </p>

//         <p>
//           As for what data to store, a choice: do I store the entire database,
//           or just what the user submits.
//         </p>

//         <p>
//           Whilst I felt that, in this case, storing everything might not be
//           prohibitive from a performance perspective, it might be in future
//           projects. As such, I wanted to get practice storing only what was
//           absolutely necessary and interpolating that data into the UI.
//         </p>

//         <p>
//           It was more of a challenge to build this way, but I’m glad to have got
//           the practice.
//         </p>
//       </>
//     ),
//     id: "architecture",
//   },
//   {
//     title: "accessibility",
//     id: "accessibility",
//     content: (
//       <>
//         <p>
//           To force myself to test this app using a screen-reader, I turned my
//           computer monitor off and used my keyboard only. This helped me
//           discover issues ranging from minor (such as buttons announcing
//           themselves twice), to major ones like focus not being pulled into
//           modals.
//         </p>

//         <p>
//           I would have never have found these issues without trying to use the
//           app in this way. Unfortunately, there are still some issues I’ve been
//           unable to resolve (such as the toast notifications announcing
//           themselves after a modal is closed).
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "tooling",
//     id: "tooling",
//     content: (
//       <>
//         <p>
//           When I used CSS Modules in this portfolio website, I came across a few
//           annoyances (such as having to use really hacky feeling code to have
//           style be informed by state, for example).
//         </p>

//         <p>
//           Accordingly, I decided to use this project to learn Styled Components.
//         </p>

//         <p>
//           I enjoyed it: it felt like a more intuitive way of working in
//           components: and designing components by their state felt a lot easier.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "optimisation",
//     id: "optimisation",
//     content: (
//       <>
//         <p>
//           I knew early on that this was going to be an image-heavy site. When I
//           initially built the site using pngs, the UX was poor: not only was
//           layout shift distracting as images loaded in , but — even worse — the
//           user couldn’t traverse the UI on slow connections due to waiting for
//           images to load.
//         </p>

//         <p>
//           Thankfully, my audience — gamers — generally use modern computers
//           modern browsers. This allowed me to utilise the avif format for my
//           images.
//         </p>

//         <p>
//           The result was an approximately 85-90% reduction in all image sizes,
//           almost entirely eliminating layout shift and making the UX much more
//           smooth overall for a very small loss in image quality.
//         </p>
//       </>
//     ),
//   },
// ];
