import LandingPage from "@/backend/landingPage";
import UserMealPreference from "@/backend/mealPreference";
import connectMongoDB from "@/backend/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "POST":
      try {
        const landingPage = new LandingPage({
          ...req.body,
          dateModified: new Date(),
        });
        await landingPage.save();
        res.status(201).json({
          message: "Landing page created successfully",
          landingPage,
        });
      } catch (error) {
        console.error("Error landing page:", error);
        res.status(500).json({ message: "Error creating landing page" });
      }
      break;

    case "GET":
      try {
        const { id, page, user_email } = req.query;

        if (id) {
          const landingPage = await LandingPage.findById(id);
          if (!landingPage) {
            return res.status(404).json({
              message: "Landing page not found",
            });
          }
          return res.status(200).json({
            message: "Landing page found",
            landingPage,
          });
        }

        if (page) {
          const landingPage = await LandingPage.find({
            landingPage,
          });
          if (!landingPage) {
            return res.status(404).json({
              message: "Landing page not found",
            });
          }
          return res.status(200).json(landingPage);
        }

        if (user_email) {
          const landingPages = await LandingPage.find({
            user_email,
          }).sort({ dateModified: -1 });
          return res.status(200).json(landingPages);
        }

        if (Object.keys(req.query).length === 0) {
          const landingPages = await LandingPage.find().sort({
            dateModified: -1,
          });
          return res.status(200).json(landingPages);
        }

        return res.status(400).json({ message: "Invalid query" });
      } catch (error) {
        console.error("Error landing pages:", error);
        res.status(500).json({ message: "Error landing pages" });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const updatedLandingPage = await LandingPage.findByIdAndUpdate(
            id, 
            { ...req.body, dateModified: new Date() },
            { new: true }
        )

        if (!updatedLandingPage) {
            return res.status(404).json({ 
                message: "Landing page not found"
            })
        }

        return res.status(200).json(updatedLandingPage);
      } catch (error) {
        console.error("Error updating landing page:", error);
        res.status(500).json({ message: "Error updating landing page" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;

        if (id) {
            const deletedLandingPage = await LandingPage.findByIdAndDelete(
                id
            );
            if (!deletedLandingPage) {
                return res.status(404).json({
                    message: "Landing page not found"
                })
            }
            return res.status(200).json(deletedLandingPage)
        }

        return res.status(400).json({ message: "Invalid query" });
      } catch (error) {
        console.error("Error deleting landing page:", error);
        res.status(500).json({ message: "Error deleting landing page" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
