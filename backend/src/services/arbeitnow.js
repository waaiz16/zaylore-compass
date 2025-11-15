import axios from "axios";

export async function getArbeitnowJobs(query = "") {
  try {
    const url = `https://arbeitnow.com/api/job-board-api`;
    const res = await axios.get(url);

    const jobs = res.data.data || [];

    // Filter manually because API does not allow search query
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    return filtered.map(job => ({
      title: job.title,
      company: job.company,
      location: job.location,
      url: job.url,
    }));
  } catch (error) {
    console.error("Arbeitnow API error:", error.message);
    return [];
  }
}
