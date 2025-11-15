import axios from "axios";

export async function getAdzunaJobs(query = "") {
  try {
    const url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_API_KEY}&results_per_page=20&what=${query}`;

    const res = await axios.get(url);
    const jobs = res.data.results || [];

    return jobs.map(job => ({
      title: job.title,
      company: job.company.display_name,
      location: job.location.display_name,
      url: job.redirect_url
    }));
  } catch (error) {
    console.error("Adzuna API error:", error.message);
    return [];
  }
}
