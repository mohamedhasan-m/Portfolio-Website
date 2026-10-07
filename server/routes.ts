import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { contactSchema } from "@shared/schema";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
app.get("/api/resume/download", async (req, res) => {
  try {
    const correctFilename = "Mohamed_Hasan_Resume.pdf";

    const resumePath = path.join(__dirname, "..", "attached_assets", correctFilename);
    const downloadFilename = "Mohamed_Hasan_Resume.pdf";
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${downloadFilename}"`);
    
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error('Error sending resume file:', err);
        res.status(404).json({ message: "Resume file not found" });
      }
    });
  } catch (error) {
    console.error('Resume download error:', error);
    res.status(500).json({ message: "Error downloading resume" });
  }
});

  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = contactSchema.safeParse(req.body);

      if (!validationResult.success) {
        return res.status(400).json({
          message: "Invalid contact form data",
          errors: validationResult.error.flatten().fieldErrors,
        });
      }

      const { name, email, message } = validationResult.data;
      const emailDomain = email.includes("@") ? email.split("@")[1] : "unknown";

      if (process.env.NODE_ENV === "production") {
        console.log("Contact form submission metadata:", {
          nameLength: name.length,
          emailDomain,
          messageLength: message.length,
        });
      } else {
        console.log("Contact form submission metadata:", {
          name,
          email,
          messageLength: message.length,
        });
      }

      res.json({ message: "Message sent successfully" });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ message: "Error sending message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}