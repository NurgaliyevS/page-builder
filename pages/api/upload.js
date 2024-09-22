import formidable from 'formidable';
import fs from 'fs/promises';
import connectMongoDB from "@/backend/mongodb";
import LandingPage from "@/backend/landingPage";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "POST":
      try {
        const form = formidable();
        
        const [fields, files] = await new Promise((resolve, reject) => {
          form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve([fields, files]);
          });
        });

        const landingPageId = fields.landingPageId?.[0];
        const file = files.file?.[0];

        if (!landingPageId) {
          return res.status(400).json({ error: "Landing page ID is required" });
        }

        if (!file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        const fileData = await fs.readFile(file.filepath);
        const contentType = file.mimetype;

        const landingPage = await LandingPage.findById(landingPageId);

        if (!landingPage) {
          return res.status(404).json({ error: "Landing page not found" });
        }

        landingPage.content.profileImage = {
          data: fileData,
          contentType: contentType
        };

        await landingPage.save();

        res.status(200).json({ message: "File uploaded successfully", landingPage });
      } catch (error) {
        console.error("Error handling file upload:", error);
        res.status(500).json({ error: "Error handling file upload" });
      }
      break;
    
    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}