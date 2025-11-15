import express from "express";
import { getArbeitnowJobs } from "../services/arbeitnow.js";
import { getRemotiveJobs } from "../services/remotive.js";
import { getAdzunaJobs } from "../services/adzuna.js";
import { getJSearchJobs } from "../services/jsearch.js";

const router = express.Router();

router.get("/jobs", async (req, res) => {
  try {
    const { query = "" } = req.query;

    // Fetch from all providers in parallel
    const [arbeitnow, remotive, adzuna, jsearch] = await Promise.all([
      getArbeitnowJobs(query),
      getRemotiveJobs(query),
      getAdzunaJobs(query),
      getJSearchJobs(query)
    ]);

    // Combine results
    const allJobs = [
      ...arbeitnow,
      ...remotive,
      ...adzuna,
      ...jsearch
    ];

    res.json({
      success: true,
      total: allJobs.length,
      jobs: allJobs
    });
  } catch (error) {
    console.error("Job aggregation error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

