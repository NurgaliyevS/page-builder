import LandingPage from "@/backend/landingPage";
import connectMongoDB from "@/backend/mongodb";
import User from "@/backend/user";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  if (!mongoose?.models?.User) {
    mongoose?.model("User", User?.schema);
  }

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
        console.error("Error creating landing page:", error);
        if (
          error.code === 11000 &&
          error.keyPattern &&
          error.keyPattern.personalLink
        ) {
          res.status(400).json({
            message:
              "Personal link already exists. Please choose a different one.",
          });
        } else {
          res.status(500).json({ message: "Error creating landing page" });
        }
      }
      break;

    case "GET":
      try {
        const { id, page, userId } = req.query;

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

        if (userId) {
          const landingPages = await LandingPage.find({
            userId,
          }).populate("userId", "variant_name").sort({ dateModified: -1 });
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
        ).populate("userId", "variant_name");

        if (!updatedLandingPage) {
          return res.status(404).json({
            message: "Landing page not found",
          });
        }

        return res.status(200).json({
          landingPage: updatedLandingPage,
          userPlan: updatedLandingPage?.userId
            ? updatedLandingPage?.userId?.variant_name
            : null,
        });
      } catch (error) {
        console.error("Error updating landing page:", error);
        res.status(500).json({ message: "Error updating landing page" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;

        if (id) {
          const deletedLandingPage = await LandingPage.findByIdAndDelete(id);
          if (!deletedLandingPage) {
            return res.status(404).json({
              message: "Landing page not found",
            });
          }
          return res.status(200).json(deletedLandingPage);
        }

        return res.status(400).json({ message: "Invalid query" });
      } catch (error) {
        console.error("Error deleting landing page:", error);
        res.status(500).json({ message: "Error deleting landing page" });
      }
      break;

    case "PATCH":
      try {
        const { id } = req.query;
        const { email } = req.body;

        if (!id || !email) {
          return res.status(400).json({ message: "Missing id or email" });
        }

        const landingPage = await LandingPage.findById(id);

        if (!landingPage) {
          return res.status(404).json({ message: "Landing page not found" });
        }

        const checkUser = await LandingPage.findOne({ "subscribers.email": email });

        if (checkUser) {
          return res.status(400).json({ message: "Email already exists" });
        }

        const updatedLandingPage = await LandingPage.findByIdAndUpdate(
          id,
          {
            $push: { subscribers: { email } },
            dateModified: new Date(),
          },
          { new: true }
        );

        if (!updatedLandingPage) {
          return res.status(404).json({ message: "Landing page not found" });
        }

        return res.status(200).json({
          message: "Subscriber added successfully",
          landingPage: updatedLandingPage,
        });
      } catch (error) {
        console.error("Error adding subscriber:", error);
        res.status(500).json({ message: "Error adding subscriber" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
