export default function JobCard({ job }) {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <div className="flex flex-col gap-1">
        
        <h2 className="text-lg font-semibold text-gray-900">
          {job.title}
        </h2>

        {job.company && (
          <p className="text-sm text-gray-600 font-medium">
            {job.company}
          </p>
        )}

        <p className="text-sm text-gray-500">
          📍 {job.location || "Location not specified"}
        </p>

        <a
          href={job.url}
          target="_blank"
          className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md text-center transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
