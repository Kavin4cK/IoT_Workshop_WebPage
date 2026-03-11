export default function FeedbackPage() {
  // Placeholder link - will be replaced with actual Google Form link later
  const feedbackFormLink = 'https://forms.gle/Pz1qPkGTkNU8aCqt5';

  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        {/* Feedback Message */}
        <h1 className="text-4xl font-bold text-primary-text mb-6">
          Workshop Feedback
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We value your feedback. Please share your experience by filling out the feedback form.
        </p>

        {/* Submit Feedback Button */}
        <a
          href={feedbackFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-text text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
        >
          Submit Feedback
        </a>

        {/* Optional Note */}
        <p className="text-sm text-gray-500 mt-6 italic">
          You will be redirected to a Google Form
        </p>
      </div>
    </div>
  );
}
