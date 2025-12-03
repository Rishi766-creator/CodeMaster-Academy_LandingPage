import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice",
      role: "Student",
      quote:
        "The AI mentor helped me debug my code instantly, and my instructor's guidance made learning even easier — saved me hours!",
      avatar: "/image2.png",
    },
    {
      name: "Rahul",
      role: "Student",
      quote:
        "I never felt stuck; the AI suggestions were great, and my mentor's feedback helped me understand tricky concepts.",
      avatar: "/image1.png",
    },
    {
      name: "Maria",
      role: "Student",
      quote: "Combining real projects with AI guidance and support from my instructor is the best way to learn coding.",
      avatar: "/image3.png",
    },
  ]

  return (
    <>
    <section  id="testimonials" className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Purple glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          What Our Students Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-black/60 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 mb-6 rounded-full overflow-hidden ring-2 ring-purple-500/50 group-hover:ring-purple-400/70 transition-all duration-300">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote */}
                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

                {/* Name and Role */}
                <div>
                  <h4 className="text-white font-semibold text-lg group-hover:text-purple-200 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
