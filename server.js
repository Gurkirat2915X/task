const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", "views");



// Data for the infographic steps
const steps = [
  {
    number: 1,
    title: "Simplifying Complex Information",
    description:
      "Infographics simplify complex data and concepts into digestible visual formats. This is particularly useful for e-commerce brands or service providers looking to explain products or services quickly.",
  },
  {
    number: 2,
    title: "Boosting Brand Awareness",
    description:
      "Consistent use of infographics helps build brand identity. By using specific colors, fonts, and styles, brands can create a distinct visual language that resonates with users and enhances recall.",
  },
  {
    number: 3,
    title: "Encouraging Shares and Saves",
    description:
      "Infographics are highly shareable content; they encourage users to save, pin, or share them due to their informative nature. This can lead to organic reach and visibility on Pinterest.",
  },
  {
    number: 4,
    title: "Driving Traffic to Websites",
    description:
      "Infographics can include call-to-actions (CTAs) linking back to your website or landing page, facilitating the conversion of Pinterest users into website visitors, thus driving traffic effectively.",
  },
  {
    number: 5,
    title: "Leveraging SEO Benefits",
    description:
      "When properly tagged with keywords and descriptions, infographics can enhance SEO on Pinterest. This can improve discoverability, making it easier for users interested in specific topics to find your pins.",
  },
  {
    number: 6,
    title: "Creating Educational Content",
    description:
      "Infographics can serve as educational tools or tutorials, providing value to your audience. This type of informative content can establish authority in your niche and attract a loyal following.",
  },
];

// Route for the homepage
app.get("/", (req, res) => {
  res.render("index", { steps: steps });
});

// Start server
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
