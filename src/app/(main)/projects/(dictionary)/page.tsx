// import React from "react";
// import Hero from "@/components/Hero";
// import styles from "../projects.module.css";
// import Button from "@/components/Button";
// import Pills from "@/components/Pills";
// import Header from "@/components/Primitives/Heading";
// import CollapsibleCardDeck from "@/components/CollapsibleCardDeck/CollapsibleCardDeck";
// import SlideIntoView from "@/components/SlideIntoView";

// export default function Dictionary() {
//   return (
//     <>
//       <Hero title="dictionary app">
//         <div className={styles.innerWrapper}>
//           <div
//             style={{
//               position: "relative",
//               paddingBottom: "59.01639344262295%",
//               height: "0",
//             }}
//           >
//             <iframe
//               src="https://www.loom.com/embed/d3cdcf8bea7744e1b605ad78ec1f78bf?sid=e7c1282c-da1c-41ba-88df-3a863faced25"
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
//             Look up the definition of any English word.
//           </h2>
//           <div className={styles.buttonLinks}>
//             <Button
//               size="large"
//               variant="fill"
//             >
//               <a href="https://stately-figolla-f5432c.netlify.app/">
//                 Live Site
//               </a>
//             </Button>
//             <Button
//               size="large"
//               variant="fill"
//             >
//               <a href="https://github.com/SamHemingway/dictionary-web-app">
//                 Source code
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

// const techStack = ["React", "Styled Components", "Framer Motion", "prop-types"];
// const features = [
//   "Web API",
//   "Debounced values",
//   "Loading skeleton",
//   "Screen-reader tested",
//   "Dark/light mode",
// ];

// const learningMoments = [
//   {
//     title: "Web APIs",
//     id: "web-apis",
//     content: (
//       <>
//         <p>
//           I tackled this{" "}
//           <a href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL">
//             Frontend Mentor challenge
//           </a>{" "}
//           to build experience working with web APIs. I chose to interpret the
//           search functionality as updating the result live, rather than the user
//           manually submitting a search.
//         </p>
//         <p>
//           The issue: how did I ensure that I wasn't blasting the API with a
//           request for every character the user typed?
//         </p>
//         <p>
//           A bit of Googling lead to me learning about debouncing. I built a
//           simple hook to debounce the text input to make a GET request after
//           enough time had passed that the user would most likely have stopped
//           typing (500ms).
//         </p>
//         <p></p>
//       </>
//     ),
//   },
//   {
//     title: "user testing/experience",
//     id: "testing",
//     content: (
//       <>
//         <p>
//           After building an MVP of the search functionality, I asked my partner
//           and my parents (the ultimate test) to use the app to get real life
//           feedback on how intuitive it was to use. Here's what I learned:
//         </p>
//         <ul>
//           <li>
//             They didn't know that all they had to do was type: their instinct
//             was to put a word into the search input and hit enter.
//           </li>
//           <li>
//             After they'd done that, they weren't sure if the app was working or
//             not: there was no feedback that the word had been accepted as the
//             app was not only waiting for the bounced value, but then also had to
//             fetch the data.
//           </li>
//         </ul>
//         <p>This feedback lead to me implementing two UX changes:</p>
//         <ol>
//           <li>
//             I'd never implemented a loading skeleton before, and it felt like
//             this would tackle both of the above identified issues. Now, the
//             moment a user starts typing, the loading skeleton appears to inform
//             the user that the app is loading a result.
//           </li>
//           <li>
//             It made a lot of sense that people will hit 'enter' in these
//             situations. I felt the best way to handle this "unnecessary" action
//             was to simply mimic the behaviour of what the user would expect if
//             they pressed enter on an input: disable focus on the input.
//           </li>
//         </ol>
//       </>
//     ),
//   },
//   {
//     title: "Responsive design",
//     id: "responsive",
//     content: (
//       <>
//         <p>
//           Wherever possible, I try to avoid using media queries to implement
//           changes to layout — for example, it feels a little clunky when a
//           heading suddenly shifts from 36px to 64px.
//         </p>
//         <p>
//           This lead me to learn more about the CSS clamp function, and how we
//           can use{" "}
//           <a href="https://fluidtypography.com/#app-get-started">
//             fluid typography
//           </a>{" "}
//           tools to implement them.
//         </p>
//         <p>
//           However, it's simply not scalable to go to a website, plug in your
//           values and then paste the result into your app.
//         </p>
//         <p>
//           So, I did what any <del>lazy</del> efficient developer would do... I
//           wrote{" "}
//           <a href="https://github.com/SamHemingway/dictionary-web-app/blob/main/src/helpers/calculateLinearInterpolation.jsx">
//             a reusable function to do it for me
//           </a>{" "}
//           with full documntation using JSDoc.
//         </p>
//         <p>
//           Now, I simply use this function when building my CSS custom properties
//           for any layout element that needs to smoothly transition between 2
//           sizes when the viewport width changes.
//         </p>
//       </>
//     ),
//   },
// ];
