import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { GithubGraph } from "@/components/github";
import { TestimonialCard } from "@/components/testimonial-card";
import { CertificationCard } from "@/components/certification-card";
import { CertificationCardsCarousel } from "@/components/certification-card";
import { TestimonialCarousel } from "@/components/testimonial-card";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={`Hi, I am ${DATA.name.split(" ")[0]} 👋`} // Update
            />

              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>

          {/* Resume Button with BlurFade */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex justify-items-start">
              <a
                href="https://drive.google.com/file/d/1dsu32FxHFZzK5GIQfQuOYP0NgNnQ9-P8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                See My Resume
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                offerLetterUrl={work.offerLetterUrl}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="Clubs">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">College Clubs</h2>
          </BlurFade>
          {DATA.clubs.map((club, id) => (
            <BlurFade key={club.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                logoUrl={club.logoUrl}
                altText={club.company}
                title={club.company}
                subtitle={club.title}
                href={club.href}
                badges={club.badges}
                period={`${club.start} - ${club.end ?? "Present"}`}
                description={club.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
  <div className="flex min-h-0 flex-col gap-y-3">
    <BlurFade delay={BLUR_FADE_DELAY * 9}>
      <h2 className="text-xl font-bold">Skills</h2>
    </BlurFade>
    <div className="flex flex-col gap-4">
      {/* Frontend */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-1">Frontend</h3>
        <div className="flex flex-wrap gap-1">
          {["React.js", "React Native", "Next.js", "JavaScript", "TypeScript", "TailwindCSS"].map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-1">Backend</h3>
        <div className="flex flex-wrap gap-1">
          {["Node.js", "Express.js", "Flask", "SpringBoot"].map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Database */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-1">Database</h3>
        <div className="flex flex-wrap gap-1">
          {["MongoDB", "MySQL","Firebase","PostgreSQL"].map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* AI/ML */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-1">AI/ML</h3>
        <div className="flex flex-wrap gap-1">
          {["TensorFlow", "PyTorch", "OpenCV","Mediapipe","Hugging Face","Scikit-learn","keras"].map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-1">Tools</h3>
        <div className="flex flex-wrap gap-1">
          {["Git", "Docker", "Figma", "Jira", "PostMan", "Google Cloud"].map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have worked on a variety of projects, from simple websites and apps to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications">
  <div className="space-y-12 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 15}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            My Credentials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
            Industry-recognized certifications that validate my technical expertise across multiple platforms.
          </p>
        </div>
        
        {/* Carousel Container with proper spacing */}
        <div className="w-full ">
          <CertificationCardsCarousel 
            certifications={[
              {
                title: "NPTEL Programming in Java",
                issuer: "IIT Kharagpur",
                date: "Nov 2024",
                skills: ["Java"],
                image: "/nptel.png",
                credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S145250725203900560"
              },
              {
                title: "Docker Essentials",
                issuer: "IBM",
                date: "Jan 2025",
                skills: ["Docker"],
                image: "/dockercert.png",
                credentialUrl: "https://courses.cognitiveclass.ai/certificates/c2085070c0744def933f41384ddf22b3"
              },
              {
                title: "Matlab and ML/DL onramp",
                issuer: "MathWorks",
                date: "Fen 2025",
                skills: ["MatLab","Machine Learning","Deep Learning"],
                image: "/matlab.png",
                credentialUrl: "https://drive.google.com/drive/folders/1iQuQ4_4vzSu8V7ph5d9KOYtRPkei27gz"
              },
              {
                title: "Programming in C",
                issuer: "Udemy",
                date: "Feb 2023",
                skills: ["C"],
                image: "/ccert.png",
                credentialUrl: "https://www.udemy.com/certificate/UC-150d664f-4136-45a3-a01e-5d6f73f6f0c8/"
              },
            ]} 
          />
        </div>
      </div>
    </BlurFade>
  </div>
</section>

      <section id="testimonials">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What People Say
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take my word for it - see what clients and colleagues have to say about working with me.
                </p>
              </div>
              <TestimonialCarousel 
  testimonials={[
    {
      name: "Arnav Madan",
      role: "CEO",
      company: "Niramaya",
      text: "Aditya played a key role in our web development team, contributing significantly to both frontend and back-end integration. His ability to design, develop, and maintain high-quality web applications ensured a seamless user experience and improved overall functionality. Additionally,his expertise in debugging, troubleshooting, and performance optimization made a positive impact on our digital platforms.",
      avatar: "/arnavmadan.png"
    },
    {
      name: "Dattatrey kshirsagar",
      role: "Client",
      company: "SunShine School",
      text: "I had the pleasure of working with Aditya to bring our preschool's website to life, and the experience was fantastic from start to finish. They started with a clean, user-friendly Figma design and turned it into a fully functional website with features like a gallery, call booking, and more. The end result perfectly captured our brand and made it easy for parents to connect with us. Highly recommended!",
      avatar: "/sunshineprin.png"
    },
  ]} 
/>
            </div>
          </BlurFade>
      
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-6 text-center px-4 sm:px-8">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Open Source Contributions
              </div>
              <h2 className="text-black dark:text-white text-3xl font-bold tracking-tighter sm:text-5xl">
                I love building things and contributing to OpenSource projects 
              </h2>
              <GithubGraph
              username="Axestein"
              blockMargin={2}
              lightColorPalette={["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]}
              darkColorPalette={["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]}
              />
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have Previously contributed in Hacktoberfest, SWOC 24, GSSOC 24 and many Club Projects. Check out my Holopin badges and see the contributions I'm proud of!{" "}
                <Link
                  href="https://www.holopin.io/@axestein#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View My Holopin Badges
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/*<section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I'll respond asap trust me.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      */}
    </main>
  );
}
