import MemberCard from '../MemberCard'

const ClubCoordinators = [
  {
    id: 1,
    name: "Priyanshu Garg",
    position: "Club Co-ordinator",
    image: 'https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2Fpriyanshu_garg.jpg?alt=media&token=0f150692-d661-49e4-9778-19bcd3027c3e',
    bio: "Chemical Engineering student passionate about innovative solutions. Leading team projects and organizing technical events.",
    social: {
      instagram: "https://instagram.com/_priyanshu.garg",
      linkedin: "https://www.linkedin.com/in/priyanshu-garg-511082338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    }
  },
  {
    id: 2,
    name: "Rohit Kumar",
    position: "Club Co-ordinator",
    image: 'https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2Frohit.jpg?alt=media&token=d3e29ebd-3109-421b-911f-8df6732243e9',
    bio: "Specializing in mentoring juniors to reach their full potential. Passionate about driving innovation in chemical engineering.",
    social: {
      instagram: "https://www.instagram.com/raw_hit03?igsh=MWY4ejIzdWQ5ajJmdg==",
      linkedin: "https://www.linkedin.com/in/rohit-kumar-a57a34323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    }
  },
]

export default function ClubCoordinator() {
  return (
    <div className="bg-gradient-to-b from-black via-indigo-600/20 to-black">
      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
            Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Coordinators</span>
          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our dedicated team of coordinators who lead Team Hermetica towards excellence in chemical engineering innovation.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ClubCoordinators.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </main>
    </div>
  )
}

