import { Code, Lightbulb, Rocket, Sparkles, BookOpen, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Code,
      title: "Interactive Lessons",
      description: "Hands-on exercises with instant AI feedback and guidance from experienced instructors.",
    },
    {
      icon: Rocket,
      title: "Real Projects",
      description: "Build real-world apps with AI hints and support from mentors to help you learn faster.",
    },
    {
      icon: Sparkles,
      title: "AI Coding Mentor",
      description: "Personalized suggestions and explanations while coding, plus optional one-on-one human mentorship.",
    },
    {
      icon: Lightbulb,
      title: "Flexible Learning",
      description:
        "Learn at your own pace — AI adapts to your skill level, and instructors provide feedback when needed.",
    },
    {
      icon: BookOpen,
      title: "Many Courses",
      description:
        "Access hundreds of courses covering web development, AI, mobile apps, and more for all skill levels.",
    },
    {
      icon: Users,
      title: "Group Chat",
      description:
        "Connect with fellow learners, share knowledge, and collaborate on projects in real-time community discussions.",
    },
  ]

  return (
    <section id="features" className="relative py-20 px-6 bg-black overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          Platform Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-black/60 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
