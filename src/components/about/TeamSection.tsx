"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Md. Shahid Hossain",
    role: "Founder & Full Stack Developer",
    image: "/images/about/team/shahid.jpg",
    facebook: "#",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sarah Johnson",
    role: "UI / UX Designer",
    image: "/images/about/team/member-2.jpg",
    facebook: "#",
    linkedin: "#",
    github: "#",
  },
  {
    name: "David Wilson",
    role: "Backend Engineer",
    image: "/images/about/team/member-3.jpg",
    facebook: "#",
    linkedin: "#",
    github: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Meet the People Behind GearUp
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            A passionate team dedicated to making outdoor adventures
            accessible for everyone.
          </p>
        </motion.div>

        {/* Team Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-primary">
                  {member.role}
                </p>

                {/* Social */}

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}