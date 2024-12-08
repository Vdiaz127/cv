export default function Section({ id, title, description, children }) {
    return (
      <section
        id={id}
        className="py-16 px-6 bg-gray-100 border-b border-gray-300"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          {description && (
            <p className="text-gray-600 mb-6">{description}</p>
          )}
          <div>{children}</div>
        </div>
      </section>
    );
  }
  