import AboutSection from "../components/AboutSection/AboutSection";


function About() {
 return (
    <>
      <AboutSection
        backgroundImage="/assets/MarioandAdrian.jpg"
        title="Behind Little Lemon!"
        subtitle="Mario & Adrian"
         description={
    <>
      Mario and Adrian are cousins and chefs, running a family-owned restaurant inspired by the meals they grew up sharing.<br />
      Their cooking reflects tradition, care, and a deep love for bringing people together through food.
    </>
  }
      >
        {/* signatures or extra elements go here */}
      </AboutSection>

      <AboutSection
        backgroundImage="/assets/grandmahouse.png"
        title="Our Story"
        subtitle="How It All Started"
        description={
          <>
            It all began under a little lemon tree in front of grandma’s house. <br />
            Every Sunday, Mario and Adrian gathered there, sharing comfort food filled with love and simple flavors. <br />
            Those moments inspired a dream: to let everyone experience the same warmth and joy they grew up with.
          </>
        }
      />
      <AboutSection
        backgroundImage="/assets/grandma.png"
        title="Recipes from Grandma"
        subtitle="Filled with Love"
        description={
          <>
            Every dish is based on family recipes passed down through generations, thoughtfully updated with a modern touch while staying true to their roots.
          </>
        }
      />
    </>
  );
}
export default About;