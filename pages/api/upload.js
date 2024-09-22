import connectMongoDB from "@/backend/mongodb";
import LandingPage from "@/backend/landingPage";

export default async function handler(req, res) {
  const { method } = req;

  console.log(method, "method");
  await connectMongoDB();


  switch (method) {
    case "POST":
    try {
        // get from request body as formdata
        // landingPageId key

      const landingPage = await LandingPage.findById(landingPageId);

      console.log(landingPage, "landing page");

      if (!landingPage || !landingPage.content.profileImage) {
        return res.status(404).json({ error: "Image not found" });
      }

      const { data, contentType } = landingPage.content.profileImage;

      res.setHeader("Content-Type", contentType);
      res.send(data);
    } catch (error) {
      console.error("Error serving image:", error);
      res.status(500).json({ error: "Error serving image" });
    }
    break;
    
    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}
